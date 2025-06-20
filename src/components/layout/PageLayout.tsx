import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";

import GlobalNavigationBar from "@/components/global/GlobalNavigationBar";
import Header from "@/components/global/Header";

const PageLayout = () => {
  return (
    <PageContainer>
      <Header />
      <PageBodyWrapper>
        <GlobalNavigationBar />
        <PageContentWrapper>
          <Outlet />
        </PageContentWrapper>
      </PageBodyWrapper>
    </PageContainer>
  );
};

const PageContainer = styled("div")`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const PageBodyWrapper = styled("div")`
  width: 100%;
  height: 100%;

  display: flex;
`;

const PageContentWrapper = styled("div")`
  width: 100%;
  height: 100%;

  padding: 5px;
`;

export default PageLayout;
