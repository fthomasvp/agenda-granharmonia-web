import type { House } from "../house/types";

export type UserHouse = Pick<House, "id" | "name">;
export type UserApartment = {
	createdAt: string;
	door: string;
	houseId: string;
	id: string;
	tower: string;
	updatedAt: string;
};
