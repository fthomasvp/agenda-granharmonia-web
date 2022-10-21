export type AuthLogin = {
  email: string;
  password: string;
};

export type ForgotPasswordType = Omit<AuthLogin, "password">;

export type ResetPasswordType = {
  newPassword: string;
  newPasswordConfirmation: string;
};
