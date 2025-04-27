import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import AuthGuard from "@/components/guard/AuthGuard";
import UnAuthGuard from "@/components/guard/UnAuthGuard";
import PageLayout from "@/components/layout/PageLayout";
import HomePage from "@/pages/home/HomePage";
import JoinPage from "@/pages/join/JoinPage";
import LoginPage from "@/pages/login/LoginPage";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<UnAuthGuard />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Route>
    </Route>,
  ),
);

export default AppRouter;
