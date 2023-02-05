import api from "../../api";
import type { AreaSlot, CommonArea } from "./types";

export const getAreaSlotsService = async (
  params: any,
  signal?: AbortSignal
) => {
  const { data } = await api.get<Array<AreaSlot>>("/AreaSlots", {
    params,
    signal,
  });

  return data;
};

export const getCommonAreaByName = async (
  commonArea: CommonArea["name"],
  signal?: AbortSignal
) => {
  const { data } = await api.get<CommonArea>(`/CommonAreas/${commonArea}`, {
    signal,
  });

  return data;
};
