import create from "zustand";
import { devtools } from "zustand/middleware";

type AlertStore = {
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
};

export const useAlertStore = create<AlertStore>()(
  devtools((set) => ({
    isOpen: false,
    setIsOpen: (data) => set(() => ({ isOpen: data })),
  }))
);
