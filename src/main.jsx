import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './ContextApi/AuthProvider';
import './index.css';
import router from './Routes/Routes';
import './style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
);
