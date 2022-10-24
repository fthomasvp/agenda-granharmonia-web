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
import { GranHarmoniaLogo } from "../../assets/images";

const inactiveColor = "#A39E9E";
const activeColor = "#EB6A3F";

export default function Header() {
  const { t } = useTranslation(["common"]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                  leftIcon={<FaHome color={activeColor} />}
                >
                  <Flex flex={1}>
                    <LinkOverlay href="/home">{t("home")}</LinkOverlay>
                  </Flex>
                </Button>
              </LinkBox>
              <Button
                variant="ghost"
                iconSpacing="3"
                w="100%"
                leftIcon={<FaBell color={inactiveColor} />}
              >
                <Flex flex={1}>{t("alerts")}</Flex>
              </Button>
              <LinkBox w="100%">
                <Button
                  variant="ghost"
                  iconSpacing="3"
                  w="100%"
                  leftIcon={<FaCalendarDay color={inactiveColor} />}
                >
                  <Flex flex={1}>
                    <LinkOverlay href="/bookings">
                      {t("bookings")}
                    </LinkOverlay>
                  </Flex>
                </Button>
              </LinkBox>
              <Button
                variant="ghost"
                iconSpacing="3"
                w="100%"
                leftIcon={<FaUser color={inactiveColor} />}
              >
                <Flex flex={1}>{t("profile")}</Flex>
              </Button>
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