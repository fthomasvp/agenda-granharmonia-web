import {
  Box,
  Button,
  Flex,
  HStack,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// import { InputErrorMessage } from "../../../components/form";

type FormVerifyCodeProps = {
  onSubmit: (data: string) => void;
};

export default function FormVerifyCode({ onSubmit }: FormVerifyCodeProps) {
  const { t } = useTranslation(["common", "glossary", "validation"]);

  const [code, setCode] = useState("");

  const handleChange = (value: string) => {
    setCode(value);
  };

  const handleResend = () => {
    console.log("Reenviar código");
  };

  const handleComplete = (value: string) => {
    onSubmit(value);
  };

  return (
    <Flex flexDir="column">
      <Text color="gray.800" align="center" mb="2">
        {t("enterCodeFromEmail", { ns: "glossary" })}
      </Text>

      <HStack justify="center" spacing={4}>
        <PinInput
          otp
          id="code-input"
          // TODO: uncomment after add request to verify the code
          // isInvalid={Boolean(error)}
          onChange={handleChange}
          value={code}
          placeholder=""
          onComplete={handleComplete}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      {/* TODO: uncomment after add request to verify the code */}
      {/* <HStack justify="center">
        <InputErrorMessage message={error} />
      </HStack> */}

      <HStack justify="center" mt="8" spacing={4}>
        <Box>
          <Button
            // TODO: should be disabled while app is verifying the code
            data-test="resend-button"
            onClick={handleResend}
            variant="outline"
          >
            {t("resend")}
          </Button>
        </Box>
      </HStack>
    </Flex>
  );
}
