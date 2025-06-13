/* eslint-disable @next/next/no-img-element */
"use client";

import { Mail, MapPin, Menu, Phone, Star } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react"; // Added useEffect

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "error" | "idle" | "submitting" | "success"
  >("idle");
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll tracking

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      message: formData.get("message"),
      name: formData.get("name"),
      phone: formData.get("phone"),
    };

    try {
      // For static sites, you can integrate with services like Formspree, Netlify Forms, or EmailJS
      // Example with Formspree (replace with your endpoint):
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // })

      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form data:", data);
      setFormStatus("success");

      // Reset form after successful submission
      (event.target as HTMLFormElement).reset();

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Set to true if scrolled more than 10px, false otherwise
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    // Call on mount to set initial state correctly if page loads scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-orange-50 text-white">
      {/* Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 ease-in-out",
          // Ensure sticky top-0 is always applied
          isScrolled
            ? "bg-persimmon-400 supports-[backdrop-filter]:bg-persimmon-400/60 h-24 border-b backdrop-blur" // Pinned state: with background, blur, and border
            : "h-48 border-b border-transparent bg-transparent", // Floating state: transparent background and border
        )}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <img
              alt="Firefly Play Therapy Logo"
              className="h-full w-[200px]"
              src={
                "/img/logos/logo_clear_bg.svg"
                /*
                isScrolled
                  ? "/img/logos/firefly.print.color.svg"
                  : "/img/logos/logo_clear_bg.svg"
                  */
              }
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <button
              className="font-inter hover:text-persimmon-600 uppercase transition-colors"
              onClick={() => {
                scrollToSection("about");
              }}
            >
              About Me
            </button>
            <button
              className="font-inter hover:text-persimmon-600 uppercase transition-colors"
              onClick={() => {
                scrollToSection("play-therapy");
              }}
            >
              Play Therapy
            </button>
            <button
              className="font-inter hover:text-persimmon-600 uppercase transition-colors"
              onClick={() => {
                scrollToSection("parent-corner");
              }}
            >
              Parent Corner
            </button>
            <button
              className="font-inter hover:text-persimmon-600 uppercase transition-colors"
              onClick={() => {
                scrollToSection("contact");
              }}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet onOpenChange={setIsMenuOpen} open={isMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px]" side="right">
              <div className="mt-8 flex flex-col space-y-4">
                <button
                  className="hover:text-persimmon-600 text-left text-lg text-gray-700 transition-colors"
                  onClick={() => {
                    scrollToSection("about");
                  }}
                >
                  About Me
                </button>
                <button
                  className="hover:text-persimmon-600 text-left text-lg text-gray-700 transition-colors"
                  onClick={() => {
                    scrollToSection("play-therapy");
                  }}
                >
                  Play Therapy
                </button>
                <button
                  className="hover:text-persimmon-600 text-left text-lg text-gray-700 transition-colors"
                  onClick={() => {
                    scrollToSection("parent-corner");
                  }}
                >
                  Parent Corner
                </button>
                <button
                  className="hover:text-persimmon-600 text-left text-lg text-gray-700 transition-colors"
                  onClick={() => {
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      {/* Add negative top margin to pull its background up into the main tag's padding area */}
      <main className="-mt-48">
        {/* Hero Section */}

        <section className="bg-[url(/img/guilherme-stecanella-smCn7Cbhk_c-unsplash.jpg)] bg-cover bg-center bg-no-repeat py-64">
          <div className="container mx-auto text-center">
            <blockquote className="mb-6 font-serif text-4xl font-bold italic text-shadow-black text-shadow-sm">
              “Toys are a child’s words and play is their language”
            </blockquote>
            <p className="mx-auto mb-8 max-w-2xl font-serif text-xl italic text-shadow-black text-shadow-sm">
              Dr. Garry Landreth
            </p>
            <Button
              className="bg-persimmon-400 hover:bg-persimmon-500 px-8 py-3 text-lg text-white"
              onClick={() => {
                scrollToSection("contact");
              }}
              size="lg"
            >
              Schedule a Free Consultation
            </Button>
          </div>
        </section>

        {/* About Me Section */}
        <section className="bg-white px-4 py-20" id="about">
          <div className="container mx-auto">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                  About Me
                </h2>
                <p className="mb-4 text-gray-600">
                  Hello! I&apos;m Sarah Johnson, a licensed play therapist with
                  over 8 years of experience working with children and families.
                  I believe that play is a child&apos;s natural language, and
                  through play therapy, children can heal, grow, and thrive.
                </p>
                <p className="mb-6 text-gray-600">
                  I hold a Master&apos;s degree in Counseling Psychology and am
                  a Registered Play Therapist through the Association for Play
                  Therapy. My approach is warm, child-centered, and tailored to
                  each child&apos;s unique needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Star className="text-persimmon-500 h-5 w-5" />
                    <span className="text-gray-700">
                      Licensed Professional Counselor
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="text-persimmon-500 h-5 w-5" />
                    <span className="text-gray-700">
                      Registered Play Therapist (RPT)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="text-persimmon-500 h-5 w-5" />
                    <span className="text-gray-700">8+ Years Experience</span>
                  </div>
                </div>
              </div>
              <div className="from-persimmon-100 to-persimmon-200 rounded-lg bg-gradient-to-br p-8 text-center">
                <img
                  alt="Krisytn McNally"
                  className="mx-auto mb-4 h-48 w-48 rounded-full object-cover"
                  src="/img/team/McNally-Resized.jpg"
                />
                <p className="text-gray-600 italic">
                  &quot;Every child deserves to be heard, understood, and
                  supported on their journey.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Play Therapy Section */}
        <section className="px-4 py-20" id="play-therapy">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Play Therapy Services
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Play therapy is a therapeutic approach that uses play to help
                children communicate, explore feelings, and develop
                problem-solving skills.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-persimmon-200 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-persimmon-700">
                    Individual Play Therapy
                  </CardTitle>
                  <CardDescription>
                    One-on-one sessions tailored to your child&apos;s specific
                    needs and goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Anxiety and depression</li>
                    <li>• Behavioral challenges</li>
                    <li>• Trauma processing</li>
                    <li>• Social skills development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-persimmon-200 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-persimmon-700">
                    Family Play Therapy
                  </CardTitle>
                  <CardDescription>
                    Strengthening family bonds and improving communication
                    through play.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Parent-child relationships</li>
                    <li>• Family communication</li>
                    <li>• Sibling conflicts</li>
                    <li>• Attachment building</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-persimmon-200 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-persimmon-700">
                    Group Play Therapy
                  </CardTitle>
                  <CardDescription>
                    Small group sessions focusing on social skills and peer
                    relationships.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Social skills training</li>
                    <li>• Peer interaction</li>
                    <li>• Emotional regulation</li>
                    <li>• Confidence building</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Parent Corner Section */}
        <section className="bg-white px-4 py-20" id="parent-corner">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Parent Corner
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Resources and support for parents navigating their child&apos;s
                emotional and behavioral needs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  When to Consider Play Therapy
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Persistent behavioral changes</li>
                  <li>• Difficulty expressing emotions</li>
                  <li>• Sleep or eating disruptions</li>
                  <li>• School-related challenges</li>
                  <li>• Major life transitions</li>
                  <li>• Trauma or loss experiences</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Supporting Your Child at Home
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Create consistent routines</li>
                  <li>• Practice active listening</li>
                  <li>• Validate their feelings</li>
                  <li>• Encourage creative expression</li>
                  <li>• Set clear, loving boundaries</li>
                  <li>• Model healthy coping skills</li>
                </ul>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-rose-50 to-orange-50 p-8">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  Parent Consultation Available
                </h3>
                <p className="mb-6 text-gray-600">
                  I offer parent consultation sessions to help you better
                  understand your child&apos;s needs and learn strategies to
                  support them at home.
                </p>
                <Button
                  className="bg-persimmon-400 hover:bg-persimmon-500"
                  onClick={() => {
                    scrollToSection("contact");
                  }}
                >
                  Learn More
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-20" id="contact">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-600">
                Ready to take the first step? I&apos;d love to hear from you and
                discuss how play therapy can support your child&apos;s growth
                and well-being.
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
                    <Phone className="text-persimmon-600 h-5 w-5" />
                    <span className="text-gray-700">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-persimmon-600 h-5 w-5" />
                    <span className="text-gray-700">
                      sarah@littlehearts-therapy.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-persimmon-600 h-5 w-5" />
                    <span className="text-gray-700">
                      123 Therapy Lane, Wellness City, WC 12345
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-semibold text-gray-900">
                    Office Hours
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Thursday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday:</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="p-6">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                  Send a Message
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      className="mt-1"
                      disabled={formStatus === "submitting"}
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      className="mt-1"
                      disabled={formStatus === "submitting"}
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      type="email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      className="mt-1"
                      disabled={formStatus === "submitting"}
                      id="phone"
                      name="phone"
                      placeholder="(555) 123-4567"
                      type="tel"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      className="mt-1 min-h-[120px]"
                      disabled={formStatus === "submitting"}
                      id="message"
                      name="message"
                      placeholder="Tell me a bit about what brings you here and how I can help..."
                      required
                    />
                  </div>
                  <Button
                    className="bg-persimmon-400 hover:bg-persimmon-500 w-full text-white"
                    disabled={formStatus === "submitting"}
                    type="submit"
                  >
                    {formStatus === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </Button>

                  {formStatus === "success" && (
                    <div className="rounded bg-green-50 p-2 text-center text-green-600">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="rounded bg-red-50 p-2 text-center text-red-600">
                      There was an error sending your message. Please try again
                      or contact me directly.
                    </div>
                  )}
                </form>
                <p className="mt-4 text-sm text-gray-500">
                  * Required fields. I&apos;ll respond within 24 hours during
                  business days.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-persimmon-900 px-4 py-8 text-white">
          <div className="container mx-auto text-center">
            <div className="mb-4 flex items-center justify-center space-x-2">
              <img
                alt="Firefly Play Therapy"
                className="h-6 w-6"
                src="/apple-touch-icon.png"
              />
              <span className="text-lg font-semibold">
                Firefly Play Therapy
              </span>
            </div>
            <p className="mb-2 text-gray-400">
              Licensed Play Therapy Services • Nurturing Growth Through Play
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Little Hearts Therapy. All rights reserved.
            </p>
          </div>
        </footer>
      </main>{" "}
      {/* Close the main tag */}
    </div>
  );
}
