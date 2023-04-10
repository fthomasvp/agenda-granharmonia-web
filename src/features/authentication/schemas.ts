import { TFunction } from "react-i18next";
import { z } from "zod";

import { validateEmail, validatePassword } from "../../utils";

export const loginSchema = (t: TFunction) =>
  z.object({
    email: validateEmail(t),
    password: z.string({
      required_error: t("requiredPassword", { ns: "validation" }),
    }),
  });

export const forgotPasswordSchema = (t: TFunction) =>
  z.object({
    email: validateEmail(t),
  });

export const verifyCodeSchema = (t: TFunction) =>
  z.object({
    code: z.string({ required_error: t("requiredCode", { ns: "validation" }) }),
  });

export const resetPasswordSchema = (t: TFunction) =>
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
      }
    );
