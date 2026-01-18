import { queryOptions } from "@tanstack/react-query";
import { userKeys } from "./query-keys";
import { fetchUserHouses } from "./user-api";

export const userHousesQueryOptions = (userId: string) =>
	queryOptions({
		queryKey: userKeys.detail(userId),
		queryFn: fetchUserHouses,
	});
