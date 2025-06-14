import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { asyncWrapper } from "../utils/asyncHelperUtils";
import { getCurrentSession } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../features/authentication/authSlice";
export const useCurrentSession = () => {
  const dispatch = useDispatch();
  const [sessionLoading, setSessionLoading] = useState(true);

  const { isAuthenticated, userInfo } = useSelector((store) => store.auth);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await asyncWrapper(getCurrentSession);
      if (data?.session?.user) {
        dispatch(
          setUser({
            isAuthenticated:
              data.session.user.aud == "authenticated" ? true : false,
            userInfo: { ...data.session.user.user_metadata },
          })
        );
      }

      if (error) {
        clearUser();
      }
      setSessionLoading(false);
    };
    if (!userInfo) {
      getSession();
    } else {
      setSessionLoading(false);
    }
  }, []);

  return { isAuthenticated, userInfo, sessionLoading };
};
