import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Preahvihear } from 'next/font/google';
import Navbar from "@/components/tinder-ui/Navbar"
// import Footer from "@/components/tinder-ui/Footer"
import Footer from "@/components/ui/Footer"

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: '400', // required
  display: 'swap',
});


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Find your dev match!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={preahvihear.className}
      ><Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
