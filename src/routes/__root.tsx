import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NotFound } from "@/components/404";

// TODO: Change to createRootRouteWithContext
export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: NotFound,
});

export function RootComponent() {
	return (
		<>
			<Outlet />
			<TanStackRouterDevtools position="bottom-left" />
		</>
	);
}
