import { Box, Button, HStack } from "@chakra-ui/react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { AInput } from "../../../components/form";

type FormVerifyCodeProps = {
  onSubmit: SubmitHandler<{ code: string }>;
};

export default function FormVerifyCode({ onSubmit }: FormVerifyCodeProps) {
  const { t } = useTranslation(["common", "glossary"]);

  const { handleSubmit } = useFormContext<{ code: string }>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb="5">
        <AInput
          label={t("enterCodeFromEmail", { ns: "glossary" })}
          name="code"
        />
      </Box>

      <HStack spacing="6">
        <Button
          onClick={() => console.log("Reenviar código")}
          variant="outline"
          w="100%"
        >
          {t("resend")}
        </Button>
        <Button type="submit" w="100%">
          {t("confirm")}
        </Button>
      </HStack>
    </form>
  );
}
