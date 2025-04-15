import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageLayout from "@components/layout/PageLayout";
import UnAuthGuard from "@components/guard/UnAuthGuard";
import AuthGuard from "@components/guard/AuthGuard";

import LoginPage from "@pages/login/LoginPage";
import JoinPage from "@pages/join/JoinPage";
import HomePage from "@pages/home/HomePage";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<UnAuthGuard />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
