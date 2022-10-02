import { Box, Button } from "@chakra-ui/react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { AInput } from "../../../components/form";
import type { AuthLogin } from "../types";

type FormLoginProps = {
  onSubmit: SubmitHandler<AuthLogin>;
};

export default function FormLogin({ onSubmit }: FormLoginProps) {
  const { t } = useTranslation(["common"]);
  const { handleSubmit } = useFormContext<AuthLogin>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb="4">
        <AInput label={t("email")} name="email" />
      </Box>

      <Box mb="10">
        <AInput label={t("password")} name="password" type="password" />
      </Box>

      <Box>
        <Button type="submit" w="100%">
          {t("login")}
        </Button>
      </Box>
    </form>
  );
}
