import { z } from "zod";

import { validateEmail, validatePassword } from "@/utils/validations";

export const loginSchema = (t: any) =>
	z.object({
		email: validateEmail(t),
		password: z.string({
			error: t("requiredPassword", { ns: "validation" }),
		}),
	});

export const forgotPasswordSchema = (t: any) =>
	z.object({
		email: validateEmail(t),
	});

export const verifyCodeSchema = (t: any) =>
	z.object({
		code: z.string({ error: t("requiredCode", { ns: "validation" }) }),
	});

export const resetPasswordSchema = (t: any) =>
	z
		.object({
			newPassword: validatePassword(t),
			newPasswordConfirmation: validatePassword(t),
		})
		.refine(
			({ newPassword, newPasswordConfirmation }) =>
				newPassword === newPasswordConfirmation,
			{
				message: t("passwordMismatch", { ns: "validation" }),
				path: ["newPasswordConfirmation"],
			},
		);

export const pinCodeSchema = (t: any) =>
	z.object({
		pin: z
			.array(z.string().min(1))
			.min(1, { message: "Pin is required" })
			.length(4, { message: "Pin must be 4 digits long" }),
	});
