import React, { useEffect, useState } from 'react';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const DokterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [id_dokter, setIdDokter] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const isEdit = id && id !== 'new';
  
  useEffect(() => {
  if (id && id !== 'new') {
    setLoading(true);
    axios.get(`http://localhost:3000/dokter/${id}`)
      .then((response) => {
        const data = response.data;
        setName(data.nama_dokter);
        setEmail(data.email_dokter);
        setPhone(data.kontak_dokter);
        setIdDokter(data.id_dokter);
      })
      .catch((error) => {
        console.error('Gagal mengambil data dokter:', error);
        toast.error('Gagal mengambil data dokter.');
      })
      .finally(() => setLoading(false));
  }
}, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const dokterData = {
    nama_dokter: name,
    email_dokter: email,
    kontak_dokter: phone,
    id_dokter: id_dokter
  };


  const url = isEdit
    ? `http://localhost:3000/dokter/${id}`
    : 'http://localhost:3000/dokter';
  const method = isEdit ? axios.patch : axios.post;

  try {
    setLoading(true);
    const promise = method(url, dokterData);

    toast.promise(promise, {
      loading: isEdit ? 'Memperbarui data...' : 'Menyimpan data...',
      success: isEdit
        ? `Data untuk ${name} berhasil diperbarui!`
        : `Data untuk ${name} berhasil disimpan!`,
      error: 'Terjadi kesalahan saat mengirim data.',
    });

    await promise;

    // Reset form jika menambah data baru
    if (!isEdit) {
      setName('');
      setEmail('');
      setPhone('');
      setIdDokter('');
    }

  } catch (error) {
    console.error('Gagal:', error);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-brand-text-primary mb-6">
        Tambah Data Dokter Baru
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">      
        <div>
          <label htmlFor="idDokter" className="block text-sm font-semibold text-brand-text-secondary mb-2">
            ID Dokter
          </label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="idDokter"
              type="number"
              value={id_dokter}
              onChange={(e) => setIdDokter(e.target.value)}
              placeholder="Contoh: 12345"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-primary focus:border-brand-primary transition-all"
            />
          </div>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-brand-text-secondary mb-2">
            Nama Lengkap
          </label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-primary focus:border-brand-primary transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-brand-text-secondary mb-2">
            Email
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contoh@email.com"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-primary focus:border-brand-primary transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-brand-text-secondary mb-2">
            No. Handphone
          </label>
          <div className="relative">
            <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="081234567890"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-primary focus:border-brand-primary transition-all"
            />
          </div>
        </div>

        <div className="pt-4">
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary-light transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50 cursor-pointer"
          >
           {loading
    ? isEdit ? 'Memperbarui...' : 'Menyimpan...'
    : isEdit ? 'Update Data Dokter' : 'Simpan Data Dokter'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DokterForm;
