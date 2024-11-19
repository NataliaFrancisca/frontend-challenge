import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google'

import "./globals.css";

const worksans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});
 
export const metadata: Metadata = {
  title: "Marvel Search Heroes",
  description: "Search Heroes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={worksans.className}>
        {children}
      </body>
    </html>
  );
}
