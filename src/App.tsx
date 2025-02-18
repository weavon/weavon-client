import AppRouter from "@routers/AppRouter";

import { ThemeProvider } from "@mui/material";
import GlobalTheme from "@assets/themes/GlobalTheme";

import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
