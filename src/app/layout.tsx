import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grady's Public House | A Proper Public House in Seekonk",
  description:
    "Grady's Public House brings the tradition of the Irish neighborhood pub to Seekonk, MA. Great food, strong whiskey, and a table for everyone.",
  keywords: [
    "Irish pub",
    "Seekonk restaurant",
    "whiskey bar",
    "public house",
    "Grady's",
    "Taunton Ave",
  ],
  openGraph: {
    title: "Grady's Public House",
    description: "A Proper Public House in Seekonk",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans`}
      >
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
