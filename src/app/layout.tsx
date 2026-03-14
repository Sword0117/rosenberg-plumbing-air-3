import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import React from "react";
import config from "@/template.config";
import TemplateShell from "@/template/components/TemplateShell";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: config.business.name,
  description: config.business.tagline || config.business.name,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TemplateShell config={config} basePath="" fontClasses={`${poppins.variable} ${openSans.variable}`}>
          {children}
        </TemplateShell>
      </body>
    </html>
  );
}
