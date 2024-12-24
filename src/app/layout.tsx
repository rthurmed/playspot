import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Providers } from "./providers";
import { Player } from "@/components/Player";

export const metadata: Metadata = {
  title: "PlaySpot",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body className="antialiased">
        <Providers>
          <Navbar />
          {children}
          <Player />
        </Providers>
      </body>
    </html>
  );
}
