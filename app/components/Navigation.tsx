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
import Link from 'next/link';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { setActiveIndex, setOrientation } from '../store/themeSlice';
import ThemeSelector from './ThemeSelector';
import { useState } from 'react';

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
  const [switchingLayout, setSwitchingLayout] = useState(false);

  const dispatch = useAppDispatch();
  const activeIndex = useAppSelector((state) => state.theme.activeIndex);
  const orientation = useAppSelector((state) => state.theme.orientation);

  const handleLayoutShift = () => {
    if (switchingLayout) return;

    setSwitchingLayout(true);
    setTimeout(() => {
      dispatch(setOrientation());
      setSwitchingLayout(false);
    }, 1500);
  };

  return (
    <div
      className={
        'space-evenly fixed bottom-0 left-0 z-10 flex w-screen flex-col items-center justify-center gap-2 rounded-t-xl bg-gray-950'
      }
    >
      <ThemeSelector />
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
              <div className='flex h-16 w-20 flex-col items-center justify-center gap-1 rounded-lg p-1 transition-colors hover:text-blue-400'>
                {activeIndex === link.index ? (
                  <link.solidIcon className='h-6 w-6 text-blue-500' />
                ) : (
                  <link.icon className='h-6 w-6' />
                )}
              </div>
            </Link>
          ) : (
            <button
              className='flex h-16 w-20 flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-1 transition-colors hover:bg-blue-500 hover:text-gray-950'
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
