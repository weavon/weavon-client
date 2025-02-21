import { Navigate } from "react-router-dom";

import { Box } from "@mui/material";

import styled from "styled-components";

import useAuthValidQuery from "@apis/auth/hooks/useAuthValidQuery";

import LoginForm from "@pages/login/_component/forms/LoginForm";

const LoginPage = () => {
  const { isLoading, isSuccess } = useAuthValidQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <Navigate to="/" />;
  }

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
