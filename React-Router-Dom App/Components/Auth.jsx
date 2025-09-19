import { Navigate } from "react-router-dom";

export default function Auth({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
