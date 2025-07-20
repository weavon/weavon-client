import { Button, Divider, styled } from "@mui/material";

import { API_URL } from "@/constants/APP";
import LoginForm from "@/pages/login/_components/LoginForm";

const LoginPage = () => {
  const handleLoginGoogle = () => {
    window.location.href = `${API_URL}/oauth2/authorization/google`;
  };

  return (
    <LoginPageContainer className="login-page">
      <LoginWrapper>
        <LoginForm />
        <br />
        <Divider>or</Divider>
        <br />
        <Button variant="contained" onClick={handleLoginGoogle}>
          Google Login
        </Button>
      </LoginWrapper>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled("div")`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export default LoginPage;
