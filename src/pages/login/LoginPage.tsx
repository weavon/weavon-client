import { styled } from "@mui/material";

import LoginForm from "@/pages/login/_components/LoginForm";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm />
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

export default LoginPage;
