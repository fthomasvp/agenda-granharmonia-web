import { Button, Flex, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaClock } from "react-icons/fa";

import { AreaSlot } from "../../features/booking";
import { getCommonAreaColor, STATUS_AVAILABLE } from "../../utils";

export default function AreaSlotItem({
  status,
  timeSlot,
  commonArea,
}: AreaSlot) {
  const { t } = useTranslation(["common"]);

  return (
    <ListItem
      display="flex"
      alignItems="center"
      px="3"
      py="4"
      bgColor={
        status === STATUS_AVAILABLE
          ? getCommonAreaColor(commonArea.name)
          : "gray.400"
      }
      borderRadius="md"
    >
      <Flex flex={0.1} justify="center">
        <ListIcon as={FaClock} color="whiteAlpha.900" />
      </Flex>
      <Flex flex={1} ml="1.5">
        <Text>
          {timeSlot.startTime} - {timeSlot.finishTime}
        </Text>
      </Flex>
      <Flex>
        {status === STATUS_AVAILABLE ? (
          <Button
            alignSelf="flex-end"
            variant="solid"
            onClick={() => console.log("Clicked to open confirmation modal")}
          >
            {t("reserve").toUpperCase()}
          </Button>
        ) : (
          <Text>{t("reserved")}</Text>
        )}
      </Flex>
    </ListItem>
  );
}
