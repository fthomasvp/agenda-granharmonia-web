import { Heading, Text, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type GreetingProps = {
	username: string;
	message?: string | ReactNode;
};

export default function Greeting({ username, message }: GreetingProps) {
	const { t } = useTranslation(["glossary", "common"]);

	return (
		<VStack alignItems={"flex-start"} gap={0}>
			<Heading fontWeight="semibold">
				{t("hello", { ns: "common" })},{" "}
				<Heading as="span" color="blue.600">
					{username}
				</Heading>
			</Heading>
			<Text color="#666666" fontWeight="light">
				{message}
			</Text>
		</VStack>
	);
}
