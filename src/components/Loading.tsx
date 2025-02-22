import { Box } from "@mui/material";

import styled from "styled-components";

const Loading = () => {
  return <LoadingContainer>Loading....</LoadingContainer>;
};

const LoadingContainer = styled(Box)`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;

export default Loading;
