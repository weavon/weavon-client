import { MenuItem, Select, styled } from "@mui/material";

import useProjectNamesQuery from "@/apis/projects/queries/useProjectNamesQuery";
import palette from "@/assets/colors/palette";

function ProjectList() {
  const { data: projectNames } = useProjectNamesQuery({});

  return (
    <ProjectListContainer>
      {projectNames?.map(({ projectId, projectName }) => (
        <MenuItem key={projectId} value={projectId}>
          {projectName}
        </MenuItem>
      ))}
    </ProjectListContainer>
  );
}

const ProjectListContainer = styled(Select)`
  width: 500px;
  height: 25px;

  color: ${palette.grayscale.white};
  border: 1px solid ${palette.grayscale.white};
`;

export default ProjectList;
