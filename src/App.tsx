import { ErrorBoundary } from "react-error-boundary";
import Pages from "@/pages";
import { ErrorFallback } from "./components/ui";

export default function App() {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Pages />
		</ErrorBoundary>
	);
}
