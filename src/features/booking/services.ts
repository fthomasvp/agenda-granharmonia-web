import { QueryFunctionContext } from "@tanstack/react-query";

import api from "../../api";
import { TCommonAreaKeyList } from "./query-keys";
import type { CommonArea } from "./types";

export const getCommonAreaByName = async ({
  queryKey,
  signal,
}: QueryFunctionContext<TCommonAreaKeyList>) => {
  const [{ commonArea }] = queryKey;
  const { data } = await api.get<CommonArea>(`/CommonAreas/${commonArea}`, {
    signal,
  });

  return data;
};
