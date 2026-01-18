import type { House } from "../house/types";

export type UserHouse = Pick<House, "id" | "name">;
