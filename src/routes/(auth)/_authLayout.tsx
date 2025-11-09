import { createFileRoute } from "@tanstack/react-router";
import { BaseLayout } from "@/layouts/base";

export const Route = createFileRoute("/(auth)/_authLayout")({
	component: () => <BaseLayout />,
});
