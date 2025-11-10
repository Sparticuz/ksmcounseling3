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
            Play Therapy Services
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
                Individual Play Therapy
              </CardTitle>
              <CardDescription>
                One-on-one sessions tailored to your child&apos;s specific needs
                and goals.
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
                Strengthening family bonds and improving communication through
                play.
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
  );
};
