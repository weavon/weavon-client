import { create } from "zustand";

type LoadingState = {
  isLoading: boolean;
};

type LoadingAction = {
  setLoading: (isLoading: boolean) => void;
};

type LoadingStore = LoadingState & LoadingAction;

const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}));

export default useLoadingStore;
