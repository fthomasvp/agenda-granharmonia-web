export type AuthSignInProps = {
	email: string;
	password: string;
};

export type TForgotPasswordType = Omit<AuthSignInProps, "password">;

export type TResetPasswordType = {
	newPassword: string;
	newPasswordConfirmation: string;
};
