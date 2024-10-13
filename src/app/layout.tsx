import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Link from "next/link"

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
  title: "Legendary Turtle Cafe",
  description: "Turtles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <Link href="/">Main Page</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
