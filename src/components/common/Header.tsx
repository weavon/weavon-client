import { Box } from "@mui/material";

import styled from "styled-components";

const Header = () => {
  return <HeaderWrapper></HeaderWrapper>;
};

const HeaderWrapper = styled(Box)`
  width: 100%;
  height: 50px;

  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
