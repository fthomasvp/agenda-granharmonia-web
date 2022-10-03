import {
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import {
  forgotPasswordSchema,
  ForgotPasswordType,
  FormForgotPassword,
} from "../features/authentication";

import { MobileContainer } from "../layouts";

const instructions = [
  "forgotPasswordInstructionOne",
  "forgotPasswordInstructionTwo",
  "forgotPasswordInstructionThree",
];

export default function ForgotPassword() {
  const { t } = useTranslation(["common", "glossary", "validation"]);
  const navigate = useNavigate();

  const methods = useForm<ForgotPasswordType>({
    resolver: yupResolver(forgotPasswordSchema(t)),
  });

  const onSubmit: SubmitHandler<ForgotPasswordType> = (data) => {
    console.log("> data", data);
  };

  return (
    <MobileContainer>
      <Flex flex={1}>
        <Button leftIcon={<FaArrowLeft />} onClick={() => navigate(-1)}>
          {t("back")}
        </Button>
      </Flex>

      <Flex flex={0.5}>
        <Heading fontWeight="bold">{t("forgotPassword_question")}</Heading>
      </Flex>

      <Flex flex={1} mb="10">
        <List spacing="5">
          {instructions.map((item, index) => (
            <ListItem key={index} display="flex" alignItems="center">
              <ListIcon as={FaInfoCircle} />
              {t(`${item}`, { ns: "glossary" })}
            </ListItem>
          ))}
        </List>
      </Flex>

      <Flex flex={2} flexDir="column">
        <FormProvider {...methods}>
          <FormForgotPassword onSubmit={onSubmit} />
        </FormProvider>
      </Flex>
    </MobileContainer>
  );
}
