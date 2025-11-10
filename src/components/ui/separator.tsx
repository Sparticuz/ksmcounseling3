/**
 * Shadcn's Separator
 * @updated 20250514
 */

"use client";

import type { ComponentProps } from "react";

import { Separator as SeparatorPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const Separator = ({
  className,
  decorative = true,
  orientation = "horizontal",
  ...props
}: ComponentProps<typeof SeparatorPrimitive.Root>) => (
  <SeparatorPrimitive.Root
    className={cn(
      `
        shrink-0 bg-border
        data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full
        data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px
      `,
      className,
    )}
    data-slot="separator-root"
    decorative={decorative}
    orientation={orientation}
    {...props}
  />
);

export { Separator };
