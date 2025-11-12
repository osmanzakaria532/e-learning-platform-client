import { createBrowserRouter } from 'react-router';
import Achievements from '../Pages/Achievements';
import AllCourses from '../Pages/AllCourses';
import Blogs from '../Pages/Blogs';
import Community from '../Pages/Community';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import RootLayout from '../RootLayout/RootLayout';
import Contact from '../pages/Contact';

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
        element: <AllCourses />,
      },
      {
        path: '/achievements',
        element: <Achievements />,
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
