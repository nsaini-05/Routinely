import SignUpForm from "../features/authentication/SingnUpForm/SignUpForm";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Loader from "../ui/Loader/Loader";
function SignUp() {
  const { userInfo, isSessionLoading } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) navigate("/dashboard");
  }, [navigate, userInfo]);

  if (isSessionLoading && !userInfo) return <Loader />;

  return (
    <div>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
