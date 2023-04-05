import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { GranHarmoniaLogo } from "../assets/images";
import { HalfBall, OxentiLabStamp } from "../components/ui";
import {
  AuthLogin,
  authService,
  FormLogin,
  loginSchema,
  useAuthActions,
  useUser,
} from "../features/authentication";

export default function SignIn() {
  const { t } = useTranslation(["common", "validation", "glossary"]);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || "/home";

  const { setAuth } = useAuthActions();
  const user = useUser();

  const loginMutation = useMutation({
    mutationFn: authService,
    onSuccess: () => {
      queryClient.invalidateQueries(["auth"]);
    },
  });

  const methods = useForm<AuthLogin>({
    resolver: yupResolver(loginSchema(t)),
  });

  const onSubmit: SubmitHandler<AuthLogin> = (data) => {
    // loginMutation.mutate(data);
    setAuth({ email: data.email, id: crypto.randomUUID() });
    navigate(from, { replace: true });
  };

  useEffect(() => {
    if (loginMutation.isSuccess) {
      const { data } = loginMutation;

      setAuth(data);
      navigate(from, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginMutation.isSuccess]);

  useEffect(() => {
    if (user?.id) {
      navigate(from, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  return (
    <>
      <HalfBall right={0} />

      <Flex justify="center" my="8">
        <Image src={GranHarmoniaLogo} alt="Gran Harmonia Logo" />
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
