"use client";

import { ThemeProvider } from "next-themes";

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
