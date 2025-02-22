import { Box } from "@mui/material";

import styled from "styled-components";

import LoginForm from "@pages/login/_component/login-form/LoginForm";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export default LoginPage;
