export type AuthSignInProps = {
	email: string;
	password: string;
};

// TODO: Move this type to the User feature
export type User = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	createdAt: string;
	updatedAt: string;
};

export type Actions = {
	setAuth: (payload: User) => void;
	setRecoverEmail: (payload: string) => void;
};
export type AuthState = {
	recoverEmail: string;
	user: User | null;
	actions: Actions;
};

export type TForgotPasswordType = Omit<AuthSignInProps, "password">;
export type TResetPasswordType = {
	newPassword: string;
	newPasswordConfirmation: string;
};
