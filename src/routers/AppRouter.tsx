import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "@pages/login/LoginPage";

import AuthRouter from "@routers/AuthRouter";
import UnAuthRouter from "@routers/UnAuthRouter";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<UnAuthRouter />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<AuthRouter />}>
        <Route path="/" />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
