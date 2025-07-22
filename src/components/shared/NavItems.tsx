import { NavLink } from 'react-router-dom';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  url: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, url }) => {
  const isExact = url === '/dashboard' || url === '/';  // Home route kita = /dashboard

  return (
    <NavLink
      to={url}
      end={isExact}  // ⬅️ hanya tambahkan end di Home
      className={({ isActive }) => {
        const baseClasses = "flex items-center w-full transition-all duration-300 ease-in-out h-14";
        const activeClasses = "bg-brand-background text-brand-primary font-bold rounded-l-full pl-6";
        const inactiveClasses = "text-white hover:bg-brand-primary-light px-6 rounded-l-full";
        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
      }}
    >
      <span className="mr-4 text-xl">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default NavItem;
