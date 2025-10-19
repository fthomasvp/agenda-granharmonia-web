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
