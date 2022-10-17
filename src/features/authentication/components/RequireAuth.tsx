import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

export default function RequireAuth() {
  let location = useLocation();
  const user = useAuthStore((state) => state.user);

  // TODO: improve this validation
  return user?.id ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
