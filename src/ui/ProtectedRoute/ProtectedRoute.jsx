import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import Loader from "../Loader/Loader";

function ProtectedRoute({ children }) {
  const { userInfo, isSessionLoading } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo && !isSessionLoading) navigate("/login");
  }, [userInfo, navigate, isSessionLoading]);

  if (isSessionLoading) return <Loader />;

  return <div>{children}</div>;
}

export default ProtectedRoute;
