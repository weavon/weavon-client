import { create } from "zustand";

import storage from "@utils/storage";

interface AuthState {
  isAuthenticated: boolean;
}

interface AuthStore extends AuthState {
  login: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  login: (token) => {
    set({ isAuthenticated: true });
    storage.setData("AUTH_TOKEN", {
      token,
    });
  },
  logout: () => {
    set({ isAuthenticated: false });
    storage.removeData("AUTH_TOKEN");
  },
}));

export default useAuthStore;
