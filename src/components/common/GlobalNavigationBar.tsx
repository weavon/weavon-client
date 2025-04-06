import { Box } from "@mui/material";

import styled from "styled-components";

const GlobalNavigationBar = () => {
  return <GlobalNavigationBarWrapper></GlobalNavigationBarWrapper>;
};

const GlobalNavigationBarWrapper = styled(Box)`
  width: 250px;
  height: 100%;

  padding: 5px;
`;

export default GlobalNavigationBar;
