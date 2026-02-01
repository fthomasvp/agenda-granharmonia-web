import { queryOptions } from "@tanstack/react-query";
import { userKeys } from "./query-keys";
import { fetchUserApartments, fetchUserHouses } from "./user-api";

// TODO: Perhaps move to `Owner`
export const userHousesQueryOptions = (userId: string) =>
	queryOptions({
		queryKey: userKeys.listUserHouses(userId),
		queryFn: fetchUserHouses,
	});

// TODO: Perhaps move to `Owner`
export const userApartmentsQueryOptions = (userId: string, houseId: string) =>
	queryOptions({
		queryKey: userKeys.listUserApartments(userId, houseId),
		queryFn: fetchUserApartments,
	});
