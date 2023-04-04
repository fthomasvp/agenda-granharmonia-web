import {
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import InputErrorMessage from "./InputErrorMessage";

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
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ChakraInput
        data-test={`${name}-input`}
        id={name}
        isInvalid={Boolean(errors[`${name}`])}
        {...register(name)}
        {...rest}
      />
      <InputErrorMessage message={errorMessage} />
    </>
  );
}
