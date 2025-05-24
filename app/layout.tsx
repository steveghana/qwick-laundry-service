import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Qwik Laundry & Cleaning Services | Nkawkaw, Ghana",
  description:
    "Professional laundry services in Nkawkaw, Ghana. Fast, clean, and reliable laundry solutions with same-day service.",
  keywords:
    "laundry service, cleaning, Nkawkaw, Ghana, wash and fold, dry cleaning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
