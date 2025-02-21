import { Navigate, Outlet } from "react-router-dom";

import useAuthValidQuery from "@apis/auth/hooks/useAuthValidQuery";

import useAuthStore from "@stores/useAuthStore";

const AuthRouter = () => {
  const { logout } = useAuthStore();

  const { isError, isLoading } = useAuthValidQuery();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    logout();
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AuthRouter;
