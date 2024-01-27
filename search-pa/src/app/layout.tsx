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
        <main className="w-full mx-auto p-6 lg:max-w-5xl">{children}</main>
      </body>
    </html>
  );
}
