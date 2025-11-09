// import { TFunction } from "i18next";
import { z } from "zod";

import { passwordRegex } from "./constants";

export const validateEmail = (t: any) =>
	z.email({ error: t("invalidEmail", { ns: "validation" }) });

export const validatePassword = (t: any) =>
	z
		.string({ error: t("requiredPassword", { ns: "validation" }) })
		.regex(passwordRegex, t("invalidPassword", { ns: "validation" }));
