import { TFunction } from "i18next";
import * as yup from "yup";

const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9\s]).{6,}$/gm;

export const validateEmail = (t: TFunction) =>
  yup
    .string()
    .required(t("requiredEmail", { ns: "validation" }))
    .email(t("invalidEmail", { ns: "validation" }));

export const validatePassword = (t: TFunction) =>
  yup
    .string()
    .required(t("requiredPassword", { ns: "validation" }))
    .matches(passwordRegex, t("passwordRequirements", { ns: "validation" }));
