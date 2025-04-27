import GoogleMap from '@/components/GoogleMap';

interface ContactMapProps {
  mapSrc: string;
}

export default function ContactMap({ mapSrc }: ContactMapProps) {
  return (
    <div className='mt-6'>
      <h3 className='text-xl font-semibold mb-3'>Nous trouver</h3>
      <GoogleMap
        src={mapSrc}
        height='320px'
        className='shadow-md'
        title="Emplacement de Karyn' Danse à Bayonne"
      />
    </div>
  );
}