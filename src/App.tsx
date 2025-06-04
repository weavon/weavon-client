import { ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import GlobalTheme from "@/assets/themes/GlobalTheme";
import Loading from "@/components/global/Loading";
import Toast from "@/components/global/Toast";
import QueryConfig from "@/configs/QueryConfig";
import AppRouter from "@/routers/AppRouter";

import "./App.css";

function App() {
  return (
    <QueryClientProvider client={QueryConfig}>
      <ThemeProvider theme={GlobalTheme}>
        <RouterProvider router={AppRouter} />
        <Loading />
        <Toast />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
