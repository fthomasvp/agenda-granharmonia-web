import { useQuery } from "@tanstack/react-query";

import { commonAreaKeys } from "../query-keys";
import { getCommonAreaByName } from "../services";
import { CommonArea } from "../types";

type Props = {
  commonArea: CommonArea["name"];
};

export const useCommonAreasQuery = ({ commonArea }: Props) => {
  return useQuery({
    queryKey: commonAreaKeys.list(commonArea),
    queryFn: getCommonAreaByName,
  });
};
