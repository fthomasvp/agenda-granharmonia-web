import { Flex, Heading, List, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaInfoCircle } from "react-icons/fa";
import { BackButton } from "@/components/navigation";
import { FormResetPassword } from "@/features/auth/components/FormResetPassword";
import { resetPasswordSchema } from "@/features/auth/schemas";
import type { TResetPasswordType } from "@/features/auth/types";

const resetPassInstructions = [
	"resetPasswordInstructionOne",
	"resetPasswordInstructionTwo",
	"resetPasswordInstructionThree",
];

export const Route = createFileRoute("/(auth)/_authLayout/reset-password")({
	component: ResetPassword,
});

function ResetPassword() {
	const { t } = useTranslation(["glossary"]);
	// const navigate = Route.useNavigate();

	const methods = useForm<TResetPasswordType>({
		resolver: zodResolver(resetPasswordSchema(t)),
	});

	const onSubmit: SubmitHandler<TResetPasswordType> = (data) => {
		console.log("> ResetPassword :: data", data);

		// TODO: Navigate user to the homepage (already authenticated)
	};

	// TODO: Show toaster with this message: t("updatedPassword")

	return (
		<VStack gap={"8"}>
			<VStack
				w={{ smDown: "80", sm: "96" }}
				alignItems={"flex-start"}
				gap="4"
				marginInline={"auto"}
			>
				<Heading fontWeight="semibold">{t("enterNewPassword")}</Heading>
			</VStack>

			<VStack
				w={{ smDown: "80", sm: "96" }}
				alignItems={"flex-start"}
				gap="4"
				marginInline={"auto"}
			>
				<List.Root gap={"5"}>
					{resetPassInstructions.map((item) => (
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
						<FormResetPassword onSubmit={onSubmit} />
					</FormProvider>
				</Flex>

				{/* TODO: Create a Button component (e.g. "Link" variant) */}
				<BackButton path="/verify-code" />
			</VStack>
		</VStack>
	);
}
