import { styled } from "@mui/material";

import LoginForm from "@/pages/login/_component/LoginForm";

function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export default LoginPage;
