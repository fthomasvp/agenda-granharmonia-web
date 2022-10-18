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

type FormVerifyCodeProps = {
  onSubmit: (data: string) => void;
};

export default function FormVerifyCode({ onSubmit }: FormVerifyCodeProps) {
  const { t } = useTranslation(["common", "glossary", "validation"]);

  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleChange = (value: string) => {
    setCode(value);

    if (value.length === 6) {
      setError("");
    }
  };

  const handleError = (data: string) => {
    return data.length < 6;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (handleError(code)) {
      setError(t("invalidCode", { ns: "validation" }));

      return;
    }

    onSubmit(code);
  };

  const handleResend = () => {
    console.log("Reenviar código");

    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex flexDir="column">
        <Text align="center" mb="2">
          {t("enterCodeFromEmail", { ns: "glossary" })}
        </Text>

        <HStack justify="center" spacing={4}>
          <PinInput
            otp
            id="code-input"
            isInvalid={Boolean(error)}
            onChange={handleChange}
            value={code}
            placeholder=""
          >
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <Text align="center" color="red.500">
          {error}
        </Text>

        <HStack justify="center" mt="8" spacing={4}>
          <Box>
            <Button
              data-test="resend-button"
              onClick={handleResend}
              variant="outline"
            >
              {t("resend")}
            </Button>
          </Box>
          <Box>
            <Button data-test="confirm-button" type="submit">
              {t("confirm")}
            </Button>
          </Box>
        </HStack>
      </Flex>
    </form>
  );
}
