import React from 'react';

const TotalSaleCard: React.FC = () => {
  const percentage = 70;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-brand-text-primary">Total Sale</h3>
        <a href="#" className="text-sm font-semibold text-brand-primary hover:underline">View All</a>
      </div>
      <div className="flex-grow flex items-center justify-center my-4">
        <div className="relative w-40 h-40">
            {/* Background circle */}
            <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e6e6e6"
                    strokeWidth="3"
                />
                {/* Progress circle */}
                <path
                    className="text-brand-accent"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${percentage}, 100`}
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-brand-text-primary">{percentage}%</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSaleCard;