import { Box, Button } from "@chakra-ui/react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Input } from "../../../components/form";
import type { TForgotPasswordType } from "../types";

type FormForgotPasswordProps = {
  onSubmit: SubmitHandler<TForgotPasswordType>;
};

export default function FormForgotPassword({
  onSubmit,
}: FormForgotPasswordProps) {
  const { t } = useTranslation(["common"]);

  const { handleSubmit } = useFormContext<TForgotPasswordType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb="5">
        <Input label={t("email")} name="email" />
      </Box>

      <Box>
        <Button type="submit" w="100%">
          {`${t("send")} ${t("code").toLowerCase()}`}
        </Button>
      </Box>
    </form>
  );
}
