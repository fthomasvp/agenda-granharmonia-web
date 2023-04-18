import create from "zustand";
import { devtools } from "zustand/middleware";

type AlertStore = {
  isOpen: boolean;
  actions: {
    open: () => void;
    close: () => void;
  };
};

const useAlertStore = create<AlertStore>()(
  devtools((set) => ({
    isOpen: false,
    actions: {
      open: () => set(() => ({ isOpen: true })),
      close: () => set(() => ({ isOpen: false })),
    },
  }))
);

export const useAlertIsOpen = () => useAlertStore((state) => state.isOpen);
export const useAlertActions = () => useAlertStore((state) => state.actions);
