import { Flex, VStack } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";
import { Header } from "@/components/navigation/Header";

export function MainLayout() {
	return (
		<Flex
			data-element="main-layout"
			flex={1}
			flexDir="column"
			alignItems="stretch"
			h="100%"
			minH={"inherit"}
			// w={["100%", "80%", "80%", "50%"]}
			maxW={{ smDown: "full", sm: "breakpoint-2xl" }}
			marginInline={"auto"}
			pos="relative"
			overflowY="auto"
		>
			<Header />
			<main style={{ minHeight: "inherit" }}>
				<VStack gap={"12"} minH={"inherit"} justifyContent={"center"}>
					<Outlet />
				</VStack>
			</main>
		</Flex>
	);
}
