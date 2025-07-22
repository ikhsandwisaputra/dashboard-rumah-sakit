import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subtext?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtext }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-brand-text-secondary">{title}</h3>
        <div className="text-2xl">{icon}</div>
      </div>
      <div className="mt-4">
        <p className="text-4xl font-bold text-brand-text-primary">{value}</p>
        <p className="text-xs text-red-500">{subtext}</p>
      </div>
    </div>
  );
};

export default StatCard;