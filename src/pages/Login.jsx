import LoginForm from "../features/authentication/LoginForm/LoginForm";
import { useEffect } from "react";
import Loader from "../ui/Loader/Loader";
import { useNavigate } from "react-router";
import { useCurrentSession } from "../hooks/useCurrentSession";
function Login() {
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
      <LoginForm />
    </div>
  );
}

export default Login;
