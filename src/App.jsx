import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './ContextApi/AuthProvider';
import './index.css';
import './style.css';
import router from './Routes/Routes';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
