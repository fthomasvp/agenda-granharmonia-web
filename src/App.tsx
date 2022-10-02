import { Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

import "./App.css";

const Pages = lazy(() => import("./pages"));

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Pages />
    </Suspense>
  );
}
