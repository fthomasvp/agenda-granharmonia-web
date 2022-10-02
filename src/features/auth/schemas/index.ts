import { TFunction } from "react-i18next";
import * as yup from "yup";

export const loginSchema = (t: TFunction) =>
  yup
    .object()
    .shape({
      email: yup
        .string()
        .required(t("requiredEmail", { ns: "validation" }))
        .email("Email Invalido"),
      password: yup
        .string()
        .required(t("requiredPassword", { ns: "validation" })),
    })
    .required();
