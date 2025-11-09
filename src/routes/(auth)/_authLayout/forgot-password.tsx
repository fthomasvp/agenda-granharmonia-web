import { Flex, Heading, List, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaInfoCircle } from "react-icons/fa";
import { BackButton } from "@/components/navigation";
import { FormForgotPassword } from "@/features/auth/components/FormForgotPassword";
import { forgotPasswordSchema } from "@/features/auth/schemas";
import {
	useAuthActions,
	useRecoverEmail,
} from "@/features/auth/store/useAuthStore";
import type { TForgotPasswordType } from "@/features/auth/types";
import { instructions } from "@/utils/constants";

export const Route = createFileRoute("/(auth)/_authLayout/forgot-password")({
	component: ForgotPassword,
});

function ForgotPassword() {
	const { t } = useTranslation(["common", "glossary", "validation"]);
	const navigate = Route.useNavigate();
	const { setRecoverEmail } = useAuthActions();
	const recoverEmail = useRecoverEmail();

	const methods = useForm<TForgotPasswordType>({
		resolver: zodResolver(forgotPasswordSchema(t)),
		defaultValues: {
			email: recoverEmail,
		},
	});

	const onSubmit: SubmitHandler<TForgotPasswordType> = (data) => {
		console.log("> data", data);

		setRecoverEmail(data.email);
		navigate({ to: "/verify-code" });
	};

	return (
		<VStack gap={"8"}>
			<VStack
				w={{ smDown: "80", sm: "96" }}
				alignItems={"flex-start"}
				gap="4"
				marginInline={"auto"}
			>
				<Heading fontWeight="bold">
					{t("forgotPassword", { context: "question", ns: "glossary" })}
				</Heading>
			</VStack>

			<VStack
				w={{ smDown: "80", sm: "96" }}
				alignItems={"flex-start"}
				gap="4"
				marginInline={"auto"}
			>
				<List.Root gap={"5"}>
					{instructions.map((item) => (
						<List.Item key={item} display="flex" alignItems="flex-start">
							<List.Indicator asChild>
								<FaInfoCircle />
							</List.Indicator>
							<Text>{t(`${item}`, { ns: `glossary` })}</Text>
						</List.Item>
					))}
				</List.Root>
			</VStack>

			<VStack gap={"6"} w={"full"}>
				<Flex flexDir="column" w={"full"}>
					<FormProvider {...methods}>
						<FormForgotPassword onSubmit={onSubmit} />
					</FormProvider>
				</Flex>

				{/* TODO: Create a Button component (e.g. "Link" variant) */}
				<BackButton path="/login" />
			</VStack>
		</VStack>
	);
}
