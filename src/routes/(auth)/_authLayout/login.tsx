import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
// import { useEffect } from "react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toaster } from "@/components/ui/toaster";
import { FormLogin } from "@/features/auth/components/FormLogin";
import { loginSchema } from "@/features/auth/schemas";
import { signInRequest } from "@/features/auth/services";
import { useAuthActions } from "@/features/auth/store/useAuthStore";
import type { AuthSignInProps } from "@/features/auth/types";
import { GranHarmoniaLogo } from "../../../assets/images";
import { HalfBall, OxentiLabStamp } from "../../../components/ui";

export const Route = createFileRoute("/(auth)/_authLayout/login")({
	component: Login,
});

function Login() {
	const navigate = Route.useNavigate();
	const { t } = useTranslation(["common", "validation", "glossary"]);
	// const user = useUser();
	const { setAuth } = useAuthActions();

	const methods = useForm<AuthSignInProps>({
		resolver: zodResolver(loginSchema(t)),
	});

	const loginMutation = useMutation({
		mutationFn: signInRequest,
		onSuccess: (data) => {
			console.log("> onSuccess", data);

			setAuth(data);
			navigate({ from: "/location", replace: true });
		},
		onError: (error) => {
			console.log("> onError", error);

			toaster.create({
				type: "error",
				title: "Error",
				description: "Usuário ou senha inválidos",
				closable: true,
			});
		},
	});

	const onSubmit: SubmitHandler<AuthSignInProps> = (data) => {
		loginMutation.mutate(data);
	};

	const handleForgotPassword = () => {
		navigate({ to: "/forgot-password" });
	};

	// TODO: Why this was used for?
	// useEffect(() => {
	// 	if (user?.id) {
	// 		navigate(FROM, { replace: true });
	// 	}
	// }, [user?.id, navigate]);

	return (
		<>
			<VStack gap={"8"}>
				<HalfBall right={0} top={0} />

				<Flex justify="center" position={"relative"}>
					{/* TODO: Create "Logo" component using text to replace this image */}
					<Image
						src={GranHarmoniaLogo}
						alt="Blue Gran Harmonia word with orange Agenda word below"
					/>
				</Flex>

				<VStack
					w={{ smDown: "80", sm: "96" }}
					alignItems={"flex-start"}
					gap="4"
					marginInline={"auto"}
				>
					<VStack alignItems={"flex-start"} gap="1">
						<Heading fontWeight="semibold">
							{t("welcome", { ns: "glossary" })}
						</Heading>
						<Text color="gray.800" fontWeight="light" fontSize={["sm", "md"]}>
							{t("doLoginToContinue", { ns: "glossary" })}
						</Text>
					</VStack>
					<Box bg="orange.400" borderRadius="full" h="2px" w="40px" />
				</VStack>

				<VStack gap={"6"} w={"full"}>
					<Flex flexDir="column" w={"full"}>
						<FormProvider {...methods}>
							<FormLogin onSubmit={onSubmit} />
						</FormProvider>
					</Flex>

					<Button variant="plain" onClick={handleForgotPassword}>
						<Text fontWeight={"semibold"}>
							{t("forgotPassword", { ns: "glossary" })}
						</Text>
					</Button>
				</VStack>
			</VStack>

			<Center>
				{/* TODO: Add link to this image */}
				<OxentiLabStamp />
			</Center>
		</>
	);
}
