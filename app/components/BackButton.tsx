'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';
import { usePathname, useRouter } from 'next/navigation';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const orientation = useAppSelector((state) => state.theme.orientation);

  return (
    <div className={orientation + ' ' + 'mb-4 flex items-center font-bold'}>
      {pathname !== '/' ? (
        <button onClick={() => router.back()} className='flex gap-2'>
          <ArrowLeftIcon className='h-6 w-6' />
          <span>Back</span>
        </button>
      ) : null}
    </div>
  );
};

export default BackButton;
