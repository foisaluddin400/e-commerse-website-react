import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';

// Import QueryClient and QueryClientProvider from TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from './Autentication/AuthProvider';

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>  {/* Wrap the app in QueryClientProvider */}
      <div className='max-w-screen-2xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
);
