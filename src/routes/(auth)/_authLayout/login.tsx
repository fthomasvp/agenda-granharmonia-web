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
import { createFileRoute, redirect } from "@tanstack/react-router";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { GranHarmoniaLogo } from "@/assets/images";
import { OxentiLabStamp } from "@/components/ui";
import { toaster } from "@/components/ui/toaster";
import { signInRequest } from "@/features/auth/api";
import { FormLogin } from "@/features/auth/components/FormLogin";
import { loginSchema } from "@/features/auth/schemas";
import { useAuthActions } from "@/features/auth/store";
import type { AuthSignInProps } from "@/features/auth/types";

export const Route = createFileRoute("/(auth)/_authLayout/login")({
	beforeLoad: ({ context }) => {
		if (context.user?.id) {
			throw redirect({ to: "/location", replace: true });
		}
	},
	component: Login,
});

function Login() {
	const navigate = Route.useNavigate();
	const { t } = useTranslation(["common", "validation", "glossary"]);
	const { setAuth } = useAuthActions();

	const loginForm = useForm<AuthSignInProps>({
		resolver: zodResolver(loginSchema(t)),
		defaultValues: {
			email: "annoyed_jatoria@web.de",
			password: "Abcd$1234",
		},
	});

	const loginMutation = useMutation({
		mutationFn: signInRequest,
		onSuccess: ({ data }) => {
			// TODO: Rename to `setUser`
			setAuth(data);

			// Firing `navigate` here doesn't wait for the `setAuth` action
			// to be done. This causes the "/location" page to fire the
			// request without the userId in the URL (error).
			// See https://tanstack.com/query/latest/docs/framework/react/guides/mutations#mutation-side-effects
			// See https://tanstack.com/query/latest/docs/framework/react/guides/mutations#consecutive-mutations
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

	const handleSubmit: SubmitHandler<AuthSignInProps> = (data) => {
		loginMutation.mutate(data, {
			onSuccess: () => {
				// Runs ONLY after the first onSuccess in useMutation
				navigate({ to: "/location", replace: true });
			},
		});
	};

	const handleForgotPassword = () => {
		navigate({ to: "/forgot-password" });
	};

	return (
		<>
			<VStack gap={"8"}>
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
						<FormProvider {...loginForm}>
							<FormLogin onSubmit={handleSubmit} />
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
