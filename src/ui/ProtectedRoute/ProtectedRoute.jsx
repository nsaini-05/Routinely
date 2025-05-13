import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import Loader from "../Loader/Loader";

function ProtectedRoute({ children }) {
  const { userInfo, isSessionLoading } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) navigate("/login");
  }, [userInfo, navigate]);

  return isSessionLoading ? <Loader /> : <div>{children}</div>;
}

export default ProtectedRoute;
