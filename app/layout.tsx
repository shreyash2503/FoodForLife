import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Is Life",
  description: "Share your favorite recipes with the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-0 flex flex-col justify-center`}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
