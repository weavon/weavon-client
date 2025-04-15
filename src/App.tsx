import { QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@mui/material";

import GlobalTheme from "@assets/themes/GlobalTheme";

import Toast from "@components/global/Toast";
import Loading from "@components/global/Loading";

import queryClient from "@configs/queryClient";

import AppRouter from "@routers/AppRouter";

import "./App.css";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={GlobalTheme}>
        <AppRouter />
        <Loading />
        <Toast />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
