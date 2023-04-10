import { QueryFunctionContext } from "@tanstack/react-query";

import api from "../../api";
import { areaSlotKeys } from "./query-keys";
import type { AreaSlot } from "./types";

export const getAreaSlotsService = async ({
  queryKey,
  signal,
}: QueryFunctionContext<ReturnType<typeof areaSlotKeys["list"]>>) => {
  const [{ commonAreaId, date }] = queryKey;
  const { data } = await api.get<AreaSlot[]>("/AreaSlots", {
    params: {
      commonAreaId,
      date,
    },
    signal,
  });

  return data;
};
