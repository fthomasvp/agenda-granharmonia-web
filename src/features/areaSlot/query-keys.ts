export const areaSlotKeys = {
  all: ["areaSlots"] as const,
  lists: () => [...areaSlotKeys.all, "list"] as const,
  list: (commonAreaId: string, date: string) =>
    [...areaSlotKeys.lists(), commonAreaId, date] as const,
};
