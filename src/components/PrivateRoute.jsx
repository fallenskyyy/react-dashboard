import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, requiredRole = null }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");
  
  // Если нет токена
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  // Если требуется определенная роль и у пользователя нет этой роли
  if (requiredRole && userRole !== requiredRole) {
    // Редиректим на соответствующую dashboard в зависимости от роли
    if(userRole === "admin") {
      return <Navigate to="/admin-dashboard" replace />;
    } else {
      return <Navigate to="/user-dashboard" replace />;
    }
  }
  
  return children;
}