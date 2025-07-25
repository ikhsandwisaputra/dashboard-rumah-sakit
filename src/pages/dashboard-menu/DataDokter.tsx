import axios from 'axios';
import React, { useState, useMemo, useEffect } from 'react';
import { FiSearch,  FiChevronUp, FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {ActionButtons} from '~/components/shared/ActionButtons';
import {Button} from '~/components/shared/Button';
import Loader from '~/components/shared/Loading';


type Dokter = {
  id_dokter: string;
  nama_dokter: string;
  email_dokter: string;
  kontak_dokter: string;
};

type SortConfig = {
  key: keyof Dokter | null;
  direction: 'ascending' | 'descending';
};

const ambilDataDokter = async (): Promise<Dokter[]> => {
  try {
    const response = await axios.get('http://localhost:3000/dokter');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const DokterTable: React.FC = () => {
  const [dokters, setDokters] = useState<Dokter[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'ascending' });
const [loading, setLoading] = React.useState(false);
  useEffect(() => {
     setLoading(true);
    const fetchDokters = async () => {
      const data = await ambilDataDokter();
      setDokters(data);
      setLoading(false);
    };
    fetchDokters();
  }, []);
  
  // --- BAGIAN BARU UNTUK PAGINASI ---
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Logika filter dan sort (tidak berubah)
  const sortedAndFilteredDokters = useMemo(() => {
    const sortableItems = [...dokters].filter((dokter) =>
      dokter.nama_dokter.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dokter.email_dokter.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dokter.kontak_dokter.includes(searchTerm)
    );

    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (a[sortConfig.key!] > b[sortConfig.key!]) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [dokters, searchTerm, sortConfig]);

  // --- BAGIAN BARU: LOGIKA UNTUK MEMOTONG DATA SESUAI HALAMAN ---
  const paginatedDokters = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedAndFilteredDokters.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, sortedAndFilteredDokters]);

  // --- BAGIAN BARU: PERHITUNGAN UNTUK KONTROL HALAMAN ---
  const totalPages = Math.ceil(sortedAndFilteredDokters.length / ITEMS_PER_PAGE);
  const startItemIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItemIndex = Math.min(currentPage * ITEMS_PER_PAGE, sortedAndFilteredDokters.length);


  // Fungsi untuk sort (tidak berubah)
  const requestSort = (key: keyof Dokter) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  // Fungsi untuk ikon sort (tidak berubah)
  const getSortIcon = (key: keyof Dokter) => {
    if (sortConfig.key !== key) return null;
    if (sortConfig.direction === 'ascending') return <FiChevronUp className="inline ml-1" />;
    return <FiChevronDown className="inline ml-1" />;
  };
  const handleDelete = async (id_dokter: string) => {
    const confirmDelete = window.confirm(`Yakin ingin menghapus pasien dengan ID ${id_dokter}?`);
    if (!confirmDelete) return;
    try {
      await axios.delete(`http://localhost:3000/dokter/${id_dokter}`);
      setDokters((prevDokters) => prevDokters.filter((dokter) => dokter.id_dokter !== id_dokter));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
       <div className="wrap w-[200px] h-fit">
        <Button label='Tambah Dokter' url='/dashboard/data-dokter/form-dokter'></Button>
        </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-brand-text-primary mb-4 sm:mb-0">
          Data Dokter
        </h2>
          
                  
        <div className="relative w-full sm:w-64">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari data..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
          />
        </div>
      </div>
     <div className="overflow-x-auto">
  {loading ? (
    <div className="flex flex-col items-center justify-center p-8">
         <Loader></Loader>
          <p className="animate-pulse text-brand-text-primary text-lg">Memuat data...</p>
    </div>
    // Loading Spinner
  ) : paginatedDokters.length === 0 ? (
    // Data Kosong
    <div className="text-center py-10 px-4">
      <p className="text-brand-text-secondary text-lg">Tidak ada data pasien yang ditemukan.</p>
    </div>
  ) : (
    // Tabel
    <table className="w-full text-sm text-left text-brand-text-secondary">
      <thead className="text-xs text-brand-text-secondary uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 w-12">No</th>
          <th scope="col" className="px-6 py-3">
            <button onClick={() => requestSort('nama_dokter')} className="hover:text-brand-text-primary">
              Nama Dokter {getSortIcon('nama_dokter')}
            </button>
          </th>
          <th scope="col" className="px-6 py-3">
            <button onClick={() => requestSort('email_dokter')} className="hover:text-brand-text-primary">
              Email {getSortIcon('email_dokter')}
            </button>
          </th>
          <th scope="col" className="px-6 py-3">No. Handphone</th>
          <th scope="col" className="px-6 py-3 text-center">Aksi</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {paginatedDokters.map((dokter, index) => (
          <tr key={dokter.id_dokter} className="bg-white hover:bg-gray-50">
            <td className="px-6 py-4 font-medium text-brand-text-primary">{startItemIndex + index}</td>
            <td className="px-6 py-4 font-medium text-brand-text-primary whitespace-nowrap">{dokter.nama_dokter}</td>
            <td className="px-6 py-4">{dokter.email_dokter}</td>
            <td className="px-6 py-4">{dokter.kontak_dokter}</td>
            <td className="px-6 py-4 text-center">
              <div className="flex justify-center items-center space-x-4">               
               <ActionButtons
  id={dokter.id_dokter}
  editUrl={`/dashboard/data-dokter/form-dokter/${dokter.id_dokter}`}
  onDelete={handleDelete}  // Bisa tanpa onView kalau tidak perlu lihat
/>

              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>


      {/* --- BAGIAN BARU: KONTROL PAGINASI --- */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-brand-text-secondary mb-4 sm:mb-0">
            Menampilkan <span className="font-semibold">{startItemIndex}</span> - <span className="font-semibold">{endItemIndex}</span> dari <span className="font-semibold">{sortedAndFilteredDokters.length}</span> data
          </p>
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 flex items-center text-sm font-medium text-brand-text-secondary bg-white rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiChevronLeft className="mr-1" size={16} />
              Sebelumnya
            </button>
            {/* Di sini bisa ditambahkan logika untuk menampilkan nomor halaman jika diperlukan */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 flex items-center text-sm font-medium text-brand-text-secondary bg-white rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Berikutnya
              <FiChevronRight className="ml-1" size={16} />
            </button>
          </nav>
        </div>
      )}
    
    </div>
    
  );
};

export default DokterTable;