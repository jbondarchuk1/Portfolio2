import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import AllNavigation from "@/components/Nav/AllNavigation";
import Footer from "@/components/Foot/Footer";
import toast, { Toaster } from 'sonner';
import Link from 'next/link';
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jason Bondarchuk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
          <title>Jason Bondarchuk</title>
          <link rel='icon' href='/favicon.ico'></link>
        </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AllNavigation></AllNavigation>
        {children}
        <Footer></Footer>
        <Toaster />
      </body>
    </html>
  );
}
