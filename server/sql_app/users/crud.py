from sqlalchemy.orm import Session
from pprint import pprint
from . import models, schemas


def get_user(db: Session, user_id: int):
    db_result = db.query(models.User).filter(models.User.id == user_id).first()
    db.close()
    return db_result


def get_user_by_email(db: Session, email: str):
    db_result = db.query(models.User).filter(models.User.email == email).first()
    db.close()
    return db_result


def get_users(db: Session, skip: int = 0, limit: int = 100):
    db_result = db.query(models.User).offset(skip).limit(limit).all()
    db.close()
    return db_result


def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    db.close()
    return db_user

