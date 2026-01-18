import { createFileRoute } from "@tanstack/react-router";
import { MainLayout } from "@/layouts/main-layout";

export const Route = createFileRoute("/(signed)/_mainLayout")({
	component: () => <MainLayout />,
});
