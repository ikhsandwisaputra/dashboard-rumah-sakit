import axios from 'axios'
import React, { useEffect } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import Loader from './Loading'
type Props = {
  id_pasien: string,
    onClose: () => any
}

type RiwawatMedisProps = {
  id_kunjungan: string
  id_pasien: string
  tanggal: string
  keluhan: string
  diagnosa: string
  id_dokter: string
}

const ambilDataRiwayatMedis = async (id_pasien: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/riwayat_medis/${id_pasien}`);
    const data = response.data;

    // Pastikan hanya data valid yang masuk
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return [];
    }

    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error(error);
    return [];
  }
};

function Modal({onClose, id_pasien}: Props) {
  const [riwayatMedis, setRiwayatMedis] = React.useState<RiwawatMedisProps[]>([])
const [loading, setLoading] = React.useState(false);

useEffect(() => {
  const fetchData = async () => {
    if (!id_pasien) return;
    setLoading(true);
    const data = await ambilDataRiwayatMedis(id_pasien);
    setRiwayatMedis(data);
    setLoading(false);
  };
  fetchData();
}, [id_pasien]);

return (
  <div className="fixed inset-0  bg-opacity-0 backdrop-blur-sm flex items-center justify-center p-4 z-[999999]">
    <div className="bg-brand-background w-full max-w-lg mx-auto rounded-2xl shadow-2xl flex flex-col relative animate-fade-in-up">

      {/* Header Section */}
      <div className="bg-brand-primary p-4 rounded-t-2xl flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Riwayat Medis</h1>
        <button onClick={onClose} className="text-white hover:text-brand-accent transition-colors duration-300">
          <IoIosCloseCircle size={36} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 overflow-y-auto max-h-[70vh]">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-8">
            <Loader></Loader>
            <p className="animate-pulse text-brand-text-primary text-lg">Memuat data...</p>
          </div>
        ) : (
          <div>
            {riwayatMedis.length > 0 ? (
              <ul className="space-y-4">
                {riwayatMedis.map((data, index) => (
                  <li key={index} className="bg-white rounded-lg shadow-md p-5 border-l-4 border-brand-accent transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-semibold text-brand-primary bg-brand-accent bg-opacity-20 px-3 py-1 rounded-full">
                        Kunjungan: {data.id_kunjungan || '-'}
                      </p>
                      <p className="text-sm text-brand-text-secondary">{data.tanggal || '-'}</p>
                    </div>
                    <div className="mt-4">
                      <p className="font-bold text-brand-text-primary">Keluhan:</p>
                      <p className="text-brand-text-secondary mb-3">{data.keluhan || '-'}</p>
                      <p className="font-bold text-brand-text-primary">Diagnosa:</p>
                      <p className="text-brand-text-secondary">{data.diagnosa || '-'}</p>
                    </div>
                    <div className="border-t mt-4 pt-3 flex items-center justify-between">
                       <p className="text-sm text-brand-text-secondary">
                        <span className="font-semibold">Dokter:</span> {data.id_dokter || '-'}
                       </p>
                       <p className="text-sm text-brand-text-secondary">
                         <span className="font-semibold">Pasien:</span> {data.id_pasien || '-'}
                       </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-10 px-4">
                <p className="text-brand-text-secondary text-lg">Tidak ada riwayat medis yang ditemukan.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);
}

export default Modal