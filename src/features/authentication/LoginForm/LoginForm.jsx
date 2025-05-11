import { useState } from "react";
import { asyncWrapper } from "../../../utils/asyncHelperUtils";
import Form from "../../../ui/Form/Form";
import { logIn } from "../../../services/authService";
import toast from "react-hot-toast";

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

  const handleFormSubmit = async (formState) => {
    const { data, error } = await asyncWrapper(() => logIn(formState));

    if (error) {
      toast.error(error);
    } else {
      console.log(data);
      //To DO : Set Data and Navigate to other places
    }
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
