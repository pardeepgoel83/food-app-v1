import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./components/users/users";
import libraryReducer from "./components/library/library";
import uiInteractionReducer from "./components/uiInteraction/uiInteraction";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    library: libraryReducer,
    uiInteraction: uiInteractionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
