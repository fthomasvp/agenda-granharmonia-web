import {
	Input as ChakraInput,
	type InputProps as ChakraInputProps,
	// FormLabel,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";

type InputProps = ChakraInputProps & {
	label: string;
	name: string;
};

export default function Input({ label, name, ...rest }: InputProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const errorMessage = (errors as any)[`${name}`]?.message;

	return (
		<>
			{/* <FormLabel htmlFor={name}>{label}</FormLabel> */}
			<ChakraInput
				data-test={`${name}-input`}
				id={name}
				// isInvalid={Boolean(errors[`${name}`])}
				{...register(name)}
				{...rest}
			/>
			<ErrorMessage message={errorMessage} />
		</>
	);
}
