import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/navigation";

type MobileContainerProps = {
  showHeader?: boolean;
};

export default function MobileLayout({
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
      overflowY="auto"
    >
      {showHeader && <Header />}
      <Outlet />
    </Flex>
  );
}
