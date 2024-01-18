import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import SessionProvider from '@/context/SessionProvider';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { ParticleHeader } from '@/components/ParticleHeader';
import { auth } from '@/auth';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pick A Planet',
  description: 'Displays nine planets including Pluto',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col min-w-fit`}
      >
        <SessionProvider session={session}>
          <ParticleHeader />
          <NavBar />
          {children}
          <Analytics />
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
