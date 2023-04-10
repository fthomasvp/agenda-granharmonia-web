import { TFunction } from "i18next";
import { z } from "zod";

import { passwordRegex } from "./constants";

export const validateEmail = (t: TFunction) =>
  z
    .string({ required_error: t("requiredEmail", { ns: "validation" }) })
    .email(t("invalidEmail", { ns: "validation" }));

export const validatePassword = (t: TFunction) =>
  z
    .string({ required_error: t("requiredPassword", { ns: "validation" }) })
    .regex(passwordRegex, t("invalidPassword", { ns: "validation" }));
