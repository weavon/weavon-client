import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "@pages/login/LoginPage";
import JoinPage from "@pages/join/JoinPage";

import AuthRouter from "@routers/AuthRouter";
import UnAuthRouter from "@routers/UnAuthRouter";
import CommonRouter from "@routers/CommonRouter";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<CommonRouter />}>
        <Route element={<UnAuthRouter />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Route>
        <Route element={<AuthRouter />}>
          <Route path="/" />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
