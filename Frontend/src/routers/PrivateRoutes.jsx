import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (currentUser) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoutes;
