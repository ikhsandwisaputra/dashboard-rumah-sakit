import React from 'react';

const ActivityCard: React.FC = () => {
  const activities = [
    { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: 'bg-green-500' },
    { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: 'bg-orange-500' },
    { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: 'bg-yellow-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-brand-text-primary">Activity</h3>
        <a href="#" className="text-sm font-semibold text-brand-primary hover:underline">View All</a>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start">
            <div className={`w-3 h-3 ${activity.color} rounded-full mt-1.5 mr-4 flex-shrink-0`}></div>
            <p className="text-sm text-brand-text-secondary">
              {activity.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;