import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wingman Assignment",
  description: "Wingman frontend engineer Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 ml-16 bg-white">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
