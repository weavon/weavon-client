import LoginPage from "@pages/login/LoginPage";
import AuthRouter from "@routers/AuthRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
