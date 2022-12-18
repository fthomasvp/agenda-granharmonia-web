import { TFunction } from "react-i18next";
import * as yup from "yup";

import { validateEmail, validatePassword } from "../../utils";

export const loginSchema = (t: TFunction) =>
  yup
    .object()
    .shape({
      email: validateEmail(t),
      password: yup
        .string()
        .required(t("requiredPassword", { ns: "validation" })),
    })
    .required();

export const forgotPasswordSchema = (t: TFunction) =>
  yup
    .object()
    .shape({
      email: validateEmail(t),
    })
    .required();

export const verifyCodeSchema = (t: TFunction) =>
  yup
    .object()
    .shape({
      code: yup.string().required(t("requiredCode", { ns: "validation" })),
    })
    .required();

export const resetPasswordSchema = (t: TFunction) =>
  yup
    .object()
    .shape({
      newPassword: validatePassword(t),
      newPasswordConfirmation: validatePassword(t).oneOf(
        [yup.ref("newPassword"), null],
        t("passwordMismatch", { ns: "validation" })
      ),
    })
    .required();
