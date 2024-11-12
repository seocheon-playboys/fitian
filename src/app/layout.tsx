import type { Metadata } from 'next';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  weight: ['300', '500', '700'],
});

export const metadata: Metadata = {
  title: 'FITIAN',
  description: 'fitian app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} antialiased`}>{children}</body>
    </html>
  );
}
