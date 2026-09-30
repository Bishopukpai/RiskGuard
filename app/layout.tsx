import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RiskGuard | Enterprise Fraud Detection & Risk Engine",
  description: "Enterprise-grade fraud detection, multi-tenant risk engines, and real-time transaction scoring API.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://riskguard.netlify.app'),
  openGraph: {
    title: "RiskGuard | Enterprise Fraud Detection",
    description: "Real-time transaction scoring and multi-tenant risk engines.",
    url: 'https://riskguard.netlify.app',
    siteName: 'RiskGuard',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'RiskGuard',
    operatingSystem: 'All',
    applicationCategory: 'BusinessApplication',
    description: 'Enterprise-grade fraud detection and real-time transaction scoring API.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '49',
      highPrice: '499',
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}