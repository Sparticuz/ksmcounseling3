import { Star } from "lucide-react";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <section className="bg-white px-4 py-20" id="about">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className={`mb-6 text-3xl font-bold text-gray-900 md:text-4xl`}>
              About Me
            </h2>
            <p className="mb-4 text-gray-600">
              Hi, I&apos;m Kristyn McNally. I&apos;m dedicated to helping your
              child thrive through play therapy. We all face challenges in life.
              I&apos;m here to help your child overcome those challenges and
              achieve their goals.
            </p>
            <p className="mb-6 text-gray-600">
              I hold a Master&apos;s degree in Marriage and Family Therapy and
              am a Registered Play Therapist through the Association for Play
              Therapy. My approach is warm, child-centered, and tailored to each
              child&apos;s unique needs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-persimmon-500" />
                <span className="text-gray-700">
                  Licensed Mental Health Counselor (LMHC)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-persimmon-500" />
                <span className="text-gray-700">
                  Licensed Marriage and Family Therapist (LMFT)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-persimmon-500" />
                <span className="text-gray-700">
                  Registered Play Therapist (RPT&trade;)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-persimmon-500" />
                <span className="text-gray-700">
                  Certified Child-Centered Play Therapist
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-persimmon-500" />
                <span className="text-gray-700">10+ Years Experience</span>
              </div>
            </div>
          </div>
          <div
            className={`
              rounded-lg bg-linear-to-br from-persimmon-100 to-persimmon-200 p-8
              text-center
            `}
          >
            <Image
              alt="Krisytn McNally"
              className="mx-auto mb-4 h-48 w-48 rounded-full object-cover"
              height={256}
              src="/img/team/McNally-Resized.jpg"
              width={256}
            />
            <p className="text-gray-600 italic">
              &quot;Every child deserves to be heard, understood, and supported
              on their journey.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
