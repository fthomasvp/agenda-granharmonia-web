import { Flex, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { BackButton } from "../components/ui";
import {
  forgotPasswordSchema,
  ForgotPasswordType,
  FormForgotPassword,
} from "../features/authentication";

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

    navigate("/verify-code");
  };

  return (
    <>
      <Flex flex={1}>
        <BackButton />
      </Flex>

      <Flex flex={1}>
        <Heading fontWeight="bold">
          {t("forgotPassword", { context: "question", ns: "glossary" })}
        </Heading>
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
    </>
  );
}
