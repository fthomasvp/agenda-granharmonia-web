import { HStack, Icon, Text } from "@chakra-ui/react";
import { LuCircleAlert } from "react-icons/lu";

type ErrorMessageProps = {
	message: string;
};

export function ErrorMessage(props: ErrorMessageProps) {
	const { message } = props;

	if (!message) return null;

	return (
		<HStack align="center">
			<Icon as={LuCircleAlert} color="red.500" />
			<Text color="red.500">{message}</Text>
		</HStack>
	);
}
