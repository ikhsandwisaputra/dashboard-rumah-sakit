import React, { useState } from 'react';
import NavItem from "~/components/shared/NavItems";
import { 
  FiHome, FiUsers,  FiUserCheck, 
  FiSettings, FiHelpCircle, FiLogOut, FiMenu, FiX 
} from 'react-icons/fi';
import { FaUserDoctor } from 'react-icons/fa6';

const Sidebar: React.FC = () => {
  // State untuk mengontrol visibilitas sidebar di mobile
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <FiHome />, label: 'Home', url: '/dashboard' },
    { icon: <FiUsers />, label: 'Data Pasien', url: '/dashboard/data-pasien' },
    { icon: <FaUserDoctor />, label: 'Data Dokter', url: '/dashboard/data-dokter' },
    { icon: <FiUserCheck />, label: 'Admin', url: '/admin' },
    { icon: <FiSettings />, label: 'Settings', url: '/settings' },
    { icon: <FiHelpCircle />, label: 'Support', url: '/support' },
  ];

  const quitItem = { icon: <FiLogOut />, label: 'Quit' };

  return (
    <>
      {/* Tombol Toggle untuk Mobile */}
      <button
        // Tombol ini hanya terlihat di layar kecil (mobile)
        className="lg:hidden fixed top-4 right-4 z-40 p-2 bg-brand-primary rounded-md text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {/* Ikon berubah berdasarkan state 'isOpen' */}
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay: Muncul saat sidebar terbuka di mobile, klik untuk menutup */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Kontainer Sidebar */}
      <aside 
        className={`
          bg-brand-primary text-white w-64
          h-screen lg:min-h-screen flex flex-col pl-2 
          fixed top-0 left-0 z-20
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="text-2xl font-bold mb-10 px-4 pt-6">
          M - SoftTech
        </div>

        <nav className="flex-grow">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="rounded-l-full relative">
                <NavItem url={item.url} icon={item.icon} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto p-4">
          <ul>
            <li>
              <NavItem url="/quit" icon={quitItem.icon} label={quitItem.label} />
            </li>
          </ul>

          <div className="bg-white/10 w-full rounded-lg mt-6 text-center">
            <div className="w-50 h-50 bg-brand-primary-light mx-auto mb-4 rounded-md ">
              <img src="/support.png" alt="Illustration" className="w-full h-auto object-center" />
            </div>
            <p className="font-bold text-lg">24/7</p>
            <p className="text-sm text-gray-300">Support</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;