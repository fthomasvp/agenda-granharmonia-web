import { useQuery } from "@tanstack/react-query";
import { getApartmentsByUserIdService } from "../owner-api";
import { ownerKeys } from "../query-keys";

type Props = {
	userId: string;
};

export const useApartmentsByUserIdQuery = ({ userId }: Props) => {
	return useQuery({
		queryKey: ownerKeys.list(userId),
		queryFn: getApartmentsByUserIdService,
	});
};
