import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
}

interface LoadingAction {
  setLoading: (isLoading: boolean) => void;
}

type LoadingStore = LoadingState & LoadingAction;

const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}));

export default useLoadingStore;
