import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    AWS_ACCESS_KEY_ID: z.string().optional(),
    AWS_REGION: z.string().default("us-east-1"),
    AWS_SECRET_ACCESS_KEY: z.string().optional(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    SES_FROM_EMAIL: z.email().min(1),
    SES_TO_EMAIL: z.email().min(1),
    STRIPE_RAK_TOKEN: z.string(),
    STRIPE_WEBHOOK: z.string(),
  },

  runtimeEnv: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_REGION: process.env.AWS_REGION,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    NODE_ENV: process.env.NODE_ENV,
    SES_FROM_EMAIL: process.env.SES_FROM_EMAIL,
    SES_TO_EMAIL: process.env.SES_TO_EMAIL,
    STRIPE_RAK_TOKEN: process.env.STRIPE_RAK_TOKEN,
    STRIPE_WEBHOOK: process.env.STRIPE_WEBHOOK,
  },

  emptyStringAsUndefined: true,
  skipValidation: process.env.NODE_ENV === "test",
});
