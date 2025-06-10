import { useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthValidQuery from "@/apis/auth/queries/useAuthValidQuery";
import useLoadingStore from "@/stores/useLoadingStore";

function UnAuthGuard() {
  const { setLoading } = useLoadingStore();

  const { isSuccess: isAuthValid, isLoading: isAuthValidLoading } =
    useAuthValidQuery();

  useEffect(() => {
    setLoading(isAuthValidLoading);
  }, [isAuthValidLoading, setLoading]);

  return isAuthValid ? <Navigate to="/" /> : <Outlet />;
}

export default UnAuthGuard;
