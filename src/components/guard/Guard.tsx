import { Navigate, Outlet } from "react-router-dom";

interface GuardProps {
  render: boolean;
  guard: boolean;
  navigateTo: string;
}

const Guard = ({ render, guard, navigateTo }: GuardProps) => {
  if (!render) return null;

  if (guard) {
    console.log("GUARD", guard);
    return <Navigate to={navigateTo} />;
  }

  return <Outlet />;
};

export default Guard;
