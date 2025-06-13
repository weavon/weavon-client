import { useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthValidQuery from "@/apis/auth/queries/useAuthValidQuery";
import useAuthStore from "@/stores/useAuthStore";
import useLoadingStore from "@/stores/useLoadingStore";

function UnAuthGuard() {
  const { setLoading } = useLoadingStore();
  const { logout } = useAuthStore();

  const {
    isSuccess: isAuthValid,
    isFetched: isAuthValidFetched,
    isLoading: isAuthValidLoading,
  } = useAuthValidQuery();

  useEffect(() => {
    if (isAuthValidFetched && !isAuthValid) {
      logout();
    }
  }, [isAuthValid, isAuthValidFetched, logout]);

  useEffect(() => {
    setLoading(isAuthValidLoading);
  }, [isAuthValidLoading, setLoading]);

  return isAuthValid ? <Navigate to="/" /> : <Outlet />;
}

export default UnAuthGuard;
