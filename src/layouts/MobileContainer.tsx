import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/ui";

type MobileContainerProps = {
  showHeader?: boolean;
};

export default function MobileContainer({
  showHeader = false,
}: MobileContainerProps) {
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
      {showHeader ? <Header /> : null}
      <Outlet />
    </Flex>
  );
}
