export async function apiClient2(url: string, init?: RequestInit) {
	// const baseUrl = import.meta.env.BASE_URL;
	const baseUrl = "https://98294ab8-94d8-4d87-a023-14587dcdbfc6.mock.pstmn.io";

	try {
		const response = await fetch(`${baseUrl}${url}`, {
			...init,
			headers: {
				...init?.headers,
				"X-Oxenti-Lab-Request-Id": crypto.randomUUID(),
			},
		});

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		// TODO: Validate response status before returning data

		const result = await response.json();

		return result;
	} catch (error: any) {
		console.error(error.message);

		throw new Error("Oops! Something went wrong when fetching data");
	}
}
