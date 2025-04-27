import { useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthValidQuery from "@/apis/auth/queries/useAuthValidQuery";
import useLoadingStore from "@/stores/useLoadingStore";

const AuthGuard = () => {
  const { setLoading } = useLoadingStore();

  const { isError: isAuthInvalid, isLoading: isAuthValidLoading } =
    useAuthValidQuery();

  useEffect(() => {
    setLoading(isAuthValidLoading);
  }, [isAuthValidLoading]);

  return isAuthInvalid ? <Navigate to={"/login"} /> : <Outlet />;
};

export default AuthGuard;
