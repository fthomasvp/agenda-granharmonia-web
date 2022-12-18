import { useQuery } from "@tanstack/react-query";

import { commonAreaKeys } from "../queries";
import { getCommonAreaByName } from "../services";
import { BookingCommonAreas } from "../types";

type Props = {
  commonArea: BookingCommonAreas;
};

export const useCommonAreasQuery = ({ commonArea }: Props) => {
  return useQuery(
    commonAreaKeys.search(commonArea!),
    ({ queryKey: [{ commonArea }], signal }) =>
      getCommonAreaByName(commonArea, signal)
  );
};
