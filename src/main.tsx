import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "@/i18n";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { useUser } from "@/features/auth/store";
import { baseSystem } from "@/themes/base";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

// Set up a Router instance
const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	defaultStaleTime: 5000,
	scrollRestoration: true,
	context: {
		user: null,
		queryClient,
	},
});

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function App() {
	const user = useUser();

	return <RouterProvider router={router} context={{ user }} />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider value={baseSystem}>
			<QueryClientProvider client={queryClient}>
				<App />
				<ReactQueryDevtools />
				<Toaster />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>,
);
