import AOS from 'aos';
import 'aos/dist/aos.css';
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './ContextApi/AuthProvider';
import './index.css';
import router from './Routes/Routes';
import './style.css';

const RootApp = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<RootApp />);
