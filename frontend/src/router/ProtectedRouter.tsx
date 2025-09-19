import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const auth = useContext(AuthContext);
    if (!auth) return null;
    if (auth.loading) return <div>Loading...</div>;
    if (!auth.user) return <Navigate to="/login" replace />;
    return children;
}
