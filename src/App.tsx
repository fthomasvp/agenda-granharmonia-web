import { Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";
import { ErrorFallback } from "./components/ui";

const Pages = lazy(() => import("./pages"));

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Spinner />}>
        <Pages />
      </Suspense>
    </ErrorBoundary>
  );
}
