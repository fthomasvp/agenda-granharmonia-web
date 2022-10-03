import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import {
  AuthLogin,
  FormLogin,
  loginSchema,
  loginService,
  useAuthStore,
} from "../features/authentication";

import { Ball, GranHarmoniaLogo } from "../assets/images";
import { OxentiLabStamp } from "../components/ui";
import { MobileContainer } from "../layouts";

export default function SignIn() {
  const { t } = useTranslation(["common", "validation"]);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();

  const ballVariantSize = useBreakpointValue(
    {
      base: "12",
      sm: "14",
      md: "20",
      lg: "20",
      xl: "24",
    },
    {
      fallback: "md",
      ssr: false,
    }
  );

  const from = (location.state as any)?.from?.pathname || "/home";

  const setUser = useAuthStore((state) => state.setUser);

  const loginMutation = useMutation(loginService, {
    onSuccess: () => {
      queryClient.invalidateQueries(["auth"]);
    },
  });

  const methods = useForm<AuthLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema(t)),
  });

  const onSubmit: SubmitHandler<AuthLogin> = (data) => {
    loginMutation.mutate(data);
  };

  useEffect(() => {
    if (loginMutation.isSuccess) {
      const { data } = loginMutation;

      setUser(data);
      navigate(from, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginMutation.isSuccess]);

  return (
    <MobileContainer>
      <Image
        src={Ball}
        alt="Ball on top right position"
        pos="absolute"
        right={0}
        boxSize={ballVariantSize}
      />

      <Flex justify="center" my="8">
        <Image src={GranHarmoniaLogo} alt="Gran Harmonia Logo" />
      </Flex>

      <Flex flex={1} flexDir="column" justify="center">
        <Heading fontWeight="semibold">{t("welcome")}</Heading>
        <Text fontWeight="light" fontSize="sm" mb="4" mt="2">
          {t("doLoginToContinue")}
        </Text>
        <Box bg="#EB6A3F" borderRadius="full" h="2px" w="40px" />
      </Flex>

      <Flex flex={2} flexDir="column">
        <FormProvider {...methods}>
          <FormLogin onSubmit={onSubmit} />
        </FormProvider>
      </Flex>

      <Center flex={1}>
        <OxentiLabStamp />
      </Center>

      <Image
        src={Ball}
        alt="Ball on bottom right position"
        pos="absolute"
        right={0}
        bottom={0}
        boxSize="10"
      />
    </MobileContainer>
  );
}
