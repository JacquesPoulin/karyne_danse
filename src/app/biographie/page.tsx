'use client';

import PageHeader from './components/PageHeader';
import BiographySection from './components/BiographySection';
import QualificationsSection from './components/QualificationsSection';
import PhilosophySection from './components/PhilosophySection';

export default function Biographie() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-black py-16'>
      <div className='container mx-auto px-4'>
        <PageHeader />
        <BiographySection />
        <QualificationsSection />
        <PhilosophySection />
      </div>
    </div>
  );
}
