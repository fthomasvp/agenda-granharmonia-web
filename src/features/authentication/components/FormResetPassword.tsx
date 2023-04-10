import { Box, Button } from "@chakra-ui/react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { PasswordInput } from "../../../components/form";
import type { TResetPasswordType } from "../types";

type FormResetPasswordProps = {
  onSubmit: SubmitHandler<TResetPasswordType>;
};

export default function FormResetPassword({
  onSubmit,
}: FormResetPasswordProps) {
  const { t } = useTranslation(["common", "glossary", "validation"]);

  const { handleSubmit } = useFormContext<TResetPasswordType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb="5">
        <PasswordInput
          label={`${t("new", { context: "female" })} ${t(
            "password"
          ).toLowerCase()}`}
          name="newPassword"
        />
      </Box>

      <Box mb="5">
        <PasswordInput
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
