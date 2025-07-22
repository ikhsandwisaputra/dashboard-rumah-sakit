import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import '~/css/index.css';
import FormPasien from './pages/dashboard-menu/FormPasien';
import FormDokter from './pages/dashboard-menu/FormDokter';
import DataPasien from '~/pages/dashboard-menu/DataPasien';
import DataDokter from '~/pages/dashboard-menu/DataDokter';
import AccessRequest from './pages/dashboard-menu/AccessRequest';
import MainContent from './components/MainContent';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import { Toaster } from 'react-hot-toast';



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PublicLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <MainContent /> },
        { path: 'data-pasien', element: <DataPasien /> },
        { path: 'data-pasien/form-pasien', element: <FormPasien /> },
        { path: 'data-pasien/form-pasien/:id', element: <FormPasien /> },
        { path: 'data-dokter', element: <DataDokter /> },
        { path: 'data-dokter/form-dokter', element: <FormDokter /> },
        { path: 'data-dokter/form-dokter/:id', element: <FormDokter /> },
        { path: 'access-request', element: <AccessRequest /> },
      ],
    },
    { path: '*', element: <NotFoundPage /> },
  ],
  {
    basename: '/dashboard-rumah-sakit', // <- Di sini kamu menaruh basename
  }
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster 
        position="top-right" // Posisi notifikasi
        toastOptions={{
          duration: 3000, // Durasi notifikasi 3 detik
          style: {
            background: '#363636', // Warna latar belakang
            color: '#fff',        // Warna teks
          },
        }}
      />
    <RouterProvider router={router} />
  </React.StrictMode>
);
