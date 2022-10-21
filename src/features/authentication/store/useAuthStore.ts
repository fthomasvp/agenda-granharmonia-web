import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import CryptoJS from "crypto-js";

const SALT = import.meta.env.VITE_LOCAL_STORAGE_SALT;

type User = { id: number; email: string };

type AuthState = {
  user: User | null;
  setAuth: (data: User) => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setAuth: (data) => set(() => ({ user: data })),
      }),
      {
        name: "auth-storage",
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
