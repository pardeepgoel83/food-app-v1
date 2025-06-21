const loginForm = {
  formElements: [
    {
      element: "input",
      type: "text",
      name: "username",
      label: "Username",
      placeholder: "Enter Username",
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
  ],
};

export default loginForm;
