import { QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@mui/material";

import GlobalTheme from "@assets/themes/GlobalTheme";

import AppRouter from "@routers/AppRouter";


import queryClient from "@utils/queryClient";

import "./App.css";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={GlobalTheme}>
        <AppRouter />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
