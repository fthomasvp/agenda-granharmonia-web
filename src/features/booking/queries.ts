import { BookingCommonAreas } from "./types";

export const areaSlotKeys = {
  all: [{ scope: "areaSlots" }] as const,
  lists: () => [{ ...areaSlotKeys.all[0], entity: "list" }] as const,
  list: (commonAreaId: string, date: string) =>
    [{ ...areaSlotKeys.lists()[0], commonAreaId, date }] as const,
};

export const commonAreaKeys = {
  all: [{ scope: "commonAreas" }] as const,
  lists: () => [{ ...commonAreaKeys.all[0], entity: "list" }] as const,
  search: (commonArea: BookingCommonAreas) =>
    [{ ...commonAreaKeys.all[0], commonArea }] as const,
};
