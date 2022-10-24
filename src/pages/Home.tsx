import { Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import {
  GrillRed,
  GymGreen,
  PartyRoomPurple,
  SwimmingPoolBlue,
} from "../assets/images";
import { HalfBall } from "../components/ui";
import { BookingOption, Greeting } from "../features/home";

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
        <BookingOption
          bgColor="#50BE76"
          name={t("gym")}
          image={GymGreen}
          path="/bookings/gym"
        />
        <BookingOption
          bgColor="#D85761"
          name={t("grill")}
          image={GrillRed}
          path="/bookings/grill"
        />
        <BookingOption
          bgColor="#5662D6"
          name={t("swimmingPool")}
          image={SwimmingPoolBlue}
          path="/bookings/swimming-pool"
        />
        <BookingOption
          bgColor="#B955E8"
          name={t("partyRoom")}
          image={PartyRoomPurple}
          path="/bookings/party-room"
        />
      </Flex>
    </>
  );
}
