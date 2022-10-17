import { TFunction } from "react-i18next";
import * as yup from "yup";

import { validateEmail } from "../../../shared/validations";

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
