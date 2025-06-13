import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  description: "A Play Therapy Center in Safety Harbor, Florida",
  title: "Firefly Play Therapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
