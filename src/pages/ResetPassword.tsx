import { Flex, Heading, Image } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PasswordGreenLocker } from "../assets/images";
import { BackButton, HalfBall } from "../components/ui";
import {
  FormNewPassword,
  resetPasswordSchema,
  ResetPasswordType,
} from "../features/authentication";
import { MobileContainer } from "../layouts";

export default function ResetPassword() {
  const { t } = useTranslation(["glossary"]);
  const navigate = useNavigate();

  const methods = useForm<ResetPasswordType>({
    resolver: yupResolver(resetPasswordSchema(t)),
  });

  const onSubmit: SubmitHandler<ResetPasswordType> = (data) => {
    console.log("> ResetPassword :: data", data);

    navigate("/", { replace: true });
  };

  return (
    <MobileContainer>
      <HalfBall right={0} />

      <Flex flex={1}>
        <BackButton />
      </Flex>

      <Flex flex={1}>
        <Heading fontWeight="semibold">{t("enterNewPassword")}</Heading>
      </Flex>

      <Flex flex={1} justifyContent="center" mb="10">
        <Image src={PasswordGreenLocker} alt="person closing a green locker" />
      </Flex>

      <Flex flex={2} flexDir="column">
        <FormProvider {...methods}>
          <FormNewPassword onSubmit={onSubmit} />
        </FormProvider>
      </Flex>

      <HalfBall bottom={0} right={0} boxSize="10" />
    </MobileContainer>
  );
}
