import { useQuery } from "@tanstack/react-query";
// import { toaster } from "@/components/ui/toaster";
import { commonAreaKeys } from "../query-keys";
import { getCommonAreaByName } from "../services";
import type { TCommonArea } from "../types";

type Props = {
	commonArea: TCommonArea["name"];
};

export const useCommonAreasQuery = ({ commonArea }: Props) => {
	// Improve this error handler. Maybe creating an util.
	// const handleError = (_error: unknown) => {
	// 	toaster.create({
	// 		title: "Atenção",
	// 		description:
	// 			"Entrar em contato com o suporte para realizar o registro dos horários",
	// 		type: "warning",
	// 	});
	// };

	return useQuery({
		queryKey: commonAreaKeys.list(commonArea),
		queryFn: getCommonAreaByName,
		// TODO: onError and onSuccess were removed from React Query v5
		// onError: handleError,
	});
};
