export const areaSlotKeys = {
  all: [{ scope: "areaSlots" }] as const,
  lists: () => [{ ...areaSlotKeys.all[0], entity: "list" }] as const,
  list: (commonAreaId: string, date: string) =>
    [{ ...areaSlotKeys.lists()[0], commonAreaId, date }] as const,
};
