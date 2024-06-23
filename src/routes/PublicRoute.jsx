import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated', isAuthenticated);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoute;
