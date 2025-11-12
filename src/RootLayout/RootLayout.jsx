import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
