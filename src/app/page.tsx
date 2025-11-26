/* eslint-disable @next/next/no-img-element */
"use client";

import { Menu } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { AboutMe } from "@/components/about-me";
import { AboutPlayTherapy } from "@/components/about-play-therapy";
import { Contact } from "@/components/contact";
import { Parents } from "@/components/parents";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", label: "About Me" },
  { id: "play-therapy", label: "Play Therapy" },
  { id: "parent-corner", label: "Parent Corner" },
  { id: "contact", label: "Contact" },
] as const;

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        globalThis.requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 50;
          setIsScrolled(shouldBeScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        min-h-screen bg-linear-to-b from-rose-50 to-orange-50 text-white
      `}
    >
      {/* Navigation */}
      <header
        className={cn(
          `
            fixed top-0 right-0 left-0 z-50 transition-all duration-300
            ease-in-out
          `,
          isScrolled
            ? `
              h-24 bg-persimmon-400 backdrop-blur
              supports-backdrop-filter:bg-persimmon-400/60
            ` // Pinned state: with background, blur
            : "h-48 border-transparent bg-transparent", // Floating state: transparent background
        )}
      >
        <div
          className={`
            container mx-auto flex h-full items-center justify-between px-4
          `}
        >
          <div className="flex items-center space-x-2">
            <img
              alt="Firefly Play Therapy Logo"
              className="h-full w-[200px]"
              src="/img/logos/logo_clear_bg.svg"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                className={`
                  font-inter uppercase transition-colors
                  hover:text-persimmon-200
                `}
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                }}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet onOpenChange={setIsMenuOpen} open={isMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button aria-label="Open menu" size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <SheetContent
              className={`
                w-[85vw] max-w-sm bg-linear-to-br from-persimmon-50 to-orange-50
              `}
              side="right"
            >
              <div className="flex h-full flex-col">
                {/* Logo/Header */}
                <div className="mt-8 mb-8 border-b border-persimmon-200 pb-6">
                  <div
                    className={`
                      mx-auto w-fit rounded-lg bg-persimmon-400 px-4 py-3
                      shadow-md
                    `}
                  >
                    <img
                      alt="Firefly Play Therapy Logo"
                      className="h-16 w-auto"
                      src="/img/logos/logo_clear_bg.svg"
                    />
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-2">
                  {NAV_ITEMS.map((item) => (
                    <button
                      className={`
                        group rounded-lg px-6 py-4 text-left text-xl
                        font-semibold text-gray-800 transition-all
                        hover:bg-persimmon-100 hover:pl-8
                        hover:text-persimmon-700
                      `}
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                      }}
                      type="button"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Footer CTA */}
                <div
                  className={`
                    mt-auto border-t border-persimmon-200 px-6 pt-8 pb-8
                  `}
                >
                  <Button
                    className={`
                      w-full bg-persimmon-400 py-6 text-lg font-semibold
                      text-white shadow-lg
                      hover:bg-persimmon-500
                    `}
                    onClick={() => {
                      scrollToSection("contact");
                    }}
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main>
        {/* Hero Section - negative margin pulls it up behind the fixed header */}

        {/* Hero background: switched from Tailwind arbitrary value to inline style to avoid duplicate relative path generation (./img/...) causing build error */}
        <section
          className="bg-cover bg-center bg-no-repeat py-64 pt-80"
          style={{
            backgroundImage:
              "url(/img/guilherme-stecanella-smCn7Cbhk_c-unsplash.jpg)",
          }}
        >
          <div className="container mx-auto text-center">
            <blockquote
              className={`
                mb-6 font-serif text-4xl font-bold italic text-shadow-black
                text-shadow-sm
              `}
            >
              “Toys are a child&apos;s words and play is their language”
            </blockquote>
            <p
              className={`
                mx-auto mb-8 max-w-2xl font-serif text-xl italic
                text-shadow-black text-shadow-sm
              `}
            >
              Dr. Garry Landreth
            </p>
            <Button
              className={`
                bg-persimmon-400 px-8 py-3 text-lg text-white
                hover:bg-persimmon-500
              `}
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
        <AboutMe />

        {/* Play Therapy Section */}
        <AboutPlayTherapy />

        {/* Parent Corner Section */}
        <Parents />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <footer className="bg-persimmon-600 px-4 py-8 text-white">
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
            <p className="mb-2 text-white/90">
              Licensed Play Therapy Services • Nurturing Growth Through Play
            </p>
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Firefly Play Therapy. All rights
              reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
