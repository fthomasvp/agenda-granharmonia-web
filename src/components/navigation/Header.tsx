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
  LinkBox,
  LinkOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  FaBars,
  FaBell,
  FaCalendarDay,
  FaHome,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

import { GranHarmoniaLogo } from "../../assets/images";
import { clearAuthStorage } from "../../features/authentication";
import { baseColors } from "../../themes/base";

export default function Header() {
  const { t } = useTranslation(["common"]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const isActivePath = (path: string) => location.pathname.includes(path);
  const getPathColor = (path: string) =>
    isActivePath(path) ? baseColors.orange["400"] : baseColors.gray["400"];

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
              <LinkBox w="100%">
                <Button
                  variant="ghost"
                  iconSpacing="3"
                  w="100%"
                  leftIcon={<FaHome color={getPathColor("/home")} />}
                >
                  <Flex flex={1}>
                    <LinkOverlay href="/home" color={getPathColor("/home")}>
                      {t("home")}
                    </LinkOverlay>
                  </Flex>
                </Button>
              </LinkBox>
              <LinkBox w="100%">
                <Button
                  variant="ghost"
                  iconSpacing="3"
                  w="100%"
                  leftIcon={<FaBell color={getPathColor("/notifications")} />}
                >
                  <Flex flex={1} justify="space-between" alignItems="center">
                    <LinkOverlay
                      href="/notifications"
                      color={getPathColor("/notifications")}
                    >
                      {t("notifications")}
                    </LinkOverlay>
                    {/* TODO: create component to show Notifications quantity */}
                    <Box
                      bgColor="blue.600"
                      borderRadius="full"
                      color="whiteAlpha.900"
                      px="2"
                      py="0.5"
                    >
                      1
                    </Box>
                  </Flex>
                </Button>
              </LinkBox>
              <LinkBox w="100%">
                <Button
                  variant="ghost"
                  iconSpacing="3"
                  w="100%"
                  leftIcon={<FaCalendarDay color={getPathColor("/bookings")} />}
                >
                  <Flex flex={1}>
                    <LinkOverlay
                      href="/bookings"
                      color={getPathColor("/bookings")}
                    >
                      {t("bookings")}
                    </LinkOverlay>
                  </Flex>
                </Button>
              </LinkBox>
              <LinkBox w="100%">
                <Button
                  variant="ghost"
                  iconSpacing="3"
                  w="100%"
                  leftIcon={<FaUser color={getPathColor("/profile")} />}
                >
                  <Flex flex={1}>
                    <LinkOverlay
                      href="/profile"
                      color={getPathColor("/profile")}
                    >
                      {t("profile")}
                    </LinkOverlay>
                  </Flex>
                </Button>
              </LinkBox>
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
