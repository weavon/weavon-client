import { Box } from "@mui/material";

import styled from "styled-components";

const GlobalNavigationBar = () => {
  return <GlobalNavigationBarWrapper>GNB</GlobalNavigationBarWrapper>;
};

const GlobalNavigationBarWrapper = styled(Box)`
  width: 250px;
  height: 100%;

  background-color: aliceblue;
`;

export default GlobalNavigationBar;
