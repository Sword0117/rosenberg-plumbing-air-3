"use client";
import React from "react";
import { TemplateConfig } from "@/template/types";
import { ConfigProvider } from "@/template/ConfigProvider";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface TemplateShellProps {
  config: TemplateConfig;
  fontClasses: string;
  basePath?: string;
  children: React.ReactNode;
}

export default function TemplateShell({ config, fontClasses, basePath = "/template", children }: TemplateShellProps) {
  const { palette } = config;

  const cssVars = {
    "--color-primary": palette.primary,
    "--color-secondary": palette.secondary,
    "--color-accent": palette.accent,
    "--color-text": palette.text,
    "--color-background": palette.background,
    "--trust-color": "#1E40AF",
    "--security-green": "#059669",
    "--badge-gold": "#F59E0B",
    "--shadow-sm": "0 1px 2px rgba(0,0,0,0.05)",
    "--shadow-md": "0 4px 6px rgba(0,0,0,0.1)",
    "--shadow-lg": "0 10px 15px rgba(0,0,0,0.1)",
    "--shadow-xl": "0 20px 25px rgba(0,0,0,0.15)",
    "--space-xs": "0.5rem",
    "--space-sm": "1rem",
    "--space-md": "1.5rem",
    "--space-lg": "2.5rem",
    "--space-xl": "5rem",
    "--radius-sm": "6px",
    "--radius-md": "12px",
    "--radius-lg": "20px",
  } as React.CSSProperties;

  return (
    <ConfigProvider config={config} basePath={basePath}>
      <div style={cssVars} className={fontClasses}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
