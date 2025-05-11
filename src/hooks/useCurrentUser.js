import { useEffect, useState } from "react";
import { asyncWrapper } from "../utils/asyncHelperUtils";
import { getCurrentSession } from "../services/authService";
import { useNavigate } from "react-router";
import { useCallback } from "react";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isSessionLoading, setIsSessionLoading] = useState(true);
  const navigate = useNavigate();
  const getUserInfo = useCallback(async () => {
    const { data, error } = await asyncWrapper(() => getCurrentSession());
    setIsSessionLoading(false);
    if (error || !data.session) {
      navigate("/login", { replace: true });
    } else {
      setCurrentUser(data.session.user);
    }
  }, [navigate]);

  useEffect(() => {
    getUserInfo();
  }, []);

  return { currentUser, isSessionLoading };
};
