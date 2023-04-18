import {
  Flex,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";

import { Empty, Greeting, HalfBall, Loading } from "../components/ui";
import { useApartmentsByUserIdQuery } from "../features/owner";

export default function Location() {
  const { t } = useTranslation(["glossary", "common"]);

  const { data, isFetching } = useApartmentsByUserIdQuery({
    // TODO: get user ID from Zustand store
    userId: "e76ce01b-4347-40c4-9e3c-afeb7adda80d",
  });

  if (isFetching) {
    // TODO: add Skeleton loading
    return <Loading />;
  }

  if (!data?.length) {
    // TODO: use texts from locale files
    return <Empty message="Não há dados" />;
  }

  return (
    <>
      <HalfBall right={0} />

      <Flex flexDir="column" mb="12">
        <Greeting username="Thomas" message={t("selectYourApartment")} />
      </Flex>

      <Stack flexDir="column" justify="center" flex={1} spacing="4">
        {data.map(({ id, apartment }) => (
          <LinkBox key={id} as="div" display="flex" flexDir="row">
            <Flex
              flex={1}
              align="center"
              justifyContent="space-between"
              borderRadius="md"
              shadow="md"
              border="1px"
            >
              <VStack py="4">
                <LinkOverlay href="/home">
                  <VStack spacing="2" align="flex-start" flexWrap="wrap" px="4">
                    <Text
                      color="blackAlpha.400"
                      fontSize={["lg", "xl", "2xl"]}
                      fontWeight="semibold"
                    >
                      {t("apartment", { ns: "common" })} {apartment.number}
                    </Text>
                    <Text color="blackAlpha.400" fontSize={["md", "lg", "xl"]}>
                      {t("block", { ns: "common" })} {apartment.block}
                    </Text>
                  </VStack>
                </LinkOverlay>
              </VStack>
              <HStack justify="center" pr="6">
                <Icon as={FaChevronRight} color="blackAlpha.400" boxSize="8" />
              </HStack>
            </Flex>
          </LinkBox>
        ))}
      </Stack>
    </>
  );
}
