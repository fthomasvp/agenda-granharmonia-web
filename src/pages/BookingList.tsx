import { Divider, Flex, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { PartyRoomPurple } from "../assets/images";
import { BookingCard } from "../features/booking";

export default function BookingList() {
  const { t } = useTranslation(["common", "glossary"]);

  return (
    <>
      <Heading color="#272727" size="md" textAlign="center" mb="2.5">
        {t("activeBookings", { ns: "glossary" })}
      </Heading>

      <Flex>
        {/* TODO: fetch active booking from back-end */}
        <BookingCard
          isActive
          bgColor="#B955E8"
          name={t("partyRoom")}
          image={PartyRoomPurple}
          date="24/10/2022"
          time="16:00"
        />
      </Flex>

      <Divider mt="5" mb="8" />

      <Heading color="#272727" size="md" textAlign="center" mb="2.5">
        {t("previousBookings", { ns: "glossary" })}
      </Heading>

      {[2021, 2020, 2019, 2018, 2017].map((item, index) => (
        <Flex key={index}>
          <BookingCard
            bgColor="#50BE76"
            name={t("gym")}
            date={`24/10/${item}`}
            time="16:00"
          />
        </Flex>
      ))}
    </>
  );
}
