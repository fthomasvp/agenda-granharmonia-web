import { useQuery } from "@tanstack/react-query";

import { areaSlotKeys } from "../queries";
import { getAreaSlotsService } from "../services";

type Props = {
  commonAreaId: string;
  date: string;
};

export const useAreaSlotsQuery = ({ commonAreaId, date }: Props) => {
  return useQuery(
    areaSlotKeys.list(commonAreaId, date),
    ({ queryKey: [{ commonAreaId, date }], signal }) =>
      getAreaSlotsService({ commonAreaId, date }, signal),
    {
      enabled: Boolean(commonAreaId! && date),
    }
  );
};
