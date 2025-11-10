import Image from "next/image";

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
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            About Play Therapy
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Play therapy is a therapeutic approach that uses play to help
            children communicate, explore feelings, and develop problem-solving
            skills.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-persimmon-200 transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-persimmon-700">
                Child-Centered Play Therapy
              </CardTitle>
              <CardDescription>
                <Image
                  alt={"Make Believe"}
                  height={200}
                  src={"/img/steven-libralon-Do1GQljlNk8-unsplash.jpg"}
                  width={300}
                />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A child’s most natural activity is to play. With Child-Centered
                Play Therapy, children express their feelings, learn new skills,
                grow, and heal. In the playroom, your child will build
                confidence, responsibility, self-control, self-acceptance, and
                coping skills. In Child-Centered Play Therapy, I do not direct
                your child’s play, so that your child is free to make choices
                and explore. I build a safe and trusting relationship with your
                child that encourages your child to process tough emotions, try
                new behaviors, and discover their inner strengths all through
                their play.
              </p>
            </CardContent>
          </Card>

          <Card className="border-persimmon-200 transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-persimmon-700">
                Introducing Andrew
              </CardTitle>
              <CardDescription>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  src="https://www.youtube-nocookie.com/embed/reJpo-GaopM"
                  title="YouTube video player"
                ></iframe>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                This video is a fun reminder that kids are not miniature adults.
                They are unique young people with a special way of relating to
                their world. Children are constantly changing, learning, and
                growing. In order to help kids with difficulties, we need to
                meet them at their level, through play.
              </p>
            </CardContent>
          </Card>

          <Card className="border-persimmon-200 transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-persimmon-700">
                The Play Room
              </CardTitle>
              <CardDescription>
                <Image
                  alt="Blocks"
                  height={200}
                  src={"/img/michal-bozek-RcxR1aLw8X0-unsplash.jpg"}
                  width={300}
                />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                The Playroom is intentionally designed to facilitate the
                child&apos;s self direction within the safety of the therapeutic
                relationship. A variety of toys have been selected to promote
                self expression, exploration, learning, and healing.
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="border-persimmon-200 mt-12 transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-persimmon-700">
              For more information on play therapy and Child-Centered Play
              Therapy, please visit the following links
            </CardTitle>
            <CardDescription>
              <p className="text-gray-600">
                Play is a child&apos;s natural language and toys are their
                words. In a safe, accepting relationship, play becomes the
                medium for expressing feelings, trying new behaviors,
                integrating experiences, and building resilience.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-persimmon-700 mb-2 font-semibold">
                Association for Play Therapy
              </h3>
              <p className="text-sm text-gray-600">Logo and link to A4PT</p>
            </div>
            <div>
              <h3 className="text-persimmon-700 mb-2 font-semibold">
                Old Play Therapy Parenting Podcast
              </h3>
              <p className="text-sm text-gray-600">What goes here</p>
            </div>
            <div>
              <h3 className="text-persimmon-700 mb-2 font-semibold">
                UNT's Center for Play Therapy
              </h3>
              <p className="text-sm text-gray-600">Link and Logo for UNT</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
