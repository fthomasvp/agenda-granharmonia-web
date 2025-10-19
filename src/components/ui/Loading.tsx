import { Center, Spinner, type SpinnerProps } from "@chakra-ui/react";

export default function Loading(props: SpinnerProps) {
	return (
		<Center h="full">
			<Spinner {...props} />
		</Center>
	);
}
