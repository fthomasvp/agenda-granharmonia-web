import { fetchApi } from "@/lib/fetch";
import type { Response } from "@/types/common";
import type { AuthSignInProps, User } from "./types";

const API_BASE_PATH = "/api/v1/auth/login";

export const signInRequest = async (body: AuthSignInProps) => {
	const data = await fetchApi<Response<User>>(API_BASE_PATH, {
		method: "POST",
		body: JSON.stringify(body),
	});

	return data;
};
