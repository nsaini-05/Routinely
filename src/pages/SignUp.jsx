import SignUpForm from "../features/authentication/SingnUpForm/SignUpForm";
import { useCurrentSession } from "../hooks/useCurrentSession";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Loader from "../ui/Loader/Loader";
function SignUp() {
  const navigate = useNavigate();
  const { isAuthenticated, userInfo, sessionLoading } = useCurrentSession();

  useEffect(() => {
    if (isAuthenticated && userInfo) {
      navigate("/dashboard", { replace: true });
    }
  }, [userInfo, navigate, isAuthenticated]);

  if (sessionLoading) return <Loader />;

  return (
    <div>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
