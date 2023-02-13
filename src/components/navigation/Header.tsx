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
import { baseColors } from "../../themes/base";

export default function Header() {
  const { t } = useTranslation(["common"]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const isActivePath = (aPath: string) => location.pathname.includes(aPath);

  const handleLogout = () => {
    localStorage.removeItem("auth-storage");

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
        <Image alt="Gran Harmonia logo" src={GranHarmoniaLogo} w="32" />
      </Box>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader>
            <Image alt="Gran Harmonia logo" src={GranHarmoniaLogo} w="32" />
          </DrawerHeader>

          <Divider />

          <DrawerBody>
            <VStack alignItems="flex-start" spacing="4">
              <LinkBox w="100%">
                <Button
                  variant="ghost"
                  iconSpacing="3"
                  w="100%"
                  leftIcon={
                    <FaHome
                      color={
                        isActivePath("/home")
                          ? baseColors.orange["400"]
                          : baseColors.gray["400"]
                      }
                    />
                  }
                >
                  <Flex flex={1}>
                    <LinkOverlay href="/home">{t("home")}</LinkOverlay>
                  </Flex>
                </Button>
              </LinkBox>
              <LinkBox w="100%">
                <Button
                  variant="ghost"
                  iconSpacing="3"
                  w="100%"
                  leftIcon={
                    <FaBell
                      color={
                        isActivePath("/notifications")
                          ? baseColors.orange["400"]
                          : baseColors.gray["400"]
                      }
                    />
                  }
                >
                  <Flex flex={1} justify="space-between" alignItems="center">
                    <LinkOverlay href="/notifications">
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
                  leftIcon={
                    <FaCalendarDay
                      color={
                        isActivePath("/bookings")
                          ? baseColors.orange["400"]
                          : baseColors.gray["400"]
                      }
                    />
                  }
                >
                  <Flex flex={1}>
                    <LinkOverlay href="/bookings">{t("bookings")}</LinkOverlay>
                  </Flex>
                </Button>
              </LinkBox>
              <LinkBox w="100%">
                <Button
                  variant="ghost"
                  iconSpacing="3"
                  w="100%"
                  leftIcon={
                    <FaUser
                      color={
                        isActivePath("/profile")
                          ? baseColors.orange["400"]
                          : baseColors.gray["400"]
                      }
                    />
                  }
                >
                  <Flex flex={1}>
                    <LinkOverlay href="/profile">{t("profile")}</LinkOverlay>
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
