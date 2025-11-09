import { Box, Button } from "@chakra-ui/react";
import { type SubmitHandler, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Field } from "@/components/form/Field";
import { PasswordInput } from "@/components/ui/password-input";
// import { PasswordInput } from "../../../components/form";
import type { TResetPasswordType } from "../types";

type FormResetPasswordProps = {
	onSubmit: SubmitHandler<TResetPasswordType>;
};

export function FormResetPassword({ onSubmit }: FormResetPasswordProps) {
	const { t } = useTranslation(["common", "glossary", "validation"]);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useFormContext<TResetPasswordType>();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box mb="5">
				<Field
					label={`${t("new", { context: "female" })} ${t(
						"password",
					).toLowerCase()}`}
					invalid={Boolean(errors.newPassword?.message)}
					errorText={errors.newPassword?.message}
				>
					<PasswordInput {...register("newPassword")} />
				</Field>
			</Box>

			<Box mb="5">
				<Field
					label={t("repeatNewPassword", { ns: "glossary" })}
					invalid={Boolean(errors.newPassword?.message)}
					errorText={errors.newPassword?.message}
				>
					<PasswordInput {...register("newPasswordConfirmation")} />
				</Field>
			</Box>

			<Box>
				<Button type="submit" w="100%">
					{`${t("reset")} ${t("password").toLowerCase()}`}
				</Button>
			</Box>
		</form>
	);
}
