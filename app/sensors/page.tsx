import dynamic from 'next/dynamic';
const SensorsComponent = dynamic(() => import('../components/Sensors'), {
  ssr: false,
});

const SensorsPage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Sensors Page</h1>
      <SensorsComponent />
    </div>
  );
};

export default SensorsPage;
