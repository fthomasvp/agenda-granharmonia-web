import {
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import ErrorMessage from "./ErrorMessage";

type PasswordInputProps = InputProps & {
  label: string;
  name: string;
};

export default function PasswordInput({
  label,
  name,
  ...rest
}: PasswordInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = (errors as any)[`${name}`]?.message;

  const [isVisible, setIsVisible] = useState(false);

  const toggleEyes = () => setIsVisible((prev) => !prev);

  return (
    <>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputGroup>
        <Input
          data-test={`${name}-input`}
          id={name}
          isInvalid={Boolean(errors[`${name}`])}
          type={isVisible ? "text" : "password"}
          {...register(name)}
          {...rest}
        />
        <InputRightElement
          onClick={toggleEyes}
          children={
            !isVisible ? (
              <IconButton aria-label="Eye" variant="ghost" icon={<FaEye />} />
            ) : (
              <IconButton
                aria-label="Eye with slash"
                variant="ghost"
                icon={<FaEyeSlash />}
              />
            )
          }
        />
      </InputGroup>
      <ErrorMessage message={errorMessage} />
    </>
  );
}
