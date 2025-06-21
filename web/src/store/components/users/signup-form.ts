import * as Yup from "yup";

const signupForm = {
  formElements: [
    {
      element: "input",
      type: "text",
      name: "username",
      label: "E-Mail",
      placeholder: "Enter E-Mail",
      value: "",
      validation: "email",
    },
    {
      element: "input",
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Enter Password",
      value: "",
      validation: "password",
    },
    {
      element: "input",
      type: "text",
      name: "phone",
      label: "Mobile",
      placeholder: "Enter Mobile No.",
      value: "",
      validation: "phoneno",
    },
  ],
};

export default signupForm;
