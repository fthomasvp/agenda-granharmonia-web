import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaExclamationCircle } from "react-icons/fa";

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <HStack align="center">
      <Icon as={FaExclamationCircle} color="red.500" />
      <Text color="red.500">{message}</Text>
    </HStack>
  );
}
