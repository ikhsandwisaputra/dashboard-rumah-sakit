import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface UserProfileProps {
  name: string;
  avatarUrl: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, avatarUrl }) => {
  return (
    <div className="flex items-center bg-white p-2 rounded-lg shadow-sm cursor-pointer">
      <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full object-cover" />
      <div className="ml-3 mr-2">
        <p className="font-semibold text-sm text-brand-text-primary">{name}</p>
      </div>
      <FiChevronDown className="text-brand-text-secondary" />
    </div>
  );
};

export default UserProfile;