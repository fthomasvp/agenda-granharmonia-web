import { Box, Button, Skeleton, Text, VStack } from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Greeting } from "@/components/ui";
import { userHousesQueryOptions } from "@/features/user/queries";

function HouseSkeleton() {
	return (
		<Box px={"7"} minHeight={"100vh"} w={"full"}>
			<VStack gap={"8"} width={"full"}>
				<VStack width={"full"} alignItems={"flex-start"}>
					<Skeleton colorPalette={"blue"} height="4" width={"36%"} />
					<Skeleton colorPalette={"blue"} height="4" width={"45%"} />
				</VStack>

				<Skeleton colorPalette={"blue"} height="60px" width={"full"} />
			</VStack>
		</Box>
	);
}

export const Route = createFileRoute("/(authorized)/_authorized-layout/house")({
	component: House,
	loader: ({ context }) => {
		// If you don't await the promise nor return it, the query will be started on the server and will be streamed to the client without blocking the SSR request
		// See https://tanstack.com/router/latest/docs/integrations/query#prefetching-and-streaming
		context.queryClient.ensureQueryData(
			userHousesQueryOptions(context.user?.id || ""),
		);
	},
	pendingComponent: HouseSkeleton,
});

function House() {
	const { t } = useTranslation(["glossary", "common"]);
	const { user } = Route.useRouteContext();

	const {
		data: { data },
	} = useSuspenseQuery(userHousesQueryOptions(user?.id || ""));

	return (
		<Box px={"7"} minHeight={"100vh"} w={"full"}>
			<VStack alignItems={"flex-start"} gap={"8"}>
				<Greeting
					username={user?.firstName || ""}
					message={t("selectYourHouse")}
				/>

				<VStack alignItems={"flex-start"} width={"full"}>
					{data.items.map(({ id, name }) => (
						<Button
							key={id}
							asChild
							justifyContent={"flex-start"}
							width={"full"}
							py={"6"}
						>
							<Link
								to="/apartment"
								search={{
									houseId: id,
								}}
							>
								<Text fontWeight="semibold">{name}</Text>
							</Link>
						</Button>
					))}
				</VStack>
			</VStack>
		</Box>
	);
}
