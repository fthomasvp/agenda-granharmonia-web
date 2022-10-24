import {
  Flex,
  HStack,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";

type BookingOptionProps = {
  bgColor: string;
  image: string;
  name: string;
  path: string;
};

export default function BookingOption({
  bgColor,
  image,
  name,
  path,
}: BookingOptionProps) {
  const { t } = useTranslation(["glossary"]);

  return (
    <LinkBox as="div" display="flex" flexDir="row" flex={1}>
      <Flex
        bg={bgColor}
        flex={1}
        align="center"
        borderRadius="md"
        shadow="md"
        mb="3"
      >
        <VStack flex={1} spacing="2">
          <Image alt={name} src={image} />
          <LinkOverlay href={path}>
            <Text color="#F9F0EE">{name}</Text>
          </LinkOverlay>
        </VStack>
        <HStack flex={1} justify="center">
          <Text color="#F9F0EE">{t("checkTimes")}</Text>
          <Icon as={FaChevronRight} color="#F9F0EE" boxSize="8" />
        </HStack>
      </Flex>
    </LinkBox>
  );
}
