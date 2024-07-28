import { Lusitana, Inter } from 'next/font/google';

export const lusitana = Lusitana({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'fallback',
});
