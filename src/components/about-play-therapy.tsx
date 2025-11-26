import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const AboutPlayTherapy = () => {
  return (
    <section className="px-4 py-20" id="play-therapy">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={`mb-6 text-3xl font-bold text-gray-900 md:text-4xl`}>
            About Play Therapy
          </h2>
          <p className={`mx-auto max-w-3xl text-xl text-gray-600`}>
            Play therapy is a therapeutic approach that uses play to help
            children communicate, explore feelings, and develop problem-solving
            skills.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card
            className={`border-persimmon-200 transition-shadow hover:shadow-lg`}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-persimmon-700">
                Child-Centered Play Therapy
              </CardTitle>
            </CardHeader>
            <CardDescription className="flex justify-center px-6">
              <Image
                alt={"Make Believe"}
                className="rounded-lg object-cover"
                height={250}
                src={"/img/steven-libralon-Do1GQljlNk8-unsplash.jpg"}
                width={350}
              />
            </CardDescription>
            <CardContent>
              <p className="text-sm leading-relaxed text-gray-500">
                A child&apos;s most natural activity is to play. With
                Child-Centered Play Therapy, children express their feelings,
                learn new skills, grow, and heal. In the playroom, your child
                will build confidence, responsibility, self-control,
                self-acceptance, and coping skills. In Child-Centered Play
                Therapy, I do not direct your child&apos;s play, so that your
                child is free to make choices and explore. I build a safe and
                trusting relationship with your child that encourages your child
                to process tough emotions, try new behaviors, and discover their
                inner strengths all through their play.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`border-persimmon-200 transition-shadow hover:shadow-lg`}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-persimmon-700">
                Introducing Andrew
              </CardTitle>
            </CardHeader>
            <CardDescription className="flex justify-center px-6">
              <div className="aspect-video w-full max-w-[350px]">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full rounded-lg"
                  src="https://www.youtube-nocookie.com/embed/reJpo-GaopM"
                  title="YouTube video player"
                ></iframe>
              </div>
            </CardDescription>
            <CardContent>
              <p className="text-sm leading-relaxed text-gray-500">
                This video is a fun reminder that kids are not miniature adults.
                They are unique young people with a special way of relating to
                their world. Children are constantly changing, learning, and
                growing. In order to help kids with difficulties, we need to
                meet them at their level, through play.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`border-persimmon-200 transition-shadow hover:shadow-lg`}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-persimmon-700">
                The Play Room
              </CardTitle>
            </CardHeader>
            <CardDescription className="flex justify-center px-6">
              <Image
                alt="Blocks"
                className="rounded-lg object-cover"
                height={250}
                src={"/img/michal-bozek-RcxR1aLw8X0-unsplash.jpg"}
                width={350}
              />
            </CardDescription>
            <CardContent>
              <p className="text-sm leading-relaxed text-gray-500">
                The Playroom is intentionally designed to facilitate the
                child&apos;s self direction within the safety of the therapeutic
                relationship. A variety of toys have been selected to promote
                self expression, exploration, learning, and healing.
              </p>
            </CardContent>
          </Card>
        </div>
        <Card
          className={`
            mt-12 border-persimmon-200 transition-shadow
            hover:shadow-lg
          `}
        >
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-persimmon-700">
              Play Therapy Resources
            </CardTitle>
            <CardDescription className="mt-3">
              <p className="text-sm text-gray-500">
                For more information on play therapy and Child-Centered Play
                Therapy, please visit the following links
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <Link
              className="flex flex-col items-center text-center"
              href="https://www.a4pt.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt={"Association for Play Therapy"}
                height={90}
                src={
                  "/img/logos/25626095_10155854180361420_6226599683189044503_o.png"
                }
                width={160}
              />
              <h3 className="mb-2 font-semibold text-persimmon-700">
                Association for Play Therapy
              </h3>
            </Link>
            <Link
              className="flex flex-col items-center text-center"
              href="https://cpt.unt.edu/what-is-play-therapy"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt={"University of North Texas' Center for Play Therapy"}
                height={90}
                src={"/img/logos/unt.svg"}
                width={160}
              />
              <h3 className="mb-2 font-semibold text-persimmon-700">
                UNT&apos;s Center for Play Therapy
              </h3>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
