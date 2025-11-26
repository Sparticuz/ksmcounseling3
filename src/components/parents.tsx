import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Parents = () => {
  return (
    <section className="bg-white px-4 py-20 dark:bg-card" id="parent-corner">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2
            className={`
              mb-6 text-3xl font-bold text-gray-900
              md:text-4xl
              dark:text-foreground
            `}
          >
            Parent Corner
          </h2>
          <p
            className={`
              mx-auto max-w-3xl text-xl text-gray-600
              dark:text-muted-foreground
            `}
          >
            Resources and support for parents navigating their child&apos;s
            emotional and behavioral needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Parents as Partners</CardTitle>
            </CardHeader>
            <CardContent>
              Parents and caregivers have a special relationship in a
              child&apos;s life. Your role is so important! You are taking a
              great step by providing your child with play therapy, and I want
              to join with you in your child&apos;s journey to help them thrive.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              You are the first person I will meet as we start this journey!
              During the Free Parent Consultation, I want to give you my
              undivided attention and help you to feel free to discuss anything
              that you find relevant without your child present. I will further
              explain my approach to play therapy and answer all of your
              questions. Once you are ready to move forward, we will schedule
              your child’s first session.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Child&apos;s Time</CardTitle>
            </CardHeader>
            <CardContent>
              You can tell your child they are coming for a special play time
              just for them! When your child comes for a session, I will give
              them my complete and undivided attention, so if you have anything
              important to tell me, please feel free to email me or make a note
              of it to discuss at our next Parent Consult.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Ongoing Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              You and I will meet regularly, about every 5 weeks, to discuss
              your child’s progress and any questions or concerns you may have.
              I will support you every step of the way in this process to help
              you feel capable and equipped to meet your child’s needs.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cost</CardTitle>
            </CardHeader>
            <CardContent>
              We will discuss fees during our Free initial Parent Consultation.
              All fees are Self Pay and due at the time of service. However, you
              may qualify for out-of-network reimbursement through your
              insurance afterward. Call your insurance to confirm, and I can
              provide you with the paperwork needed to submit this request.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Success Starts at Home</CardTitle>
            </CardHeader>
            <CardContent>
              You are doing a great job already. You recognize that your child
              is having difficulty and you care enough to find some help so that
              your child can overcome this with you. The link below provides
              additional resources for parents addressing specific issues your
              child may be facing:{" "}
              <a
                className="text-primary underline hover:text-primary/80"
                href="https://www.a4pt.org/page/ParentsCornerHomePag"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.a4pt.org/page/ParentsCornerHomePag
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card
            className={`
              bg-linear-to-r from-rose-50 to-orange-50
              dark:from-persimmon-900 dark:to-persimmon-800
            `}
          >
            <CardHeader>
              <CardTitle>Parent Consultation Available</CardTitle>
              <CardDescription>
                I offer parent consultation sessions to help you better
                understand your child&apos;s needs and learn strategies to
                support them at home.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
