import { Box } from "@mui/material";
import styled from "styled-components";

import JoinForm from "@/pages/join/_component/JoinForm";

export default function JoinPage() {
  return (
    <JoinPageContainer>
      <JoinForm />
    </JoinPageContainer>
  );
}

const JoinPageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
