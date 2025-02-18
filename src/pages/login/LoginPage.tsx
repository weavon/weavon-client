import useAuthLoginMutation from "@apis/auth/hooks/useAuthLoginMutation";
import useAuthValidQuery from "@apis/auth/hooks/useAuthValidQuery";
import { Box, Button, TextField } from "@mui/material";
import PageContainer from "@pages/_component/PageContainer";
import useAuthStore from "@stores/useAuthStore";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuthStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, isSuccess } = useAuthValidQuery();

  const { mutate: authLoginMutate } = useAuthLoginMutation();

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <Navigate to="/" />;
  }

  const requestLogin = (username: string, password: string) => {
    authLoginMutate(
      {
        username,
        password,
      },
      {
        onSuccess: (data) => {
          const authorization = data.headers["authorization"];
          login(authorization.substring(7));
          navigate("/");
        },
      }
    );
  };

  const handleUsernameChange = (username: string) => {
    setUsername(username);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  const handleLogin = () => {
    requestLogin(username, password);
  };

  return (
    <PageContainer>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Username"
            type="text"
            onChange={(e) => handleUsernameChange(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
        </Box>
        <Box>
          <Button onClick={handleLogin}>Login</Button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default LoginPage;
