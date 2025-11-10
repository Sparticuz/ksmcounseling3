/**
 * Shadcn's Input field
 * @updated 20250924
 */

import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const Input = ({ className, type, ...props }: ComponentProps<"input">) => {
  if (props.value == null) console.log("NULL ON INPUT", props);
  return (
    <input
      className={cn(
        // 20250924 - Added flex back in to prevent not wrapping
        `flex`,
        `
          h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3
          py-1 text-base shadow-xs transition-[color,box-shadow] outline-none
          selection:bg-primary selection:text-primary-foreground
          file:inline-flex file:h-7 file:border-0 file:bg-transparent
          file:text-sm file:font-medium file:text-foreground
          placeholder:text-muted-foreground
          read-only:cursor-default read-only:opacity-50
          focus-visible:border-ring focus-visible:ring-[3px]
          focus-visible:ring-ring/50
          disabled:pointer-events-none disabled:cursor-not-allowed
          disabled:opacity-50
          aria-invalid:border-destructive aria-invalid:ring-destructive/20
          md:text-sm
          dark:bg-input/30 dark:aria-invalid:ring-destructive/40
        `,
        className,
      )}
      data-slot="input"
      type={type}
      {...props}
    />
  );
};

export { Input };
