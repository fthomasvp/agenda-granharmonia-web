import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function MobileContainer({ children }: PropsWithChildren) {
  return (
    <Flex
      flex={1}
      flexDir="column"
      alignItems="stretch"
      h="100%"
      w={["100%", "80%", "80%", "50%"]}
      margin="0 auto"
      pos="relative"
    >
      {children}
    </Flex>
  );
}
