import { createBrowserRouter } from "react-router-dom";

import AuthGuard from "@/components/guard/AuthGuard";
import UnAuthGuard from "@/components/guard/UnAuthGuard";
import PageLayout from "@/components/layout/PageLayout";
import HomePage from "@/pages/home/HomePage";
import JoinPage from "@/pages/join/JoinPage";
import LoginPage from "@/pages/login/LoginPage";
import LogoutPage from "@/pages/logout/LogoutPage";
import LoginSuccessPage from "@/pages/Test";

const AppRouter = createBrowserRouter([
  {
    children: [
      {
        path: "/logout",
        element: <LogoutPage />,
      },
      {
        path: "/login/success",
        element: <LoginSuccessPage />,
      },
      {
        element: <UnAuthGuard />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/join",
            element: <JoinPage />,
          },
        ],
      },
      {
        element: <AuthGuard />,
        children: [
          {
            element: <PageLayout />,
            children: [
              {
                path: "/",
                element: <HomePage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default AppRouter;
