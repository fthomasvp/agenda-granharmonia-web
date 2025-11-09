import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	loader: () => {
		// if (!user) {
		throw redirect({
			to: "/login",
		});
		// }

		// TODO: Redirect to home page if user has already signed in
		// throw redirect({
		// 	to: "/home",
		// });
	},
});
