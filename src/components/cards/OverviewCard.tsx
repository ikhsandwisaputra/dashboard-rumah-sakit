import React from 'react';

const OverviewCard: React.FC = () => {
    const members = [
        { name: 'Member Prole', value: '+2345', active: true },
        { name: 'Member Prole', value: '+2345', active: false },
        { name: 'Member Prole', value: '+2345', active: false },
        { name: 'Member Prole', value: '+2345', active: false },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-md h-full">
            <h3 className="font-bold text-lg text-brand-text-primary mb-4">Overview</h3>
            <div className="space-y-3">
                {members.map((member, index) => (
                    <div 
                        key={index} 
                        className={`flex justify-between items-center p-3 rounded-lg ${member.active ? 'bg-brand-primary text-white' : 'bg-gray-100'}`}
                    >
                        <span className="text-sm font-medium">{member.name}</span>
                        <span className={`font-semibold text-sm ${member.active ? 'text-white' : 'text-brand-primary'}`}>{member.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OverviewCard;