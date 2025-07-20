import { useEffect } from "react";

import { Navigate } from "react-router-dom";

import useAuthStore from "@/stores/useAuthStore";

const LogoutPage = () => {
  const { accessToken, logout } = useAuthStore();

  useEffect(() => {
    logout();
  }, [logout]);

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return <></>;
};

export default LogoutPage;
