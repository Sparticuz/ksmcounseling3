import { Card } from "@/components/ui/card";

export const Parents = () => {
  return (
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
              I offer parent consultation sessions to help you better understand
              your child&apos;s needs and learn strategies to support them at
              home.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
