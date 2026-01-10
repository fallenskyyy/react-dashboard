import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import PrivateRoute from '../components/PrivateRoute';

export default function MainRoutes() {
  function isAuth(){
    if(localStorage.getItem("token")){
      return true
    }
    else{
      return false
    }
  }
  return (
    <Routes>
      <Route path="/dashboard" element=
      {
        <PrivateRoute isAuthenticated={isAuth()}>
          <MainPage />
        </PrivateRoute>
      } />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
  );
}