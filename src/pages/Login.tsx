import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { GranHarmoniaLogo } from "../assets/images";
import { HalfBall, OxentiLabStamp } from "../components/ui";
import {
  authService,
  FormLogin,
  loginSchema,
  TAuth,
  useAuthActions,
  useUser,
} from "../features/authentication";
import { useToast } from "../features/ui";

const FROM = "/location";

export default function SignIn() {
  const { t } = useTranslation(["common", "validation", "glossary"]);
  const navigate = useNavigate();
  const toast = useToast();
  const user = useUser();
  const { setAuth } = useAuthActions();

  const methods = useForm<TAuth>({
    resolver: zodResolver(loginSchema(t)),
  });

  const loginMutation = useMutation({
    mutationFn: authService,
    onSuccess: (data) => {
      setAuth(data);
      navigate(FROM, { replace: true });
    },
    onError: (_error) => {
      toast({
        title: "Error",
        description: "Usuário ou senha inválidos",
        status: "error",
      });
    },
  });

  const onSubmit: SubmitHandler<TAuth> = (data) => {
    loginMutation.mutate(data);
  };

  useEffect(() => {
    if (user?.id) {
      navigate(FROM, { replace: true });
    }
  }, [user?.id, navigate]);

  return (
    <>
      <HalfBall right={0} />

      <Flex justify="center" my="8">
        <Image
          src={GranHarmoniaLogo}
          alt="Blue Gran Harmonia word with orange Agenda word below"
        />
      </Flex>

      <Flex flex={1} flexDir="column" justify="center">
        <Heading fontWeight="semibold">
          {t("welcome", { ns: "glossary" })}
        </Heading>
        <Text
          color="gray.800"
          fontWeight="light"
          fontSize={["sm", "md"]}
          mb="4"
          mt="2"
        >
          {t("doLoginToContinue", { ns: "glossary" })}
        </Text>
        <Box bg="orange.400" borderRadius="full" h="2px" w="40px" />
      </Flex>

      <Flex flex={2} flexDir="column">
        <FormProvider {...methods}>
          <FormLogin onSubmit={onSubmit} />
        </FormProvider>
      </Flex>

      <Center flex={1}>
        <OxentiLabStamp />
      </Center>

      <HalfBall bottom={0} right={0} boxSize="10" />
    </>
  );
}
