import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";

type AuthState = {
  authToken: string | null;
};

type AuthAction = {
  login: (token: string) => void;
  logout: () => void;
};

type AuthStore = AuthState & AuthAction;

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      authToken: null,
      login: (token: string) => set({ authToken: token }),
      logout: () => set({ authToken: null }),
    }),
    {
      name: "auth-token",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useAuthStore;
