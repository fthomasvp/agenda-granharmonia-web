import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	beforeLoad({ context }) {
		const user = context.user;

		console.log("> INDEX file", user);

		if (!user?.id) {
			throw redirect({
				to: "/login",
			});
		}

		// TODO: This should only happens when no House or Building are selected. If user has selected both, then redirect him to the /home page.
		throw redirect({
			to: "/house",
		});
	},
	// loader: ({ context }) => {
	// 	const user = context.user;

	// 	console.log("> INDEX file", user);

	// 	if (!user?.id) {
	// 		throw redirect({
	// 			to: "/login",
	// 		});
	// 	}

	// 	// TODO: This should only happens when no House or Building are selected. If user has selected both, then redirect him to the /home page.
	// 	throw redirect({
	// 		to: "/house",
	// 	});
	// },
});
