import dynamic from 'next/dynamic';
import {
  isDesktop
} from 'react-device-detect';
const SensorsComponent = dynamic(() => import('../components/Sensors'), {
  ssr: false,
});

const SensorsPage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Sensors Page</h1>
      {!isDesktop ? (
        <p className='mt-2 rounded-md bg-red-600/10 p-3 text-red-500 ring-1 ring-inset ring-red-200/10'>
          To get the full functionality of this page, please open it in any
          Chrome-based browser on <span className='font-bold'>Android</span>
        </p>
      ) : (
        <SensorsComponent />
      )}
    </div>
  );
};

export default SensorsPage;
