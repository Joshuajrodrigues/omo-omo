import type { Metadata } from "next";

import "./globals.css";
import { dmSans } from "@/components/fonts";
import { auth, signOut } from "@/auth";

export const metadata: Metadata = {
  title: "Omo omo",
  description: "A meta platform for indie movies",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {
          !session?.user ? null :

            <form
              action={async () => {
                "use server"
                await signOut()
              }}
            >
              <button type="submit">Sign Out</button>
            </form>
        }
        {children}</body>
    </html>
  );
}
