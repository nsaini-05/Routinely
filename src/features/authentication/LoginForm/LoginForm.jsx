import { useState } from "react";
import Form from "../../../ui/Form/Form";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "john@gmail.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "****",
    },
  ];

  const handleFormSubmit = (formState) => {
    console.log(formState);
  };

  return (
    <Form
      fields={fields}
      heading={"Sign up to Routinely"}
      subHeading={"Quick & Simple way to Build and Mantain Habits"}
      onSubmit={handleFormSubmit}
      loading={loading}
      furtherLink={"/signup"}
      furtherLinkText={"Sign Up"}
      footerMessage={"Don't have account? "}
      btnText={"Login"}
    ></Form>
  );
}

export default LoginForm;
