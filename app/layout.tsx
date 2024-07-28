import type { Metadata } from "next";

import "./globals.css";
import { dmSans } from "@/components/fonts";
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Omo omo",
  description: "A meta platform for indie movies",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar />

        {children}
        <Toaster />
      </body>
    </html>
  );
}
