import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "src/stores/useAuthStore";

const AuthRouter = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AuthRouter;
