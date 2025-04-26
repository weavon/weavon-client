import { create } from "zustand";

type ToastState = {
  open: boolean;
  message: string;
  type: "success" | "info" | "warning" | "error";
};

type ToastAction = {
  showSuccess: (message: string) => void;
  showInfo: (message: string) => void;
  showWarning: (message: string) => void;
  showError: (message: string) => void;
  hide: () => void;
};

type ToastStore = ToastState & ToastAction;

const useToastStore = create<ToastStore>((set) => ({
  open: false,
  message: "",
  type: "success",
  showSuccess: (message) =>
    set({ open: true, message: message, type: "success" }),
  showInfo: (message) => set({ open: true, message: message, type: "info" }),
  showWarning: (message) =>
    set({ open: true, message: message, type: "warning" }),
  showError: (message) => set({ open: true, message: message, type: "error" }),
  hide: () => set({ open: false, message: "" }),
}));

export default useToastStore;
