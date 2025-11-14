import { Link, Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div>
      <div className="bg-base-100 shadow-sm py-1 px-10">
        <Link to="/">Home</Link>
      </div>
      <div>
        <div></div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
