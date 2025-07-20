import { useEffect } from "react";

import { Navigate, useLocation } from "react-router-dom";

import useAuthStore from "@/stores/useAuthStore";

const LoginSuccessPage = () => {
  const { search } = useLocation();

  const { accessToken, login } = useAuthStore();

  const params = new URLSearchParams(search);
  const accessTokenParam = params.get("accessToken");

  useEffect(() => {
    login(accessTokenParam!);
  }, [accessTokenParam, login]);

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return <></>;
};

export default LoginSuccessPage;
