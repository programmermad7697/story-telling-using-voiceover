import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eldrin's Epic Journey",
  description: "Follow the epic journey of Eldrin and Fenrir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 text-gray-800 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
