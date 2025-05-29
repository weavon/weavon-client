import { useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthValidQuery from "@/apis/auth/queries/useAuthValidQuery";
import useLoadingStore from "@/stores/useLoadingStore";

export default function UnAuthGuard() {
  const { setLoading } = useLoadingStore();

  const { isSuccess: isAuthValid, isLoading: isAuthValidLoading } =
    useAuthValidQuery();

  useEffect(() => {
    setLoading(isAuthValidLoading);
  }, [isAuthValidLoading]);

  return isAuthValid ? <Navigate to="/" /> : <Outlet />;
}
