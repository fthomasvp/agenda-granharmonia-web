import { useQuery } from "@tanstack/react-query";

import { useToast } from "../../ui";
import { commonAreaKeys } from "../query-keys";
import { getCommonAreaByName } from "../services";
import type { TCommonArea } from "../types";

type Props = {
  commonArea: TCommonArea["name"];
};

export const useCommonAreasQuery = ({ commonArea }: Props) => {
  const toast = useToast();

  // Improve this error handler. Maybe creating an util.
  const handleError = (_error: unknown) => {
    toast({
      title: "Atenção",
      description:
        "Entrar em contato com o suporte para realizar o registro dos horários",
      status: "warning",
    });
  };

  return useQuery({
    queryKey: commonAreaKeys.list(commonArea),
    queryFn: getCommonAreaByName,
    onError: handleError,
  });
};
