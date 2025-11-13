import { createBrowserRouter } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';

import Achievements from '../Pages/Achievements';
import AllCourses from '../Pages/AllCourses';
import Blogs from '../Pages/Blogs';
import Community from '../Pages/Community';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import RootLayout from '../RootLayout/RootLayout';
import CourseDetails from '../components/CourseDetails';

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
        loader: () => fetch('http://localhost:5000/all-courses'),
        element: <AllCourses />,
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: `/course-details/:courseId`,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/course-details/${params.courseId}`).then((res) =>
        //     res.json(),
        //   ),
        element: <CourseDetails />,
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
