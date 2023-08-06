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
import { setActiveIndex } from '../store/themeSlice';
import ThemeSelector from './ThemeSelector';

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
  const dispatch = useAppDispatch();
  const activeIndex = useAppSelector((state) => state.theme.activeIndex);

  return (
    <div
      className={
        'space-evenly fixed bottom-0 left-0 z-10 flex w-screen flex-col items-center justify-center rounded-t-xl bg-gray-950'
      }
    >
      <ThemeSelector />
      <div className='space-evenly flex items-center justify-center'>
        {navLinks.map((link, linkIdx) => (
          <div key={`nav-link-${linkIdx}-${link.title}`}>
            <Link
              href={link.path}
              onClick={() => dispatch(setActiveIndex(linkIdx))}
            >
              <div className='flex h-16 w-20 flex-col items-center justify-center gap-1 rounded-lg p-1 transition-colors hover:text-blue-400'>
                {activeIndex === link.index ? (
                  <link.solidIcon className='h-6 w-6 text-blue-500' />
                ) : (
                  <link.icon className='h-6 w-6' />
                )}

                {/* {link.title ? (
                <span className='text-gray-300'>{link.title}</span>
                ) : (
                  <span className='text-transparent'>_</span>
                )} */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
