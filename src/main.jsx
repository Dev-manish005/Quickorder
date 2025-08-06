import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router'; //Use react-router
import appRouter from './Router/appRouter.jsx';
// import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} /> {/* Use RouterProvider to enable routing */}
  </StrictMode>
);
