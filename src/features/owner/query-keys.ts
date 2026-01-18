export const ownerKeys = {
	all: [{ scope: "owners" }] as const,
	lists: () => [{ ...ownerKeys.all[0], entity: "list" }] as const,
	details: () => [{ ...ownerKeys.all[0], entity: "detail" }] as const,
	detail: (userId: string) => [{ ...ownerKeys.details()[0], userId }] as const,
};
