import { Button, VStack } from "@chakra-ui/react";
import { type SubmitHandler, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Field } from "@/components/form/Field";
import { Input } from "@/components/form/Input";
import type { TForgotPasswordType } from "../types";

type FormForgotPasswordProps = {
	onSubmit: SubmitHandler<TForgotPasswordType>;
};

export function FormForgotPassword(props: FormForgotPasswordProps) {
	const { onSubmit } = props;

	const { t } = useTranslation(["common"]);

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useFormContext<TForgotPasswordType>();

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

				<Button type="submit" w="100%">
					{`${t("send")} ${t("code").toLowerCase()}`}
				</Button>
			</VStack>
		</form>
	);
}
