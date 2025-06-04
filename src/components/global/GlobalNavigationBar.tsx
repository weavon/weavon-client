import { styled } from "@mui/material";

function GlobalNavigationBar() {
  return <GlobalNavigationBarWrapper></GlobalNavigationBarWrapper>;
}

const GlobalNavigationBarWrapper = styled("div")`
  width: 250px;
  height: 100%;

  padding: 5px;
`;

export default GlobalNavigationBar;
