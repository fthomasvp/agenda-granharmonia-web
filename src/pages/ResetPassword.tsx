import { Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PasswordGreenLocker, UpdatedStatusNeonCarrot } from "../assets/images";
import { BackButton, HalfBall } from "../components/ui";
import {
  FormResetPassword,
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

  const [isPassReseted, setIsPassReseted] = useState(false);

  const onSubmit: SubmitHandler<ResetPasswordType> = (data) => {
    console.log("> ResetPassword :: data", data);

    setIsPassReseted(true);
  };

  const navigateToLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <MobileContainer>
      <HalfBall right={0} />

      {!isPassReseted ? (
        <VStack flex={1} justify="center">
          <Flex justifyContent="center" mb="10">
            <Image
              alt="person holding updated cards"
              src={UpdatedStatusNeonCarrot}
            />
          </Flex>

          <VStack spacing="3">
            <Text fontSize="lg" fontWeight="semibold">
              {t("updatedPassword")}
            </Text>

            <Button variant="link" onClick={navigateToLogin}>
              {t("doLoginToContinue", { ns: "glossary" })}
            </Button>
          </VStack>
        </VStack>
      ) : (
        <>
          <Flex flex={1}>
            <BackButton />
          </Flex>

          <Flex flex={1}>
            <Heading fontWeight="semibold">{t("enterNewPassword")}</Heading>
          </Flex>

          <Flex flex={1} justifyContent="center" mb="10">
            <Image
              src={PasswordGreenLocker}
              alt="person closing a green locker"
            />
          </Flex>

          <Flex flex={2} flexDir="column">
            <FormProvider {...methods}>
              <FormResetPassword onSubmit={onSubmit} />
            </FormProvider>
          </Flex>
        </>
      )}

      <HalfBall bottom={0} right={0} boxSize="10" />
    </MobileContainer>
  );
}
