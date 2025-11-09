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
import { baseSystem } from "@/themes/base";

// Set up a Router instance
const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultStaleTime: 5000,
	scrollRestoration: true,
});

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider value={baseSystem}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<ReactQueryDevtools />
				<Toaster />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>,
);
