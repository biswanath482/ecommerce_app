import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./ProtectedRoute.css";

export default function ProtectedRoute({ children }) {
  const { userToken } = useAuth();

  if (!userToken) {
    return <Navigate to="/login" />;
  }

  return <div className="protected-wrapper">{children}</div>;
}
