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
import { setActiveIndex, setFontSize } from '../store/themeSlice';
import { FontSize } from '../types';

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
    path: '/',
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
  const fontSize = useAppSelector((state) => state.theme.fontSize);

  const handleNavClick = (index: number) => {
    let targetFontSize = undefined;
    switch (index) {
      case 0:
        targetFontSize = FontSize.SMALL;
        break;
      case 1:
        targetFontSize = FontSize.NORMAL;
        break;
      case 2:
        targetFontSize = FontSize.MEDIUM;
        break;
      case 3:
        targetFontSize = FontSize.LARGE;
        break;
      default:
        targetFontSize = FontSize.NORMAL;
        break;
    }

    dispatch(setFontSize(targetFontSize));
    dispatch(setActiveIndex(index));
  };
  return (
    <div
      className={
        'space-evenly fixed bottom-0 left-0 z-10 flex w-screen items-center justify-center rounded-t-xl bg-gray-950' +
        ' ' +
        fontSize
      }
    >
      {navLinks.map((link, linkIdx) => (
        <div key={`nav-link-${linkIdx}-${link.title}`}>
          <Link href={link.path} onClick={() => handleNavClick(linkIdx)}>
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
  );
};

export default Navigation;
