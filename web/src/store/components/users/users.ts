import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

import loginForm from "./login-form";
import signupForm from "./signup-form";

// Define a type for the slice state
interface UsersState {
  user: any;
  isLoggedIn: boolean;
  loginForm: any;
  signupForm: any;
}

// Define the initial state using that type
const initialState: UsersState = {
  user: {},
  isLoggedIn: false,
  loginForm: loginForm,
  signupForm: signupForm,
};

export const usersSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserSignupData: (state, action) => {
      state.signupForm = {
        ...state.signupForm,
        formElements: state.signupForm.formElements.map((item: any) => {
          if (item.type === "text") item.value = "aaaa";
          return item;
        }),
      };
    },
  },
});

export const { setUserSignupData } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getLoginStatus = (state: RootState) => state.users.isLoggedIn;
export const getLoginForm = (state: RootState) => state.users.loginForm;
export const getSignupForm = (state: RootState) => state.users.signupForm;

export default usersSlice.reducer;
