import { useContext } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }
  return (
    <div>
      <h2>Private Router</h2>
    </div>
  );
};

export default PrivateRouter;
