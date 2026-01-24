import {
	Box,
	Flex,
	LinkBox,
	LinkOverlay,
	Skeleton,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
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
			<Stack flexDir={"column"} gap={"8"}>
				<Flex flexDir="column">
					<Greeting
						username={user?.firstName || ""}
						message={t("selectYourHouse")}
					/>
				</Flex>

				<Stack flexDir="column">
					{data.items.map(({ id, name }) => (
						<LinkBox key={id} as="div" display="flex" flexDir="row">
							<Flex
								flex={1}
								align="center"
								justifyContent="space-between"
								borderRadius="md"
								shadow="md"
								border="1px"
							>
								<VStack py="4">
									<LinkOverlay href="/home">
										<VStack align="flex-start" flexWrap="wrap" px="4">
											<Text
												color="blackAlpha.400"
												fontSize={["lg", "xl", "2xl"]}
												fontWeight="semibold"
											>
												{name}
											</Text>
										</VStack>
									</LinkOverlay>
								</VStack>
							</Flex>
						</LinkBox>
					))}
				</Stack>
			</Stack>
		</Box>
	);
}
