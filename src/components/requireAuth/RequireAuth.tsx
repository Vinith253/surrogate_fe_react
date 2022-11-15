import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const auth = { user: true }; // This will change in the future
  const location = useLocation();

  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
}
