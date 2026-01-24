import { Flex, Heading, List, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaInfoCircle } from "react-icons/fa";
import BackButton from "@/components/navigation/BackButton";
import { FormVerifyCode } from "@/features/auth/components/FormVerifyCode";
import { pinCodeSchema } from "@/features/auth/schemas";
import { instructions } from "@/utils/constants";

// TODO: Redirect user to "/forgot-password" page if no e-mail is found in local storage

export const Route = createFileRoute("/recover-pass/verify-code")({
	component: VerifyCode,
});

function VerifyCode() {
	const { t } = useTranslation(["common", "glossary", "validation"]);
	const navigate = Route.useNavigate();

	const methods = useForm<{ pin: Array<string> }>({
		defaultValues: {
			pin: [],
		},
		resolver: zodResolver(pinCodeSchema(t)),
	});

	const onSubmit: SubmitHandler<{ pin: Array<string> }> = (data) => {
		console.log("> VerifyCode :: data", data);

		// INFO: Do not persist four digits code
		navigate({ to: "/recover-pass/reset" });
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
					{t("enterCodeFromEmail", { ns: "glossary" })}
				</Heading>
			</VStack>

			<VStack
				w={{ smDown: "80", sm: "96" }}
				alignItems={"flex-start"}
				gap="4"
				marginInline={"auto"}
			>
				{/* TODO: Create new instructions for this page */}
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
						<FormVerifyCode onSubmit={onSubmit} />
					</FormProvider>
				</Flex>

				{/* TODO: Create a Button component (e.g. "Link" variant) */}
				<BackButton path="/forgot-password" />
			</VStack>
		</VStack>
	);
}
