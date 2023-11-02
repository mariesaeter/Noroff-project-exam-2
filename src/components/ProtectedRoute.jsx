import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
