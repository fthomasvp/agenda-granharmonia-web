import create from "zustand";
import { devtools } from "zustand/middleware";

type BookingStore = {
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
};

export const useBookingStore = create<BookingStore>()(
  devtools((set) => ({
    isOpen: false,
    setIsOpen: (data) => set(() => ({ isOpen: data })),
  }))
);
