import { useState } from "react";
import { asyncWrapper } from "../../../utils/asyncHelperUtils";
import Form from "../../../ui/Form/Form";
import { logIn } from "../../../services/authService";
import toast from "react-hot-toast";
import { setUser } from "../authSlice";
import { useDispatch } from "react-redux";

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
function LoginForm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formState) => {
    setLoading(true);
    const { data, error } = await asyncWrapper(() => logIn(formState));
    if (error) {
      toast.error(error);
    } else {
      toast.success("Logged In Successfully");
      dispatch(
        setUser({
          isAuthenticated: data.user.aud == "authenticated" ? true : false,
          userInfo: { ...data.user.user_metadata },
        })
      );
    }
    setLoading(false);
  };

  return (
    <Form
      fields={fields}
      heading={"Log In to Routinely"}
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
