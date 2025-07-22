import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiHome, FiChevronRight } from 'react-icons/fi';

// Fungsi helper untuk mengubah slug menjadi teks yang lebih mudah dibaca
// Contoh: "data-pasien" -> "Data Pasien"
const formatBreadcrumb = (str: string): string => {
  return str
    .replace(/-/g, ' ') // Ganti tanda hubung dengan spasi
    .replace(/\b\w/g, char => char.toUpperCase()); // Ubah huruf pertama setiap kata menjadi kapital
};

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  // Memecah URL menjadi segmen-segmen dan memfilter string kosong
  const pathnames = location.pathname.split('/').filter(x => x);

  // Jika berada di halaman utama, tidak perlu menampilkan breadcrumb
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-white px-6 py-3 rounded-lg shadow-sm mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        {/* Link ke Halaman Utama (Home/Dashboard) */}
        <li>
          <Link 
            to="/dashboard" 
            className="flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-200"
          >
            <FiHome className="h-4 w-4 mr-2" />
            Dashboard
          </Link>
        </li>

        {/* Memetakan setiap segmen URL */}
        {pathnames.map((value, index) => {
          // Membuat URL untuk setiap breadcrumb secara bertahap
          // Contoh: /dashboard, lalu /dashboard/data-pasien, dst.
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          // Jangan render segmen "dashboard" karena sudah ada link Home/Dashboard
          if (value.toLowerCase() === 'dashboard') {
            return null;
          }

          return (
            <li key={to} className="flex items-center">
              {/* Separator */}
              <FiChevronRight className="h-4 w-4 mx-2 text-gray-400" />

              {isLast ? (
                // Teks untuk halaman aktif saat ini (tidak bisa diklik)
                <span className="font-semibold text-gray-800" aria-current="page">
                  {formatBreadcrumb(value)}
                </span>
              ) : (
                // Link untuk segmen-segmen sebelumnya
                <Link 
                  to={to} 
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  {formatBreadcrumb(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;