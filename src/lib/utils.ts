import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge the inputs into a className string
 * @param inputs an array of ClassValue
 * @returns a className string
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
