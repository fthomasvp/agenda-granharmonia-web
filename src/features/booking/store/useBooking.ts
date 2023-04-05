import create from "zustand";
import { devtools } from "zustand/middleware";

type BookingStore = {
  isOpen: boolean;
  actions: {
    setIsOpen: (data: boolean) => void;
  };
};

/**
 * Remember the reason to use this store
 */
const useBookingStore = create<BookingStore>()(
  devtools((set) => ({
    isOpen: false,
    actions: {
      setIsOpen: (data) => set(() => ({ isOpen: data })),
    },
  }))
);

export const useBookingIsOpen = () => useBookingStore((state) => state.isOpen);
export const useBookingActions = () =>
  useBookingStore((state) => state.actions);
