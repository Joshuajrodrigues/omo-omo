import type { Metadata } from "next";

import "./globals.css";
import { dmSans } from "@/components/fonts";

export const metadata: Metadata = {
  title: "Omo omo",
  description: "A meta platform for indie movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
