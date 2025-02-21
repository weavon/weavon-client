import { Box } from "@mui/material";

interface PageContainerProps {
  children?: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: "100vw",
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
