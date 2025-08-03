import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Analytics } from "@/components/Analytics";
import { StructuredData } from "@/components/StructuredData";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://str-stack-scout.vercel.app'),
  title: {
    default: "STR Stack Scout - The Ultimate Short-Term Rental Technology Directory",
    template: "%s | STR Stack Scout"
  },
  description: "Discover 150+ vetted STR technology tools and services. From PMS to revenue management, find the perfect tech stack for your short-term rental business. Compare features, pricing, and reviews.",
  keywords: [
    // Primary Keywords
    "STR technology directory", "short-term rental tools", "Airbnb management software", "vacation rental technology",
    "STR tech stack", "property management system", "revenue management tools", "channel manager software",
    
    // Long-tail Keywords
    "best Airbnb management tools 2025", "vacation rental software comparison", "STR business automation tools",
    "short-term rental property management", "Airbnb pricing optimization", "vacation rental channel management",
    
    // Geographic Keywords
    "STR tools USA", "vacation rental software Europe", "Airbnb management tools Australia", "global STR technology",
    
    // Industry Keywords
    "hospitality technology", "PropTech", "travel technology", "rental property software", "hospitality automation",
    
    // Specific Categories
    "PMS software", "dynamic pricing tools", "guest communication platform", "cleaning coordination software",
    "smart lock integration", "STR analytics", "vacation rental insurance", "guest screening tools"
  ],
  authors: [{ 
    name: "STR Stack Scout Team",
    url: "https://str-stack-scout.vercel.app"
  }],
  creator: "STR Stack Scout",
  publisher: "STR Stack Scout",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://str-stack-scout.vercel.app",
    title: "STR Stack Scout - The Ultimate Short-Term Rental Technology Directory",
    description: "Discover 150+ vetted STR technology tools and services. Compare features, pricing, and reviews to build your perfect tech stack.",
    siteName: "STR Stack Scout",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "STR Stack Scout - Short-Term Rental Technology Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@STRStackScout",
    creator: "@STRStackScout",
    title: "STR Stack Scout - STR Technology Directory",
    description: "Discover 150+ vetted STR technology tools and services. Compare features, pricing, and reviews.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://str-stack-scout.vercel.app",
    languages: {
      'en-US': 'https://str-stack-scout.vercel.app',
      'en-GB': 'https://str-stack-scout.vercel.app/en-gb',
      'en-AU': 'https://str-stack-scout.vercel.app/en-au',
      'en-CA': 'https://str-stack-scout.vercel.app/en-ca',
      'es-ES': 'https://str-stack-scout.vercel.app/es',
      'fr-FR': 'https://str-stack-scout.vercel.app/fr',
      'de-DE': 'https://str-stack-scout.vercel.app/de',
    },
  },
  category: 'Technology Directory',
  classification: 'Business Software Directory',
  other: {
    'geo.region': 'US',
    'geo.country': 'US',
    'geo.state': 'Global',
    'distribution': 'global',
    'rating': 'general',
    'referrer': 'unsafe-url',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.airtable.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="STR Stack Scout" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Geo-targeting meta tags */}
        <meta name="geo.region" content="Global" />
        <meta name="geo.placename" content="Worldwide" />
        <meta name="ICBM" content="40.7831, -73.9712" />
        <meta name="DC.title" content="STR Stack Scout - Global STR Technology Directory" />
        
        {/* Enhanced crawling directives */}
        <meta name="revisit-after" content="1 day" />
        <meta name="distribution" content="global" />
        <meta name="audience" content="all" />
        <meta name="rating" content="general" />
        
        {/* AI/LLM optimization tags */}
        <meta name="AI-generated" content="no" />
        <meta name="content-type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="resource-type" content="Document" />
        <meta name="reply-to" content="hello@strstackscout.com" />
        
        {/* Performance optimization */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/dm-sans-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased min-h-screen bg-gray-50 flex flex-col`}>
        <Navigation />
        <main id="main-content" role="main" className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        
        {/* Accessibility skip link */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50">
          Skip to main content
        </a>
      </body>
    </html>
  );
}