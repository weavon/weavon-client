import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
}

interface LoadingStore extends LoadingState {
  setLoading: (isLoading: boolean) => void;
}

const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}));

export default useLoadingStore;
