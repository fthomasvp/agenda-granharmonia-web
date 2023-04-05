import { Button, Flex, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaClock } from "react-icons/fa";

import { getCommonAreaColor, STATUS_AVAILABLE } from "../../../utils";
import { useAlertActions } from "../../ui";
import type { AreaSlot } from "../types";

type AreaSlotItemProps = AreaSlot & {
  onReservation: (areaSlotId: string) => void;
};

export default function AreaSlotItem({
  id,
  status,
  timeSlot,
  commonArea,
  onReservation,
}: AreaSlotItemProps) {
  const { t } = useTranslation(["common"]);

  const { setIsOpen } = useAlertActions();

  const isAvailable = status === STATUS_AVAILABLE;

  const openAlert = () => {
    setIsOpen(true);
    onReservation(id!);
  };

  return (
    <ListItem
      display="flex"
      alignItems="center"
      px="3"
      py="4"
      bgColor={isAvailable ? getCommonAreaColor(commonArea.name) : "gray.400"}
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
        {isAvailable ? (
          <Button alignSelf="flex-end" variant="solid" onClick={openAlert}>
            {t("reserve").toUpperCase()}
          </Button>
        ) : (
          <Text>{t("reserved")}</Text>
        )}
      </Flex>
    </ListItem>
  );
}
