import {
	Box,
	Flex,
	HStack,
	Icon,
	LinkBox,
	LinkOverlay,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import { Greeting, Loading } from "@/components/ui";
import { useUser } from "@/features/auth/store";
import { userHousesQueryOptions } from "@/features/user/queries";

export const Route = createFileRoute("/(signed)/_mainLayout/location")({
	loader: ({ context }) =>
		context.queryClient.ensureQueryData(
			userHousesQueryOptions(context.user?.id || ""),
		),
	component: Location,
	// TODO: Replace `Loading` with Skeleton for loading
	pendingComponent: Loading,
	// TODO: Add Error component
	// errorComponent: CustomErrorComponentTBD
});

function Location() {
	const { t } = useTranslation(["glossary", "common"]);
	const user = useUser();

	const {
		data: { data },
	} = useSuspenseQuery(userHousesQueryOptions(user?.id || ""));

	return (
		<Box px={"7"} minHeight={"100vh"} w={"full"}>
			<Stack flexDir={"column"} gap={"8"}>
				<Flex flexDir="column">
					<Greeting
						username={user?.firstName || ""}
						message={t("selectYourApartment")}
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
								<HStack justify="center" pr="6">
									<Icon
										as={FaChevronRight}
										color="blackAlpha.400"
										boxSize="8"
									/>
								</HStack>
							</Flex>
						</LinkBox>
					))}
				</Stack>
			</Stack>
		</Box>
	);
}

// TODO: Use message from locale files
// if (!data?.length) {
// 	return <Empty message="Não há dados" />;
// }
