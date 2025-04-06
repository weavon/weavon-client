import { Box } from "@mui/material";

import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <div>Home</div>
      <div>Title</div>
      <div>Profile</div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Box)`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f0f0f0;
`;

export default Header;
