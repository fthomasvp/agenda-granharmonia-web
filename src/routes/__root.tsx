import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NotFound } from "@/components/404";
import type { User } from "@/features/auth/types";

type MyContext = {
	user: User | null;
	queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<MyContext>()({
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
