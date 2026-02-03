import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a safe, modern default
import "./globals.css";
import Navbar from "../components/Navbar";

// Load Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "V-Market Ciudad Venecia",
  description: "Tu mercado vecino en Tegucigalpa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} antialiased bg-[var(--vm-green-950)] text-[var(--vm-text-100)]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
