import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CheaperBox — Premium Deals, Verified Quality",
  description: "Shop smarter, save bigger. Hand-picked deals on premium products at unbeatable prices. Trusted by 2M+ customers.",
  keywords: ["deals", "shopping", "discounts", "online shopping", "best prices", "verified products"],
  applicationName: 'CheaperBox',
  authors: [{ name: 'CheaperBox' }],
  openGraph: {
    title: 'CheaperBox — Premium Deals, Verified Quality',
    description: 'Shop smarter, save bigger. Hand-picked deals on premium products at unbeatable prices.',
    url: 'https://cheaperbox.com',
    siteName: 'CheaperBox',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CheaperBox - deals',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CheaperBox — Premium Deals',
    description: 'Hand-picked deals with verified quality',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icons8-cheap-48.png',
    shortcut: '/icons8-cheap-48.png',
    apple: '/icons8-cheap-48.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16957880024"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16957880024');
          `}
        </Script>
      </head>
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
