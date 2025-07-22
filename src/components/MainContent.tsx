import React from 'react';
import { FiBarChart2, FiShoppingCart, FiBox } from 'react-icons/fi';
import StatCard from '~/components/cards/StatCard';
import OverviewCard from '~/components/cards/OverviewCard';
import TotalSaleCard from '~/components/cards/TotalSaleCard';
import ActivityCard from '~/components/cards/ActivityCard';
type Patient = {
  id_pasien: string;
  nama_pasien: string;
  email: string;
  no_hp: string;
};

const ambilDataPasien = async (): Promise<Patient[]> => {
  try {
    const response = await fetch('http://localhost:3000/pasien');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}


const MainContent: React.FC = () => {
  const [patients, setPatients] = React.useState<Patient[]>([]);

  React.useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await ambilDataPasien();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
    fetchPatients();
  }, [])

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <StatCard 
          icon={<FiBarChart2 className="text-brand-accent" />} 
          title="Total Pasien" 
          value={patients.length} 
        />
        <StatCard 
          icon={<FiShoppingCart className="text-orange-500" />} 
          title="Purchases" 
          value="2343" 
          subtext="1 Sales Last Month" 
        />
        <StatCard 
          icon={<FiBox className="text-blue-500" />} 
          title="Orders" 
          value="35343" 
          subtext="1 Sales Last Month" 
        />
      </div>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <OverviewCard />
        </div>
        <div className="lg:col-span-1">
          <TotalSaleCard />
        </div>
        <div className="lg:col-span-1">
          <ActivityCard />
        </div>
      </div>
    </main>
  );
};

export default MainContent;