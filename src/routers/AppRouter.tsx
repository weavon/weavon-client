import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "@pages/login/LoginPage";

import AuthRouter from "@routers/AuthRouter";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AuthRouter />}>
        <Route path="/" />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
