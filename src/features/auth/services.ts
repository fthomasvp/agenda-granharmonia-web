// import { apiClient } from "@/lib/axios";
import { apiClient2 } from "@/lib/fetch";
import type { AuthSignInProps } from "./types";

// export const signInRequest = async (body: AuthSignInProps) => {
// 	const { data } = await apiClient.post("/Auth", body);

// 	return data;
// };

export const signInRequest = async (body: AuthSignInProps) => {
	const data = await apiClient2("/Auth", {
		method: "POST",
		body: JSON.stringify(body),
	});

	return data;
};
