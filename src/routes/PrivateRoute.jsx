import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const PrivateRoute = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return user ? <Outlet /> : <Navigate to="/home" replace />;
};

export default PrivateRoute;
