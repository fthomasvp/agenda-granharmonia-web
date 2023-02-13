import api from "../../api";
import type { CommonArea } from "./types";

export const getCommonAreaByName = async (
  commonArea: CommonArea["name"],
  signal?: AbortSignal
) => {
  const { data } = await api.get<CommonArea>(`/CommonAreas/${commonArea}`, {
    signal,
  });

  return data;
};
