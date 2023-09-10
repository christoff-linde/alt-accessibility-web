'use client';

import { ReactNode } from 'react';
import { useAppSelector } from './Navigation';

const Heading = ({ children }: { children: ReactNode }) => {
  const { titleFontSize } = useAppSelector((state) => state.theme);
  return <h1 className={`${titleFontSize} font-bold`}>{children}</h1>;
};

export default Heading;
