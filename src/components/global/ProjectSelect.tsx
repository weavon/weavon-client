import { MenuItem, Select, styled } from "@mui/material";

import useProjectNamesQuery from "@/apis/projects/queries/useProjectNamesQuery";
import palette from "@/assets/colors/palette";

function ProjectSelect() {
  const { data: projectNames } = useProjectNamesQuery({});

  return (
    <ProjectSelectCotainer>
      {projectNames?.map(({ projectId, projectName }) => (
        <MenuItem key={projectId} value={projectId}>
          {projectName}
        </MenuItem>
      ))}
    </ProjectSelectCotainer>
  );
}

const ProjectSelectCotainer = styled(Select)`
  width: 500px;
  height: 25px;

  border: 1px solid ${palette.grayscele.white};
`;

export default ProjectSelect;
