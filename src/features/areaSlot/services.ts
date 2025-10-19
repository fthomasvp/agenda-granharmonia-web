import type { QueryFunctionContext } from "@tanstack/react-query";

import { apiClient } from "@/lib/axios";
import type { areaSlotKeys } from "./query-keys";
import type { TAreaSlot } from "./types";

export const getAreaSlotsService = async ({
	queryKey,
	signal,
}: QueryFunctionContext<ReturnType<(typeof areaSlotKeys)["list"]>>) => {
	const [{ commonAreaId, date }] = queryKey;
	const { data } = await apiClient.get<TAreaSlot[]>("/AreaSlots", {
		params: {
			commonAreaId,
			date,
		},
		signal,
	});

	return data;
};
