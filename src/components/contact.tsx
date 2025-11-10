import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  email: z.email().min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional(),
});

export const Contact = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      message: "",
      name: "",
      phone: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    try {
      console.log("Form data:", data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className="px-4 py-20" id="contact">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Ready to take the first step? I&apos;d love to hear from you and
            discuss how play therapy can support your child&apos;s growth and
            well-being.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-persimmon-600" />
                <span className="text-gray-700">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-persimmon-600" />
                <span className="text-gray-700">
                  kristyn@fireflyplaytherapy.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-persimmon-600" />
                <span className="text-gray-700">
                  Safety Harbor, Florida, serving North Pinellas county
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-persimmon-400 p-6">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Send a Message
            </h3>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Name *</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      id={field.name}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      id={field.name}
                      type="email"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="phone"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      id={field.name}
                      placeholder="(555) 123-4567"
                      type="tel"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="message"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Message *</FieldLabel>
                    <Textarea
                      {...field}
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      id={field.name}
                      placeholder="Tell me a bit about what brings you here and how I can help..."
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Button
                className={`
                  w-full bg-persimmon-400 text-white
                  hover:bg-persimmon-500
                `}
                disabled={
                  !form.formState.isDirty ||
                  form.formState.isSubmitting ||
                  form.formState.isSubmitSuccessful
                }
                type="submit"
              >
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {form.formState.isSubmitSuccessful && (
                <div
                  className={`
                    rounded bg-green-50 p-2 text-center text-green-600
                  `}
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {Object.keys(form.formState.errors).length > 0 && (
                <div
                  className={`rounded bg-red-50 p-2 text-center text-red-600`}
                >
                  There was an error sending your message. Please try again or
                  contact me directly.
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
