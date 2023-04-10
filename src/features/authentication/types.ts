export type TAuth = {
  email: string;
  password: string;
};

export type ForgotPasswordType = Omit<TAuth, "password">;

export type ResetPasswordType = {
  newPassword: string;
  newPasswordConfirmation: string;
};
