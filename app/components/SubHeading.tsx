'use client';

import { ReactNode } from 'react';
import { useAppSelector } from './Navigation';

const SubHeading = ({ children }: { children: ReactNode }) => {
  const { subTitleFontSize } = useAppSelector((state) => state.theme);
  return <h2 className={`${subTitleFontSize} font-bold`}>{children}</h2>;
};

export default SubHeading;
