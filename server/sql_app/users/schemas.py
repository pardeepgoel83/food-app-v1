from pydantic import BaseModel
from sql_app.documents.schemas import Document


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool
    items: list[Document] = []

    class Config:
        from_attributes = True
