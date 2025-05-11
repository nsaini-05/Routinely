import { useState } from "react";
import { signUp } from "../../../services/authService";
import { asyncWrapper } from "../../../utils/asyncHelperUtils";
import toast from "react-hot-toast";
import Form from "../../../ui/Form/Form";
import { Link } from "react-router";
function SignUpForm() {
  const [loading, setLoading] = useState(false);

  const fields = [
    { name: "fullName", label: "Full Name", type: "text", placeholder: "John" },
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
    setLoading(true);
    const { data, error } = await asyncWrapper(() => signUp(formState));
    if (error) {
      toast.error(error);
    } else {
      toast.success("User Created Successfully");
    }
    setLoading(false);
  };

  return (
    <Form
      fields={fields}
      heading={"Sign up to Routinely"}
      subHeading={"Quick & Simple way to Build and Mantain Habits"}
      onSubmit={handleFormSubmit}
      loading={loading}
      furtherLink={"/login"}
      furtherLinkText={"LOG IN"}
      footerMessage={"Already a Member? "}
      btnText={"Create an Account"}
    ></Form>
  );
}

export default SignUpForm;
