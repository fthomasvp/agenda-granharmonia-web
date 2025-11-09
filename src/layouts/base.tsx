import { Flex, VStack } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";
import { Header } from "@/components/navigation/Header";

type MainLayoutProps = {
	showHeader?: boolean;
};

export function BaseLayout(props: MainLayoutProps) {
	const { showHeader = false } = props;

	return (
		<Flex
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
			{showHeader && <Header />}
			<main style={{ minHeight: "inherit" }}>
				<VStack gap={"12"} minH={"inherit"} justifyContent={"center"}>
					<Outlet />
				</VStack>
			</main>
		</Flex>
	);
}
