import { useQuery } from "@tanstack/react-query";

import { commonAreaKeys } from "../query-keys";
import { getCommonAreaByName } from "../services";
import { TCommonArea } from "../types";

type Props = {
  commonArea: TCommonArea["name"];
};

export const useCommonAreasQuery = ({ commonArea }: Props) => {
  return useQuery({
    queryKey: commonAreaKeys.list(commonArea),
    queryFn: getCommonAreaByName,
  });
};
