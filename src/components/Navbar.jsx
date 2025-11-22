import { useContext } from 'react';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';
import { toast } from 'react-toastify';
import userImg from '../../src/assets/icons8-avatar.gif';
import { AuthContext } from '../ContextApi/AuthContext';
import auth from '../firebase/firebase.config';
import Container from './shared_ui/Container';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user);

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-[#d4d4d4]' : '')}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-courses" className={({ isActive }) => (isActive ? 'bg-[#d4d4d4]' : '')}>
          All Courses
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/add-course" className={({ isActive }) => (isActive ? 'bg-[#d4d4d4]' : '')}>
            Add Course
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/achievements" className={({ isActive }) => (isActive ? 'bg-[#d4d4d4]' : '')}>
          Achievements
        </NavLink>
      </li>
      <li>
        <NavLink to="/community" className={({ isActive }) => (isActive ? 'bg-[#d4d4d4]' : '')}>
          Community
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'bg-[#d4d4d4]' : '')}>
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'bg-[#d4d4d4]' : '')}>
          Contact
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    console.log('Sign Out btm clicked');
    signOutUser(auth)
      .then(() => {
        toast.success('Sign-out successfully');
      })
      .catch((err) => {
        console.log('log out err', err);
      });
  };
  return (
    <>
      <div className=" bg-base-100 shadow-sm">
        <Container className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {' '}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{' '}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to="/">
              <h5 className="capitalize text-[12px] mb-[-7px]">e-learning</h5>
              <h2 className="capitalize text-xl">platform</h2>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 menu-item space-x-1.5">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center gap-1.5 relative group">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/my-account">
                  <div className="w-8 h-8">
                    <img src={user?.photoUrl ? user.photoUR : userImg} alt="" />
                  </div>
                </Link>
                <div className="absolute -bottom-10 left-0 z-50 hidden group-hover:block">
                  <button onClick={handleSignOut} className=" btn flex items-center">
                    Sign out <FaArrowRightToBracket />
                  </button>
                </div>
              </div>
            ) : (
              <Link to="signin" className="btn">
                Sign in <FaArrowRightToBracket />
              </Link>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
