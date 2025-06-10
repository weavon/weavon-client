import { create } from "zustand";

type ProjectStates = {
  projectId?: number;
  projectName?: string;
};

type ProjectActions = {
  setProject: (project: ProjectStates) => void;
};

type ProjectStore = ProjectStates & ProjectActions;

const useProjectStore = create<ProjectStore>((set) => ({
  setProject: ({ projectId, projectName }) => set({ projectId, projectName }),
}));

export default useProjectStore;
