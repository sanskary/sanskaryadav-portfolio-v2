import type { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface RootLayoutProps {
  children?: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
