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



const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '*', element: <NotFoundPage /> },
    ]
  },
  {
  path: '/dashboard',
  element: <DashboardLayout />,
 // Navbar tetap tampil di semua halaman
    children: [       
         { index: true, element: <MainContent /> },
        { path: '/dashboard/data-pasien', element: <DataPasien /> },
        { path: '/dashboard/data-pasien/form-pasien', element: <FormPasien /> },
        { path: '/dashboard/data-pasien/form-pasien/:id', element: <FormPasien /> },        
        { path: '/dashboard/data-dokter', element: <DataDokter /> },        
        { path: '/dashboard/data-dokter/form-dokter', element: <FormDokter /> },
        { path: '/dashboard/data-dokter/form-dokter/:id', element: <FormDokter /> },
        { path: '/dashboard/access-request', element: <AccessRequest /> },

      ] },
      { path: '*', element: <NotFoundPage /> },
]);

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
