import { createBrowserRouter } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import Achievements from '../Pages/Achievements';
import AllCourses from '../Pages/AllCourses';
import Blogs from '../Pages/Blogs';
import Community from '../Pages/Community';
import Contact from '../pages/Contact';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import PrivateRouter from '../Provider/PrivateRouter';
import RootLayout from '../RootLayout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: '/all-courses',
        loader: () => fetch('http://localhost:5000/all-courses').then((res) => res.json()),
        hydrateFallbackElement: <LoadingSpinner />,
        element: <AllCourses />,
      },
      {
        path: '/achievements',
        element: (
          <PrivateRouter>
            <Achievements />
          </PrivateRouter>
        ),
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
