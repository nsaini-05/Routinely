import LoginForm from "../features/authentication/LoginForm/LoginForm";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useEffect } from "react";
import Loader from "../ui/Loader/Loader";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
  const { isSessionLoading, userInfo } = useCurrentUser();

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [userInfo, navigate]);

  if (isSessionLoading) return <Loader />;

  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;
