import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Facili Saúde',
  description: 'Consulte pagando apenas R$ 21,90 em mais de 21 especialidades',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
