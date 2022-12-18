import { ErrorBoundary } from "react-error-boundary";

import "./App.css";
import { ErrorFallback } from "./components/ui";
import Pages from "./pages";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Pages />
    </ErrorBoundary>
  );
}
