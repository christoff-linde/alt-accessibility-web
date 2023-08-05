'use client';

import {
  ArrowsRightLeftIcon,
  NewspaperIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import {
  ArrowsRightLeftIcon as ArrowsRightLeftIconSolid,
  NewspaperIcon as NewspaperIconSolid,
  HomeIcon as HomeIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
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

const Navigation = () => {
  const [activeIndex] = useState(0);
  return (
    <div className='space-evenly fixed bottom-0 left-0 z-10 flex w-screen justify-center rounded-t-xl bg-gray-950'>
      {navLinks.map((link) => (
        <div key={`nav-link-${link.index}`}>
          <Link href={link.path}>
            <div className='flex h-16 w-20 flex-col items-center justify-center gap-1 rounded-lg p-1 transition-colors hover:text-blue-400'>
              {activeIndex === link.index ? (
                <link.solidIcon className='h-6 w-6 text-blue-500' />
              ) : (
                <link.icon className='h-6 w-6' />
              )}

              {/* {link.title ? (
                <span className='text-xs text-gray-300'>{link.title}</span>
              ) : (
                <span className='text-xs text-transparent'>_</span>
              )} */}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
