import { Outlet } from "react-router-dom";

import GlobalNavigationBar from "@components/common/GlobalNavigationBar";
import Header from "@components/common/Header";

import { Box } from "@mui/material";

import styled from "styled-components";

const PageLayout = () => {
  return (
    <PageLayoutWrapper>
      <Header />
      <GlobalNavigationBar />
      <Outlet />
    </PageLayoutWrapper>
  );
};

const PageLayoutWrapper = styled(Box)`
  width: 100vw;
  height: 100vh;
`;

export default PageLayout;
