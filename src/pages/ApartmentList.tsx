import { Box, Flex, VStack } from "@chakra-ui/react";

import { Greeting, HalfBall } from "../components/ui";

const mockedData = [
  {
    id: 1,
    apartmentNumber: "901",
    apartmentBlock: "B",
    apartmentMembers: 3,
  },
  {
    id: 2,
    apartmentNumber: "102",
    apartmentBlock: "C",
    apartmentMembers: 1,
  },
  {
    id: 3,
    apartmentNumber: "1001",
    apartmentBlock: "A",
    apartmentMembers: 5,
  },
];

export default function ApartmentList() {
  return (
    <>
      <HalfBall right={0} />

      <Flex flexDir="column" mb="12">
        <Greeting username="Thomas" message="Selecione o seu apartamento" />
      </Flex>

      <Flex flexDir="column" flex={1}>
        <VStack spacing="4">
          {mockedData.map((item) => (
            <Box bg="purple.100">{item.apartmentNumber}</Box>
          ))}
        </VStack>
      </Flex>
    </>
  );
}
