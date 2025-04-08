import { useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthValidQuery from "@apis/auth/mutations/useAuthValidQuery";

import useAuthStore from "@stores/useAuthStore";
import useLoadingStore from "@stores/useLoadingStore";

const AuthGuard = () => {
  const { isAuthenticated } = useAuthStore();
  const { setLoading } = useLoadingStore();

  const { isError: isAuthInvalid, isLoading: isAuthValidLoading } =
    useAuthValidQuery();

  useEffect(() => {
    setLoading(isAuthValidLoading);
  }, [isAuthValidLoading]);

  return isAuthInvalid || !isAuthenticated ? (
    <Navigate to={"/login"} />
  ) : (
    <Outlet />
  );
};

export default AuthGuard;
