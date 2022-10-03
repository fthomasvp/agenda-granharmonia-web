import { TFunction } from "react-i18next";
import * as yup from "yup";

export const loginSchema = (t: TFunction) =>
  yup
    .object()
    .shape({
      email: yup
        .string()
        .required(t("requiredEmail", { ns: "validation" }))
        .email(t("invalidEmail", { ns: "validation" })),
      password: yup
        .string()
        .required(t("requiredPassword", { ns: "validation" })),
    })
    .required();

export const forgotPasswordSchema = (t: TFunction) =>
  yup
    .object()
    .shape({
      email: yup
        .string()
        .required(t("requiredEmail", { ns: "validation" }))
        .email(t("invalidEmail", { ns: "validation" })),
    })
    .required();
