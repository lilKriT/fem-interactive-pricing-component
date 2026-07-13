import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["600", "800"],
});

export const metadata: Metadata = {
  title: "Interactive Pricing Component | created by lilKriT",
  description: "Created in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manropeSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
