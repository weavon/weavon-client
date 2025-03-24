import { useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthValidQuery from "@apis/auth/mutations/useAuthValidQuery";

import useAuthStore from "@stores/useAuthStore";
import useLoadingStore from "@stores/useLoadingStore";

const AuthRouter = () => {
  const { logout } = useAuthStore();

  const { setLoading } = useLoadingStore();

  const { isError, isLoading: isAuthValidLoading } = useAuthValidQuery();

  useEffect(() => {
    if (isError) {
      logout();
    }
  }, [isError]);

  useEffect(() => {
    setLoading(isAuthValidLoading);
  }, [isAuthValidLoading]);

  return isError ? <Navigate to={"/login"} /> : <Outlet />;
};

export default AuthRouter;
