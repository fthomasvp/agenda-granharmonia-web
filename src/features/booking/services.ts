import type { QueryFunctionContext } from "@tanstack/react-query";

import { apiClient } from "@/lib/axios";
import type { TCommonAreaKeyList } from "./query-keys";
import type { TCommonArea } from "./types";

export const getCommonAreaByName = async ({
	queryKey,
	signal,
}: QueryFunctionContext<TCommonAreaKeyList>) => {
	const [{ commonArea }] = queryKey;
	const { data } = await apiClient.get<TCommonArea>(
		`/CommonAreas/${commonArea}`,
		{
			signal,
		},
	);

	return data;
};
