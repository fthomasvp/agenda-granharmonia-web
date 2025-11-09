import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type User = { id: string; email: string };
type Actions = {
	setAuth: (payload: User) => void;
	setRecoverEmail: (payload: string) => void;
};

type AuthState = {
	recoverEmail: string;
	user: User | null;
	actions: Actions;
};

const useAuthStore = create<AuthState>()(
	devtools(
		persist(
			immer((set) => ({
				recoverEmail: "",
				user: null,
				actions: {
					setAuth: (payload) =>
						set(
							(state) => {
								state.user = payload;
							},
							undefined,
							"auth/setAuth",
						),
					setRecoverEmail: (payload) =>
						set(
							(state) => {
								state.recoverEmail = payload;
							},
							undefined,
							"auth/setRecoverEmail",
						),
				},
			})),
			{
				name: "oxentilab:agenda-auth",
				partialize: (state) => ({
					user: state.user,
					recoverEmail: state.recoverEmail,
				}),
				storage: createJSONStorage(() => localStorage, {
					replacer(key, value) {
						if (["user", "recoverEmail"].includes(key)) {
							const stringifiedData = JSON.stringify(value);

							return btoa(stringifiedData);
						}

						return value;
					},
					reviver(key, value) {
						if (["user", "recoverEmail"].includes(key)) {
							const rawData = atob(value as string);

							return JSON.parse(rawData);
						}

						return value;
					},
				}),
			},
		),
	),
);

export const useRecoverEmail = () =>
	useAuthStore((state) => state.recoverEmail);
export const useUser = () => useAuthStore((state) => state.user);
export const useAuthActions = () => useAuthStore((state) => state.actions);
export const clearAuthStorage = () => useAuthStore.persist.clearStorage();
