import { useEffect } from "react";

import useAuthValidQuery from "@/apis/auth/queries/useAuthValidQuery";
import Guard from "@/components/guard/Guard";
import useAuthStore from "@/stores/useAuthStore";
import useLoadingStore from "@/stores/useLoadingStore";

const UnAuthGuard = () => {
  const { setLoading } = useLoadingStore();
  const { accessToken, logout } = useAuthStore();

  console.log("accessToken", accessToken);

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
};

export default UnAuthGuard;
