import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CheaperBox — Premium Deals, Verified Quality",
  description: "Shop smarter, save bigger. Hand-picked deals on premium products at unbeatable prices. Trusted by 2M+ customers.",
  keywords: ["deals", "shopping", "discounts", "online shopping", "best prices", "verified products"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white" style={{ fontFamily: '"Outfit", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
