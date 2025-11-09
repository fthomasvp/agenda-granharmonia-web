import { Button, Flex, HStack, PinInput, Text, VStack } from "@chakra-ui/react";
import {
	Controller,
	type SubmitHandler,
	useFormContext,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Field } from "@/components/form/Field";

type FormVerifyCodeProps = {
	onSubmit: SubmitHandler<{ pin: Array<string> }>;
};

export function FormVerifyCode(props: FormVerifyCodeProps) {
	const { onSubmit } = props;

	const { t } = useTranslation(["common", "glossary", "validation"]);

	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useFormContext<{ pin: Array<string> }>();

	const handleResend = () => {
		console.log("Reenviar código");
	};

	const pinErrorText = errors?.pin?.find?.((p) => p);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<VStack
				w="full"
				maxW={{ smDown: "80", sm: "96" }}
				gap="6"
				alignItems={"flex-start"}
			>
				<Flex w="full" flexDir="column">
					<HStack alignItems={"flex-end"} gap={4}>
						<Field
							label={"Pin"}
							invalid={Boolean(errors.pin)}
							errorText={pinErrorText?.message || errors.pin?.message}
						>
							<Controller
								control={control}
								name="pin"
								render={({ field }) => (
									<PinInput.Root
										value={field.value}
										onValueChange={(e) => field.onChange(e.value)}
										otp
									>
										<PinInput.HiddenInput />
										<PinInput.Control>
											<PinInput.Input index={0} />
											<PinInput.Input index={1} />
											<PinInput.Input index={2} />
											<PinInput.Input index={3} />
										</PinInput.Control>
									</PinInput.Root>
								)}
							/>
						</Field>
						{/* TODO: Disable while app is verifying/re-sending code */}
						{/* TODO: Add "reset" icon to the left */}
						<Button
							data-test="resend-button"
							onClick={handleResend}
							variant="outline"
						>
							{t("resend")}
						</Button>
					</HStack>
				</Flex>

				{/* TODO: Must be disabled when re-sending code */}
				<Button type="submit" w="100%">
					<Text fontWeight={"semibold"}>{t("confirm")}</Text>
				</Button>
			</VStack>
		</form>
	);
}
