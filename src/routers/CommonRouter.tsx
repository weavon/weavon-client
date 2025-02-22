import { Outlet } from "react-router-dom";

import Loading from "@components/Loading";

const CommonRouter = () => {
  return (
    <>
      <Loading />
      <Outlet />
    </>
  );
};

export default CommonRouter;
