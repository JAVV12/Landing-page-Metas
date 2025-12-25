import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inputs } from "@/content/inputs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: inputs.seoTitle,
  description: inputs.metaDescription,
  keywords: "coaching, liderazgo, mentoring, desarrollo personal, transformación, claridad, propósito",
  authors: [{ name: "Alejandro Valencia" }],
  openGraph: {
    title: inputs.seoTitle,
    description: inputs.metaDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
