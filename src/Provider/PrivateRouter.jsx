import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../ContextApi/AuthContext';

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p>Loading</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/signin" />;
};

export default PrivateRouter;
