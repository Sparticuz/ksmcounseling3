"use server";

import { SendEmailCommand, SESv2Client } from "@aws-sdk/client-sesv2";

import { contactFormSchema, type ContactFormData } from "./contact-schema";
import { env } from "./env";

const client = new SESv2Client({});

/**
 * Send contact form email using AWS SES v2
 * Server action for form submission
 */
export const sendContactEmail = async (
  data: ContactFormData,
): Promise<{ error?: string; success: boolean }> => {
  // Validate the data
  const validatedData = contactFormSchema.safeParse(data);

  if (!validatedData.success) {
    console.error("Validation failed:", validatedData.error);
    return { error: "Invalid form data", success: false };
  }

  // Type guard to ensure we have valid email addresses
  if (!env.SES_FROM_EMAIL || !env.SES_TO_EMAIL) {
    throw new Error("Email configuration is missing");
  }

  // Create email HTML content
  const htmlBody = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; }
          .content { margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${validatedData.data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${validatedData.data.email ?? ""}</div>
            </div>
            ${
              validatedData.data.phone
                ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${validatedData.data.phone}</div>
            </div>
            `
                : ""
            }
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${validatedData.data.message.replaceAll("\n", "<br>")}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  // Create plain text version
  const textBody = `
New Contact Form Submission

Name: ${validatedData.data.name}
Email: ${validatedData.data.email ?? ""}
${validatedData.data.phone ? `Phone: ${validatedData.data.phone}\n` : ""}
Message:
${validatedData.data.message}
  `.trim();

  // Create the email command
  const command = new SendEmailCommand({
    Content: {
      Simple: {
        Body: {
          Html: {
            Charset: "utf8",
            Data: htmlBody,
          },
          Text: {
            Charset: "utf8",
            Data: textBody,
          },
        },
        Subject: {
          Charset: "utf8",
          Data: `Contact Form: ${validatedData.data.name}`,
        },
      },
    },
    Destination: {
      ToAddresses: [env.SES_TO_EMAIL],
    },
    FromEmailAddress: env.SES_FROM_EMAIL,
    ReplyToAddresses: [validatedData.data.email ?? env.SES_FROM_EMAIL],
  });

  // Send the email
  try {
    await client.send(command);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send email", success: false };
  }
};
