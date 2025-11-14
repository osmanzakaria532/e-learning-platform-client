import { Link } from 'react-router';

const MyAccount = () => {
  return (
    <div>
      <div className="bg-base-100 shadow-sm py-1 px-10">
        <Link to="/">Home</Link>
      </div>
      <h2>My Acoount</h2>
    </div>
  );
};

export default MyAccount;
