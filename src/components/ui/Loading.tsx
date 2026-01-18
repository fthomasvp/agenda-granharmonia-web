import { Center, Spinner, type SpinnerProps } from "@chakra-ui/react";

export default function Loading(props: SpinnerProps) {
	return (
		<Center minH={"100vh"}>
			<Spinner {...props} />
		</Center>
	);
}
