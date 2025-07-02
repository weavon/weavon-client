import { create } from "zustand";

type ProjectState = {
  projectId?: number;
  projectName?: string;
};

type ProjectAction = {
  setProject: (project: ProjectState) => void;
};

type ProjectStore = ProjectState & ProjectAction;

const useProjectStore = create<ProjectStore>((set) => ({
  setProject: ({ projectId, projectName }) => set({ projectId, projectName }),
}));

export default useProjectStore;
