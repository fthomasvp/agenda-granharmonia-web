import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

export type BookingCardProps = {
  isActive?: boolean;
  bgColor: string;
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
          <Text color="#F9F0EE">{name}</Text>
          <Text as="span" fontSize="sm" fontWeight="light" color="#F9F0EE">
            Realizado em{" "}
            <Text
              as={isActive ? "p" : "span"}
              fontSize="sm"
              fontWeight="light"
              color="#F9F0EE"
            >
              {date} às {time}h
            </Text>
          </Text>
        </VStack>
      </HStack>
    </Flex>
  );
}
