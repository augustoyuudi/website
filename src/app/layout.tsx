import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Augusto's portfolio",
  description: "Augusto Yuudi Shiraishi portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}, bg-[#F9F9F9]`}>{children}</body>
    </html>
  );
}
