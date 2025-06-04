import { createTheme } from "@mui/material";

import palette from "@/assets/colors/palette";

const GlobalTheme = createTheme({
  typography: {
    fontFamily: "Pretendard",
    fontSize: 15,
  },
  palette: palette,
});

export default GlobalTheme;
