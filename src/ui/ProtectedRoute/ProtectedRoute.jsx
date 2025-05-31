import { useEffect } from "react";
import { useNavigate } from "react-router";
import Loader from "../Loader/Loader";
import { useCurrentSession } from "../../hooks/useCurrentSession";
function ProtectedRoute({ children }) {
  const { isAuthenticated, userInfo, sessionLoading } = useCurrentSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate, isAuthenticated]);

  if (sessionLoading) return <Loader />;

  return <div>{children}</div>;
}

export default ProtectedRoute;
