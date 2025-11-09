import { Button, Text, VStack } from "@chakra-ui/react";
import { type SubmitHandler, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Field } from "@/components/form/Field";
import { Input } from "@/components/form/Input";
import { PasswordInput } from "@/components/ui/password-input";
import type { AuthSignInProps } from "@/features/auth/types";

type FormLoginProps = {
	onSubmit: SubmitHandler<AuthSignInProps>;
};

export function FormLogin(props: FormLoginProps) {
	const { onSubmit } = props;

	const { t } = useTranslation(["common", "glossary"]);

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useFormContext<AuthSignInProps>();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<VStack
				w="full"
				maxW={{ smDown: "80", sm: "96" }}
				gap="6"
				marginInline="auto"
			>
				<Field
					label={t("email")}
					invalid={Boolean(errors.email?.message)}
					errorText={errors.email?.message}
				>
					<Input {...register("email")} />
				</Field>

				<Field
					label={t("password")}
					invalid={Boolean(errors.password?.message)}
					errorText={errors.password?.message}
				>
					<PasswordInput {...register("password")} />
				</Field>

				<Button bg={"primary"} type="submit" w="100%">
					<Text fontWeight={"semibold"}>{t("login")}</Text>
				</Button>
			</VStack>
		</form>
	);
}
