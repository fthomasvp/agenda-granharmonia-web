import {
	Button,
	CloseButton,
	Drawer,
	HStack,
	IconButton,
	Link,
	Portal,
	VStack,
} from "@chakra-ui/react";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaBell, FaCalendar, FaHome, FaRegBell } from "react-icons/fa";
import { clearAuthStorage, useAuthActions } from "@/features/auth/store";

const MOCK_NOTIFICATION = 1;

function Logo() {
	return (
		<VStack gap={"1px"} alignItems={"flex-end"}>
			<p>GranHarmonia</p>
			<p>Agenda</p>
		</VStack>
	);
}

export function Header() {
	const { t } = useTranslation(["common"]);
	const router = useRouter();
	const navigate = useNavigate();
	const { setAuth } = useAuthActions();
	const [open, setOpen] = useState(false);

	const toggle = () => {
		setOpen(!open);
	};

	// TODO: Remove cookies, state, storage and trigger invalidations
	const logout = () => {
		toggle();
		setAuth(null);
		clearAuthStorage();
		router.invalidate();
		setTimeout(() => {
			navigate({ to: "/login", replace: true });
		}, 1000);
	};

	return (
		<HStack
			data-block={"header"}
			bg={"blue.500"}
			mb="16"
			py={"11px"}
			px={"5"}
			justifyContent={"space-between"}
			gap={"2"}
			borderBottomStartRadius={"6px"}
			borderBottomEndRadius={"6px"}
		>
			{/* Hamburger Menu + Logo */}
			<HStack gap={"2"}>
				<Drawer.Root open={open} onOpenChange={toggle} placement={"start"}>
					<Drawer.Trigger asChild>
						<IconButton aria-label="Open menu" variant={"outline"}>
							<FaBars color="white" />
						</IconButton>
					</Drawer.Trigger>
					<Portal>
						<Drawer.Backdrop />
						<Drawer.Positioner>
							<Drawer.Content>
								<Drawer.Header bg={"blue.500"} maxHeight={"71px"}>
									<Logo />
								</Drawer.Header>

								<Drawer.Body>
									<VStack alignItems="flex-start" gap="4">
										<Button asChild variant={"ghost"}>
											<Link href="/home">
												<FaHome /> Home
											</Link>
										</Button>
										<Button asChild variant={"ghost"}>
											<Link href="/booking">
												<FaCalendar /> {t("bookings")}
											</Link>
										</Button>
									</VStack>
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

				<Logo />
			</HStack>

			<HStack data-block={"notifications"}>
				<IconButton aria-label="Open notifications" rounded={"full"}>
					{MOCK_NOTIFICATION > 0 ? <FaBell /> : <FaRegBell />}
				</IconButton>
			</HStack>
		</HStack>
	);
}
