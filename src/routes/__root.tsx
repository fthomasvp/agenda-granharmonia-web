import { createRootRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/404";
import { BaseLayout } from "@/layouts/base";

export const Route = createRootRoute({
	component: BaseLayout,
	notFoundComponent: NotFound,
});
