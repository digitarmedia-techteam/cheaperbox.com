import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Top AliExpress Deals in USA – Limited Time | CheaperBox',
  description: 'Discover top AliExpress deals in the USA. Save big with verified coupons on trending gadgets, home & lifestyle products. Trusted by millions.',
  keywords: ['aliexpress deals', 'usa deals', 'coupons', 'discounts', 'smart gadgets', 'home products'],
  openGraph: {
    title: 'Top AliExpress Deals in USA – Limited Time',
    description: 'Save big on verified AliExpress coupons for gadgets and home products',
    type: 'website',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
