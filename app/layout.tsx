import { Metadata } from 'next';
import { ReactNode } from 'react';

import BackButton from './components/BackButton';
import Navigation from './components/Navigation';
import Providers from './components/Provider';
import { inter } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'ShareSphere',
  description: 'A social media platform for sharing photos and blogs.',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <Providers>
        <body className={(inter.className, 'mx-8 mb-24 mt-8 h-full')}>
          <BackButton />
          {children}
          <Navigation />
        </body>
      </Providers>
    </html>
  );
};

export default RootLayout;
