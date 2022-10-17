import { TFunction } from "i18next";
import * as yup from "yup";

export const validateEmail = (t: TFunction) =>
  yup
    .string()
    .required(t("requiredEmail", { ns: "validation" }))
    .email(t("invalidEmail", { ns: "validation" }));
