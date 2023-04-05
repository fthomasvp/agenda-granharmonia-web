import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useUser } from "../store/useAuthStore";

export default function RequireAuth() {
  let location = useLocation();
  const user = useUser();

  // TODO: improve this validation
  return user?.id ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
