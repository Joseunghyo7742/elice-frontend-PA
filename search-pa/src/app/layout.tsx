import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elice Course Search Page',
  description: "App for Elice's Frontend PA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-elice-white min-h-screen`}>
        <main className="mx-auto w-full p-6 max-w-7xl">{children}</main>
      </body>
    </html>
  );
}
