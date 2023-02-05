import { TFunction } from "i18next";
import * as yup from "yup";

import { passwordRegex } from "./constants";

export const validateEmail = (t: TFunction) =>
  yup
    .string()
    .required(t("requiredEmail", { ns: "validation" }))
    .email(t("invalidEmail", { ns: "validation" }));

export const validatePassword = (t: TFunction) =>
  yup
    .string()
    .required(t("requiredPassword", { ns: "validation" }))
    .matches(passwordRegex, t("invalidPassword", { ns: "validation" }));
