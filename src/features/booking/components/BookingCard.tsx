import {
  BackgroundProps,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export type BookingCardProps = {
  isActive?: boolean;
  bgColor: BackgroundProps["bg"];
  image?: string;
  name: string;
  date: string;
  time: string;
};

export default function BookingCard({
  bgColor,
  image,
  name,
  date,
  time,
  isActive = false,
}: BookingCardProps) {
  return (
    <Flex
      bg={bgColor}
      flex={1}
      align="center"
      borderRadius="md"
      shadow="md"
      mb="3"
    >
      <HStack py="3" spacing="4">
        {isActive && <Image alt={name} src={image} ml="4" />}

        <VStack
          flex={1}
          align="flex-start"
          justify="flex-start"
          spacing="2"
          ml="4"
        >
          <Text>{name}</Text>
          <Text as="span" fontWeight="light">
            Realizado em{" "}
            <Text as={isActive ? "p" : "span"} fontWeight="light">
              {date} às {time}h
            </Text>
          </Text>
        </VStack>
      </HStack>
    </Flex>
  );
}
