import { Box, Button } from "@chakra-ui/react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { APasswordInput } from "../../../components/form";
import type { ResetPasswordType } from "../types";

type FormLoginProps = {
  onSubmit: SubmitHandler<ResetPasswordType>;
};

export default function FormNewPassword({ onSubmit }: FormLoginProps) {
  const { t } = useTranslation(["common", "glossary", "validation"]);

  const { handleSubmit } = useFormContext<ResetPasswordType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb="5">
        <APasswordInput
          label={`${t("new", { context: "female" })} ${t(
            "password"
          ).toLowerCase()}`}
          name="newPassword"
        />
      </Box>

      <Box mb="5">
        <APasswordInput
          label={t("repeatNewPassword", { ns: "glossary" })}
          name="newPasswordConfirmation"
        />
      </Box>

      <Box>
        <Button type="submit" w="100%">
          {`${t("reset")} ${t("password").toLowerCase()}`}
        </Button>
      </Box>
    </form>
  );
}
