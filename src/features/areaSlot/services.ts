import api from "../../api";
import type { AreaSlot } from "./types";

export const getAreaSlotsService = async (
  params: any,
  signal?: AbortSignal
) => {
  const { data } = await api.get<AreaSlot[]>("/AreaSlots", {
    params,
    signal,
  });

  return data;
};
