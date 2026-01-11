import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, requiredRole = null }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && userRole !== requiredRole) {
    if(userRole === "admin") {
      return <Navigate to="/admin-dashboard" replace />;
    } else {
      return <Navigate to="/user-dashboard" replace />;
    }
  }
  
  return children;
}