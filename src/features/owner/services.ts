import { QueryFunctionContext } from "@tanstack/react-query";

import api from "../../api";
import { ownerKeys } from "./query-keys";
import type { TOwner } from "./types";

export const getApartmentsByUserIdService = async ({
  queryKey,
  signal,
}: QueryFunctionContext<ReturnType<typeof ownerKeys["list"]>>) => {
  const [{ userId }] = queryKey;
  const { data } = await api.get<TOwner[]>(`/Owners/${userId}`, {
    signal,
  });

  return data;
};
