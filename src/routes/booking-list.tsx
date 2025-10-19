import { Flex, Heading } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PartyRoomPurple } from "../assets/images";
import { BookingCard } from "../features/booking";

export const Route = createFileRoute("/booking-list")({
	component: BookingList,
});

function BookingList() {
	const { t } = useTranslation(["common", "glossary"]);

	return (
		<>
			<Heading color="blackAlpha.400" size="md" textAlign="center" mb="2.5">
				{t("activeBookings", { ns: "glossary" })}
			</Heading>

			<Flex>
				{/* TODO: fetch active booking from back-end */}
				<BookingCard
					isActive
					bgColor="purple.400"
					name={t("partyRoom")}
					image={PartyRoomPurple}
					date="24/10/2022"
					time="16:00"
				/>
			</Flex>

			{/* <Divider mt="5" mb="8" /> */}

			<Heading color="blackAlpha.400" size="md" textAlign="center" mb="2.5">
				{t("previousBookings", { ns: "glossary" })}
			</Heading>

			{/* TODO: fetch previous bookings from back-end */}
			{[2021, 2020, 2019, 2018, 2017].map((item) => (
				<Flex key={item}>
					<BookingCard
						bgColor="green.400"
						name={t("gym")}
						date={`24/10/${item}`}
						time="16:00"
					/>
				</Flex>
			))}
		</>
	);
}
