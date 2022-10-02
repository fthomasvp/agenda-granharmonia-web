import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuthStore } from "../hooks/useAuthStore";

export default function RequireAuth({ children }: PropsWithChildren) {
  let location = useLocation();
  const user = useAuthStore((state) => state.user);

  // TODO: improve this validation
  if (!user?.id) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
