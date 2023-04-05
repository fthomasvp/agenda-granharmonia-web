import { useQuery } from "@tanstack/react-query";

import { areaSlotKeys } from "../query-keys";
import { getAreaSlotsService } from "../services";

type Props = {
  commonAreaId: string;
  date: string;
};

export const useAreaSlotsQuery = ({ commonAreaId, date }: Props) => {
  return useQuery({
    queryKey: areaSlotKeys.list(commonAreaId, date),
    queryFn: ({ signal }) =>
      getAreaSlotsService({ commonAreaId, date }, signal),
    enabled: Boolean(commonAreaId! && date),
  });
};
