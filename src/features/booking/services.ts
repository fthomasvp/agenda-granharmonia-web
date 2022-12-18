import api from "../../api";
import type { AreaSlot, BookingCommonAreas, CommonArea } from "./types";

export const getAreaSlotsService = async (
  params: any,
  signal?: AbortSignal
) => {
  const { data } = await api.get<Array<AreaSlot>>("api/AreaSlots", {
    params,
    signal,
  });

  return data;
};

export const getCommonAreaByName = async (
  commonArea: BookingCommonAreas,
  signal?: AbortSignal
) => {
  const { data } = await api.get<CommonArea>(`api/CommonAreas/${commonArea}`, {
    signal,
  });

  return data;
};
