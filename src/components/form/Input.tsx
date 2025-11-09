import {
	Input as ChakraInput,
	type InputProps as ChakraInputProps,
	mergeRefs,
} from "@chakra-ui/react";
import { forwardRef, useRef } from "react";

type InputProps = ChakraInputProps & {};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	function Input(props, ref) {
		const inputRef = useRef<HTMLInputElement>(null);

		return (
			<ChakraInput
				{...props}
				data-test={`${props.name}-input`}
				id={props.name}
				ref={mergeRefs(ref, inputRef)}
			/>
		);
	},
);
