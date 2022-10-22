import { FormLabel, Input, InputProps } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import InputErrorMessage from "./InputErrorMessage";

type AInputProps = InputProps & {
  label: string;
  name: string;
};

export default function AInput({ label, name, ...rest }: AInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = (errors as any)[`${name}`]?.message;

  return (
    <>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
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
