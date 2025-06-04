import { styled } from "@mui/material";

import JoinForm from "@/pages/join/_component/JoinForm";

function JoinPage() {
  return (
    <JoinPageContainer>
      <JoinForm />
    </JoinPageContainer>
  );
}

const JoinPageContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export default JoinPage;
