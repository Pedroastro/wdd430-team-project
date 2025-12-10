import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: {
    default: "Artisan Marketplace",
    template: "%s | Artisan Marketplace",
  },
  description: "A digital marketplace for handmade crafts. This project is part of an assignment for BYU Idaho's WDD430 class.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body>
        <Nav user={session?.user} />
        {children}
      </body>
    </html>
  );
}
