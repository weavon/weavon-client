import { useEffect } from "react";

import useAuthValidQuery from "@/apis/auth/queries/useAuthValidQuery";
import Guard from "@/components/guard/Guard";
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

  return (
    <Guard render={isAuthValidFetched} guard={isAuthValid} navigateTo="/" />
  );
}

export default UnAuthGuard;
