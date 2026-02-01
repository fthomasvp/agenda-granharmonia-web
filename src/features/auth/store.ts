import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { AuthState } from "./types";

const initialState = {
	recoverEmail: "",
	user: null,
};

export const useAuthStore = create<AuthState>()(
	devtools(
		persist(
			immer((set) => ({
				...initialState,
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
				partialize: (state) => {
					// Do not return unserializable data (e.g. functions)
					const { actions: _, ...authState } = state;

					return authState;
				},
				storage: createJSONStorage(() => localStorage, {
					replacer(key, value) {
						if (key === "state") {
							const stringifiedData = JSON.stringify(value);

							return btoa(stringifiedData);
						}

						return value;
					},
					reviver(key, value) {
						if (key === "state") {
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
