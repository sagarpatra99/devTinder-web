import type { Metadata } from "next";
import "./globals.css";
import { Preahvihear } from 'next/font/google';
import Navbar from "@/components/tinder-ui/Navbar";

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

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
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
