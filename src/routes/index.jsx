import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AdminDashboard from '../pages/AdminPage';
import PrivateRoute from '../components/PrivateRoute';
import UserDashboard from '../pages/UserPage';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/admin-dashboard" element={
        <PrivateRoute>
          <AdminDashboard />
        </PrivateRoute>
      } />
      <Route path="/user-dashboard" element={
        <PrivateRoute>
          <UserDashboard />
        </PrivateRoute>
      } />
      <Route path="/login" element={
        <LoginPage />
      } />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}