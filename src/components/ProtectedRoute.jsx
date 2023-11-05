import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
// https://www.robinwieruch.de/react-router-private-routes/
export function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
