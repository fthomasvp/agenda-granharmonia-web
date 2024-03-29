import { Box, Button } from "@chakra-ui/react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Input, PasswordInput } from "../../../components/form";
import type { TAuth } from "../types";

type FormLoginProps = {
  onSubmit: SubmitHandler<TAuth>;
};

export default function FormLogin({ onSubmit }: FormLoginProps) {
  const { t } = useTranslation(["common", "glossary"]);
  const navigate = useNavigate();

  const { handleSubmit } = useFormContext<TAuth>();

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb="5">
        <Input label={t("email")} name="email" />
      </Box>

      <Box mb="5">
        <PasswordInput label={t("password")} name="password" />
      </Box>

      <Box mb="7">
        <Button variant="link" onClick={handleForgotPassword}>
          {t("forgotPassword", { ns: "glossary" })}
        </Button>
      </Box>

      <Box>
        <Button type="submit" w="100%">
          {t("login")}
        </Button>
      </Box>
    </form>
  );
}
