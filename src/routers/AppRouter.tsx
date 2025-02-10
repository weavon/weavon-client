import ComponentPage from "@pages/dev/component/ComponentPage";
import LoginPage from "@pages/login/LoginPage";
import AuthRouter from "@routers/AuthRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<AuthRouter />}>
        <Route path="/dev/component" element={<ComponentPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
