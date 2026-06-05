import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:["latin"]})

export const metadata: Metadata = {
  title: {
    template:"%s - AI Resume Builder",
    absolute:"AI Resume Builder"
  },
  description: "AI Resume Builder is the easiest way to create a professional cv for jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.className}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
