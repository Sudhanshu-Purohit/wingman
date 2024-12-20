import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/navbar/navbar";
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Navbar />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
