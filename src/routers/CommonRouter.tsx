import { Outlet } from "react-router-dom";

import Loading from "@components/Loading";
import Toast from "@components/Toast";

const CommonRouter = () => {
  return (
    <>
      <Loading />
      <Toast />
      <Outlet />
    </>
  );
};

export default CommonRouter;
