import AppRouter from "@routers/AppRouter";

import { ThemeProvider } from "@mui/material";
import GlobalTheme from "@assets/themes/GlobalTheme";

import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@utils/queryClient";

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
