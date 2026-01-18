import {
	Box,
	Button,
	CloseButton,
	Drawer,
	// Divider,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	// DrawerOverlay,
	Flex,
	IconButton,
	Image,
	Portal,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { clearAuthStorage } from "@/features/auth/store";
import { MENU } from "@/utils/constants";
import { GranHarmoniaLogo } from "../../assets/images";
import MenuItem from "./MenuItem";

export function Header() {
	const { t } = useTranslation(["common"]);
	const [open, setOpen] = useState(false);

	// TODO: Remove cookies, storage and trigger invalidations
	// TODO: Redirect to /login page
	const logout = () => {
		clearAuthStorage();
		// onClose();

		document.location.reload();
	};

	return (
		<Flex flexDir="row" mb="8">
			{/* <Box>
				<IconButton
					variant="ghost"
					aria-label="drawer menu button"
					// icon={<FaBars />}
					onClick={onOpen}
				/>
			</Box> */}

			{/* <Box ml="3">
				<Image
					alt="Blue Gran Harmonia word with orange Agenda word below"
					src={GranHarmoniaLogo}
					w="32"
				/>
			</Box> */}

			<Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
				<Drawer.Trigger asChild>
					<Button variant="outline" size="sm">
						Open Drawer
					</Button>
				</Drawer.Trigger>
				<Portal>
					<Drawer.Backdrop />
					<Drawer.Positioner>
						<Drawer.Content>
							<Drawer.Header>
								<Drawer.Title>Drawer Title</Drawer.Title>
							</Drawer.Header>
							<Drawer.Body>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</Drawer.Body>
							<Drawer.Footer>
								<Button variant="outline" onClick={logout} w={"full"}>
									Logout
								</Button>
							</Drawer.Footer>
							<Drawer.CloseTrigger asChild>
								<CloseButton size="sm" />
							</Drawer.CloseTrigger>
						</Drawer.Content>
					</Drawer.Positioner>
				</Portal>
			</Drawer.Root>

			{/* <Drawer isOpen={isOpen} onClose={onClose} placement="left">
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
			</Drawer> */}
		</Flex>
	);
}
