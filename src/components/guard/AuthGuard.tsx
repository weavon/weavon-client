import { useEffect } from "react";

import useAuthValidQuery from "@/apis/auth/queries/useAuthValidQuery";
import Guard from "@/components/guard/Guard";
import useLoadingStore from "@/stores/useLoadingStore";

function AuthGuard() {
  const { setLoading } = useLoadingStore();

  const {
    isError: isAuthInvalid,
    isFetched: isAuthValidFetched,
    isLoading: isAuthValidLoading,
  } = useAuthValidQuery();

  useEffect(() => {
    setLoading(isAuthValidLoading);
  }, [isAuthValidLoading, setLoading]);

  return (
    <Guard
      render={isAuthValidFetched}
      guard={isAuthInvalid}
      navigateTo={"/login"}
    />
  );
}

export default AuthGuard;
