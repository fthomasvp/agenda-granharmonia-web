import { Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import {
  GrillRed,
  GymGreen,
  PartyRoomPurple,
  SwimmingPoolBlue,
} from "../assets/images";
import { Greeting, HalfBall, ReservationCard } from "../components/ui";

export default function Home() {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <HalfBall right={0} />

      <Flex flexDir="column" mb="12">
        {/* TODO: replace with value from storage (Zustand) */}
        <Greeting username="Thomas" />
      </Flex>

      <Flex flexDir="column" flex={1}>
        <ReservationCard
          bgColor="#50BE76"
          name={t("gym")}
          image={GymGreen}
          path="/reservations/gym"
        />
        <ReservationCard
          bgColor="#D85761"
          name={t("grill")}
          image={GrillRed}
          path="/reservations/grill"
        />
        <ReservationCard
          bgColor="#5662D6"
          name={t("swimmingPool")}
          image={SwimmingPoolBlue}
          path="/reservations/swimming-pool"
        />
        <ReservationCard
          bgColor="#B955E8"
          name={t("partyRoom")}
          image={PartyRoomPurple}
          path="/reservations/party-room"
        />
      </Flex>
    </>
  );
}
