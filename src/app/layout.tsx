import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "STR Stack Scout - Curated Directory of Short-Term Rental Tools",
  description: "Discover the best technology tools for your short-term rental business. Compare PMS, revenue management, channel managers, and more STR tools.",
  keywords: ["STR", "short-term rental", "Airbnb", "VRBO", "property management", "PMS", "revenue management", "tools", "directory"],
  authors: [{ name: "STR Stack Scout" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "STR Stack Scout - STR Technology Tools Directory",
    description: "Discover the best technology tools for your short-term rental business",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "STR Stack Scout - STR Technology Tools Directory",
    description: "Discover the best technology tools for your short-term rental business",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}