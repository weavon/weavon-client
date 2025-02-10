import AppRouter from "@routers/AppRouter";

import { ThemeProvider } from "@mui/material";
import GlobalTheme from "@assets/themes/GlobalTheme";

import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
