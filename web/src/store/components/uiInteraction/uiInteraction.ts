import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface UiInteractionState {
  toggleStatus: any;
  dynamicFormData: any;
}

// Define the initial state using that type
const initialState: UiInteractionState = {
  toggleStatus: {
    dynamicForm: false,
    registerForm: false,
    loginForm: false,
    profilePage: false,
    site: false,
    leftNav: false,
  },
  dynamicFormData: {
    formData: null,
    pageTitle: null,
    submitCB: null,
  },
};

export const uiInteractionSlice = createSlice({
  name: "uiInteraction",
  initialState,
  reducers: {
    setToggleStatus: (state, action) => {
      state.toggleStatus[action.payload.key] = action.payload.status;
    },
    setDynamicFormData: (state, action) => {
      console.log("33", action.payload.value);
      state.dynamicFormData = {
        ...state.dynamicFormData,
        [action.payload.key]: action.payload.value,
      };
      console.log("44", JSON.parse(JSON.stringify(state.dynamicFormData)));
    },
  },
});

export const { setToggleStatus, setDynamicFormData } =
  uiInteractionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getToggleStatus = (state: RootState) => (key) =>
  state[uiInteractionSlice.name].toggleStatus[key];

export const getDynamicFormData = (state: RootState) =>
  state[uiInteractionSlice.name].dynamicFormData;

export default uiInteractionSlice.reducer;
