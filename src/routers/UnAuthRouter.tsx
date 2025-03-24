import { Navigate, Outlet } from "react-router-dom";

import useAuthValidQuery from "@apis/auth/mutations/useAuthValidQuery";

const UnAuthRouter = () => {
  const { isSuccess, isLoading } = useAuthValidQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default UnAuthRouter;
