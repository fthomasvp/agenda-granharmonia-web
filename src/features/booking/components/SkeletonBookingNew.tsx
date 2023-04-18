import {
  Flex,
  HStack,
  Skeleton,
  SkeletonCircle,
  Stack,
} from "@chakra-ui/react";
import { memo } from "react";

function List() {
  return (
    <Flex flex={6} flexDir="column" mt="8">
      {[1, 2, 3].map((item) => (
        <HStack key={item} alignItems="center" px="3" py="4">
          <Flex flex={0.1} justify="center">
            <SkeletonCircle size="6" />
          </Flex>
          <Flex flex={1} ml="1.5">
            <Skeleton h="6" w={["24", "28"]} />
          </Flex>
          <Flex>
            <Skeleton h="10" w="24" />
          </Flex>
        </HStack>
      ))}
    </Flex>
  );
}

function Form() {
  return (
    <Flex flex={1} mt="8" align="center" justify="flex-start">
      <Stack spacing="2">
        <Skeleton h="6" w={["24", "28"]} />
        <Skeleton h="10" w="48" />
      </Stack>
    </Flex>
  );
}

function SkeletonBookingNew() {}

SkeletonBookingNew.Form = memo(Form);
SkeletonBookingNew.List = memo(List);
export default SkeletonBookingNew;
