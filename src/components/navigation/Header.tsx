import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaBars, FaSignOutAlt } from "react-icons/fa";

import { GranHarmoniaLogo } from "../../assets/images";
import { clearAuthStorage } from "../../features/authentication";
import { MENU } from "../../utils";
import MenuItem from "./MenuItem";

export default function Header() {
  const { t } = useTranslation(["common"]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    clearAuthStorage();
    onClose();

    document.location.reload();
  };

  return (
    <Flex flexDir="row" mb="8">
      <Box>
        <IconButton
          variant="ghost"
          aria-label="drawer menu button"
          icon={<FaBars />}
          onClick={onOpen}
        />
      </Box>

      <Box ml="3">
        <Image
          alt="Blue Gran Harmonia word with orange Agenda word below"
          src={GranHarmoniaLogo}
          w="32"
        />
      </Box>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader>
            <Image
              alt="Blue Gran Harmonia word with orange Agenda word below"
              src={GranHarmoniaLogo}
              w="32"
            />
          </DrawerHeader>

          <Divider />

          <DrawerBody>
            <VStack alignItems="flex-start" spacing="4">
              {MENU.map((item) => (
                <MenuItem
                  key={crypto.randomUUID()}
                  icon={item.icon}
                  name={item.name}
                  path={item.path}
                />
              ))}
            </VStack>
          </DrawerBody>

          <Divider />

          <DrawerFooter>
            <Button
              variant="ghost"
              mr="3"
              leftIcon={<FaSignOutAlt />}
              onClick={handleLogout}
            >
              {t("logout")}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
