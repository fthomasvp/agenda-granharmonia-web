import { Box, Button, Skeleton, Stack, Text, VStack } from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Greeting } from "@/components/ui";
import { userApartmentsQueryOptions } from "@/features/user/queries";

const apartmentSearchSchema = z.object({
	houseId: z.string(),
});

function ApartmentSkeleton() {
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

export const Route = createFileRoute(
	"/(authorized)/_authorized-layout/apartment",
)({
	component: Apartment,
	validateSearch: (search) => apartmentSearchSchema.parse(search),
	loaderDeps: ({ search: { houseId } }) => ({ houseId }),
	loader: ({ context, deps }) => {
		const userId = context.user?.id || "";
		const houseId = deps.houseId;
		context.queryClient.ensureQueryData(
			userApartmentsQueryOptions(userId, houseId),
		);
	},
	pendingComponent: ApartmentSkeleton,
});

function Apartment() {
	const { t } = useTranslation(["glossary", "common"]);
	const { user } = Route.useRouteContext();
	const { houseId } = Route.useLoaderDeps();

	const userId = user?.id || "";

	const {
		data: { data },
	} = useSuspenseQuery(userApartmentsQueryOptions(userId, houseId));

	return (
		<Box px={"7"} minHeight={"100vh"} w={"full"}>
			<Stack flexDir={"column"} gap={"8"}>
				<Greeting
					username={user?.firstName || ""}
					message={t("selectYourApartment")}
				/>

				<VStack alignItems={"flex-start"} width={"full"}>
					{data?.items?.map(({ id, tower, door }) => (
						<Button
							key={id}
							asChild
							justifyContent={"flex-start"}
							width={"full"}
							py={"6"}
						>
							<Link to="/home">
								<Text fontWeight="semibold">
									{door} - {tower}
								</Text>
							</Link>
						</Button>
					))}
				</VStack>
			</Stack>
		</Box>
	);
}

// TODO: Use message from locale files
// if (!data?.length) {
// 	return <Empty message="Não há dados" />;
// }
