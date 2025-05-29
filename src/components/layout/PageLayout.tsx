import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import GlobalNavigationBar from "@/components/global/GlobalNavigationBar";
import Header from "@/components/global/Header";

export default function PageLayout() {
  return (
    <PageWrapper>
      <PageHeaderWrapper>
        <Header />
      </PageHeaderWrapper>
      <PageBodyWrapper>
        <GlobalNavigationBar />
        <PageContentWrapper>
          <Outlet />
        </PageContentWrapper>
      </PageBodyWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled(Box)`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const PageHeaderWrapper = styled(Box)`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const PageBodyWrapper = styled(Box)`
  width: 100%;
  height: 100%;

  display: flex;
`;

const PageContentWrapper = styled(Box)`
  width: 100%;
  height: 100%;

  padding: 5px;
`;
