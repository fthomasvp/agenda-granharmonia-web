export const userKeys = {
	all: [{ scope: "users" }] as const,

	lists: () => [{ ...userKeys.all[0], entity: "list" }] as const,
	listOwners: () => [{ ...userKeys.lists()[0], resource: "owners" }] as const,
	listUserHouses: (userId: string) =>
		[{ ...userKeys.listOwners()[0], userId }] as const,
	listUserApartments: (userId: string, houseId: string) =>
		[{ ...userKeys.listOwners()[0], userId, houseId }] as const,

	details: () => [{ ...userKeys.all[0], entity: "detail" }] as const,
	detail: (userId: string) => [{ ...userKeys.details()[0], userId }] as const,
};
