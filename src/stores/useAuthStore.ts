import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import encryptSessionStorage from "@/service/encryptSessionService";

type AuthState = {
  accessToken: string | null;
};

type AuthAction = {
  login: (token: string) => void;
  logout: () => void;
};

type AuthStore = AuthState & AuthAction;

const useAuthStore = create<AuthStore>()(
  persist(
    (set, _get, store) => ({
      accessToken: null,
      login: (token: string) => set({ accessToken: token }),
      logout: () => {
        set({ accessToken: null });
        store.persist.clearStorage();
      },
    }),
    {
      name: "auth-token",
      storage: createJSONStorage(() => encryptSessionStorage),
    },
  ),
);

export default useAuthStore;
