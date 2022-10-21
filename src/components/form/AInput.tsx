import { FormLabel, Input, InputProps, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

type AInputProps = InputProps & {
  label: string;
  name: string;
};

export default function AInput({ label, name, ...rest }: AInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
      <Text color="red.500">{(errors as any)[`${name}`]?.message}</Text>
    </>
  );
}
