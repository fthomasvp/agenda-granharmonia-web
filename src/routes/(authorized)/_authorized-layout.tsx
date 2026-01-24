import { createFileRoute } from "@tanstack/react-router";
import { AuthorizedLayout } from "@/layouts/authorized-layout";

export const Route = createFileRoute("/(authorized)/_authorized-layout")({
	component: () => <AuthorizedLayout />,
});
