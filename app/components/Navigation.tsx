'use client';

import {
  ArrowsRightLeftIcon,
  Cog6ToothIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';
import {
  ArrowsRightLeftIcon as ArrowsRightLeftIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  HomeIcon as HomeIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  NewspaperIcon as NewspaperIconSolid,
} from '@heroicons/react/24/solid';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { setActiveIndex, setLayoutSwitchActive } from '../store/themeSlice';
const SensorsComponent = dynamic(() => import('../components/Sensors'), {
  ssr: false,
});

const navLinks = [
  {
    index: 0,
    title: 'Home',
    path: '/',
    icon: HomeIcon,
    solidIcon: HomeIconSolid,
  },
  {
    index: 1,
    title: 'Search',
    path: '/',
    icon: MagnifyingGlassIcon,
    solidIcon: MagnifyingGlassIconSolid,
  },
  // {
  //   index: 2,
  //   title: 'Sensors',
  //   path: '/sensors',
  //   icon: ChartBarSquareIcon,
  //   solidIcon: ChartBarSquareIconSolid,
  // },
  {
    index: 2,
    title: undefined,
    path: '/',
    icon: ArrowsRightLeftIcon,
    solidIcon: ArrowsRightLeftIconSolid,
  },
  {
    index: 3,
    title: 'Blog',
    path: '/blog',
    icon: NewspaperIcon,
    solidIcon: NewspaperIconSolid,
  },
  {
    index: 4,
    title: 'Settings',
    path: '/settings',
    icon: Cog6ToothIcon,
    solidIcon: Cog6ToothIconSolid,
  },
];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Navigation = () => {
  const dispatch = useAppDispatch();
  const layoutSwitchActive = useAppSelector(
    (state) => state.theme.layoutSwitchActive
  );
  const activeIndex = useAppSelector((state) => state.theme.activeIndex);
  const orientation = useAppSelector((state) => state.theme.orientation);

  const [colorString, setColorString] = useState('text-gray-300');

  const handleLayoutShift = () => {
    if (layoutSwitchActive) return;

    dispatch(setLayoutSwitchActive(true));
    setTimeout(() => {
      dispatch(setLayoutSwitchActive(false));
    }, 1500);
  };

  useMemo(() => {
    if (layoutSwitchActive) {
      setColorString('bg-blue-500 text-gray-950');
    } else {
      setColorString('bg-gray-900');
    }
  }, [layoutSwitchActive]);

  return (
    <div
      className={
        'space-evenly fixed bottom-0 left-0 z-10 flex w-screen flex-col items-center justify-center gap-2 rounded-t-xl bg-gray-950'
      }
    >
      {/* TODO remove once all functionality is working, just makes testing easier */}
      {/* <ThemeSelector /> */}
      <div
        className={
          orientation + ' ' + 'space-evenly flex items-center justify-center'
        }
      >
        {navLinks.map((link, linkIdx) =>
          link.title !== undefined ? (
            <Link
              key={`nav-link-${linkIdx}-${link.title}`}
              href={link.path}
              onClick={() => dispatch(setActiveIndex(linkIdx))}
            >
              <div className='mt-2 flex h-16 w-20 flex-col items-center justify-center gap-1 rounded-lg p-4 transition-colors hover:text-blue-400'>
                {activeIndex === link.index ? (
                  <link.solidIcon className='h-6 w-6 text-blue-500' />
                ) : (
                  <link.icon className='h-6 w-6' />
                )}
              </div>
            </Link>
          ) : (
            <button
              className={`mt-2 flex h-16 w-20 flex-col items-center justify-center gap-1 rounded-lg p-4 ${colorString}`}
              key={`nav-link-${linkIdx}-${link.title}`}
              onClick={() => handleLayoutShift()}
            >
              {activeIndex === link.index ? (
                <link.solidIcon className='h-6 w-6 text-blue-500' />
              ) : (
                <link.icon className='h-6 w-6' />
              )}
            </button>
          )
        )}
      </div>
      <SensorsComponent />
    </div>
  );
};

export default Navigation;

{
  /* {link.title ? (
<span className='text-gray-300'>{link.title}</span>
) : (
  <span className='text-transparent'>_</span>
)} */
}
