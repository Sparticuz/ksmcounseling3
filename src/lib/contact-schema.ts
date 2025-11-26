import * as z from "zod";

// Zod schema for contact form validation
// This file is separate from form.ts so it can be imported in both client and server components
export const contactFormSchema = z
  .object({
    email: z.string().optional(),
    message: z.string().min(1, "Message is required"),
    name: z.string().min(1, "Name is required"),
    phone: z.string().optional(),
  })
  .refine((data) => Boolean(data.email) || Boolean(data.phone), {
    message: "Either email or phone is required",
    path: ["email", "phone"],
  });

export type ContactFormData = z.infer<typeof contactFormSchema>;
