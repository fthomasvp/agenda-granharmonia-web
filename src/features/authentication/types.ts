export type TAuth = {
  email: string;
  password: string;
};

export type TForgotPasswordType = Omit<TAuth, "password">;

export type TResetPasswordType = {
  newPassword: string;
  newPasswordConfirmation: string;
};
