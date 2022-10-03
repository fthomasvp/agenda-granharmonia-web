import { Box, Button } from "@chakra-ui/react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { AInput } from "../../../components/form";
import type { ForgotPasswordType } from "../types";

type FormForgotPasswordProps = {
  onSubmit: SubmitHandler<ForgotPasswordType>;
};

export default function FormForgotPassword({
  onSubmit,
}: FormForgotPasswordProps) {
  const { t } = useTranslation(["common"]);

  const { handleSubmit } = useFormContext<ForgotPasswordType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb="5">
        <AInput label={t("email")} name="email" />
      </Box>

      <Box>
        <Button type="submit" w="100%">
          {`${t("send")} ${t("code").toLowerCase()}`}
        </Button>
      </Box>
    </form>
  );
}
