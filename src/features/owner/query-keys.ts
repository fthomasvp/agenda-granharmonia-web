export const ownerKeys = {
  all: [{ scope: "owners" }] as const,
  lists: () => [{ ...ownerKeys.all[0], entity: "list" }] as const,
  list: (userId: string) => [{ ...ownerKeys.lists()[0], userId }] as const,
};
