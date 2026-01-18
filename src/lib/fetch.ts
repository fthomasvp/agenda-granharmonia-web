import { env } from "@/utils/env";

export async function fetchApi<T>(url: string, init?: RequestInit) {
	const baseUrl = env.VITE_API_BASE_URL;

	try {
		const response = await fetch(`${baseUrl}${url}`, init);

		// TODO: Check if a redirect can impact this
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const result = (await response.json()) as T;

		return result;
	} catch (error: any) {
		console.error(error.message);

		throw new Error("Oops! Something went wrong when fetching data");
	}
}
