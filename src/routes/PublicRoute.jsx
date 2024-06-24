import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const PublicRoute = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return !user ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoute;
