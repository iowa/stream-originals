import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppHeader from "@/ui/layout/AppHeader";
import AppFooter from "@/ui/layout/AppFooter";
import { AppConstants } from "@/lib/AppConstants";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: AppConstants.APP_NAME,
  description: "Originals Unite Here.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cmyk">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <div>
      <AppHeader/>
      <main className="mx-auto w-[800px]">
        {children}
      </main>
      <AppFooter/>
    </div>
    </body>
    </html>
  );
}
