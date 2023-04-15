import create from "zustand";
import { devtools } from "zustand/middleware";

type AlertStore = {
  isOpen: boolean;
  actions: {
    setIsOpen: (data: boolean) => void;
  };
};

const useAlertStore = create<AlertStore>()(
  devtools((set) => ({
    isOpen: false,
    actions: {
      setIsOpen: (data) => set(() => ({ isOpen: data })),
    },
  }))
);

export const useAlertIsOpen = () => useAlertStore((state) => state.isOpen);
export const useAlertActions = () => useAlertStore((state) => state.actions);
