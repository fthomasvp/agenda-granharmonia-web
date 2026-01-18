export const userKeys = {
	all: [{ scope: "owners" }] as const,
	lists: () => [{ ...userKeys.all[0], entity: "list" }] as const,
	details: () => [{ ...userKeys.all[0], entity: "detail" }] as const,
	detail: (userId: string) => [{ ...userKeys.details()[0], userId }] as const,
};
