import { useEffect, useState } from "react";
import { asyncWrapper } from "../utils/asyncHelperUtils";
import { getCurrentSession } from "../services/authService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authentication/authSlice";
import { useCallback } from "react";
export const useCurrentUser = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, userInfo } = useSelector((store) => store.auth);
  const [isSessionLoading, setIsSessionLoading] = useState(true);

  const getUserInfo = useCallback(async () => {
    const { data } = await asyncWrapper(() => getCurrentSession());
    if (data?.session?.user) {
      dispatch(
        setUser({
          isAuthenticated:
            data.session.user.aud == "authenticated" ? true : false,
          userInfo: { ...data.session.user.user_metadata },
        })
      );
    }

    setIsSessionLoading(false);
  }, [dispatch]);

  useEffect(() => {
    if (!userInfo && !isAuthenticated) {
      setIsSessionLoading(true);
      getUserInfo();
    }
  }, [userInfo, isAuthenticated, getUserInfo]);

  return { userInfo, isSessionLoading };
};
