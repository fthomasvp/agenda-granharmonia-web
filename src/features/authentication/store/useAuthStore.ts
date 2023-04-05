import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import CryptoJS from "crypto-js";

const SALT = import.meta.env.VITE_LOCAL_STORAGE_SALT;

type User = { id: string; email: string };

type AuthState = {
  user?: User;
  actions: {
    setAuth: (data: User) => void;
  };
};

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        actions: {
          setAuth: (data) => set(() => ({ user: data })),
        },
      }),
      {
        name: "agenda-auth",
        serialize(state) {
          const stringifiedState = JSON.stringify(state);
          const encryptedState = CryptoJS.AES.encrypt(stringifiedState, SALT);

          return encryptedState.toString();
        },
        deserialize(storage) {
          const decryptedAuthStorage = CryptoJS.AES.decrypt(storage, SALT);
          const encodedAuthStorage = decryptedAuthStorage.toString(
            CryptoJS.enc.Utf8
          );

          return JSON.parse(encodedAuthStorage);
        },
      }
    )
  )
);

export const useUser = () => useAuthStore((state) => state.user);
export const useAuthActions = () => useAuthStore((state) => state.actions);
