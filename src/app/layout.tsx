import type { Metadata } from "next";
import { Manrope, Inter } from 'next/font/google';
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ['300','400','500','600','700']
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['300','400','500','600','700']
});

export const metadata: Metadata = {
  title: "Tempso - Classical music for all",
  description: "Tempso is a classical music wrapper app for Spotify and Apple Music.",
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/webclip.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
