"use client";

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

/**
 * Your app's theme provider component.
 * 'use client' is essential for next-themes to work with app-dir.
 */
export const ThemeProvider = ({
  children,
  ...props
}: Readonly<ThemeProviderProps>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
