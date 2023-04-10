import { useQuery } from "@tanstack/react-query";

import { ownerKeys } from "../query-keys";
import { getApartmentsByUserIdService } from "../services";

type Props = {
  userId: string;
};

export const useApartmentsByUserIdQuery = ({ userId }: Props) => {
  return useQuery({
    queryKey: ownerKeys.list(userId),
    queryFn: getApartmentsByUserIdService,
  });
};
