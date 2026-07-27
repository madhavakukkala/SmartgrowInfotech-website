import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { OpenRoles } from "@/components/careers/open-roles";
import { CtaStrip } from "@/components/cta-strip";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Career",
  description:
    "We're hiring in Hyderabad: Business Development Executive, Python AI/ML Trainer, and Graphic Designer & Video Editor. Plus paid internships and US contract work.",
};

const paths = [
  {
    title: "Internships (students)",
    points: [
      "Five tracks: Full-Stack, Mobile, Data Engineering, DevOps, AI/ML",
      "Real client projects, daily code reviews, stipend ₹5,000–₹15,000/month",
      "60% of top performers get a full-time offer (₹3.5–6 LPA)",
      "Intake is year-round, flexible start dates",
    ],
    href: "/services/internship-program",
    linkLabel: "See the internship program",
  },
  {
    title: "US contract work (experienced developers)",
    points: [
      "Remote contracts with US companies, in US time zones",
      "Higher earnings than typical Indian-company salaries",
      "Long-term contracts, reliable payments, world-class teams",
      "Top 5% of applicants make it through vetting. Bring your best.",
    ],
    href: "/services/us-it-staffing",
    linkLabel: "See how the talent pool works",
  },
];

export default function CareerPage() {
  return (
    <>
      <section className="border-b border-border/60 py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="circuit-eyebrow mb-4">Career</p>
          <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight md:text-[42px]">
            Work with us
          </h1>
          <p className="mt-4 text-[15px] leading-snug tracking-tight text-muted-foreground md:text-lg">
            Three roles open right now in Hyderabad. Read the details, fill
            the form, attach your resume. That's the whole process.
          </p>
        </div>
      </section>

      {/* Open positions + application form */}
      <section id="openings" className="scroll-mt-24 py-20">
        <div className="container max-w-4xl">
          <SectionHeading
            eyebrow="Open positions"
            title="We're hiring"
            lede="Tap a role to read the full description, then apply below."
            blue
          />
          <OpenRoles />
        </div>
      </section>

      <section className="border-t border-border/60 py-20">
        <div className="container max-w-4xl">
          <SectionHeading
            eyebrow="Other paths"
            title="Not seeing your role?"
            lede="There are two more ways to work with us."
          />
        </div>
        <div className="container grid gap-6 lg:grid-cols-2">
          {paths.map((p) => (
            <div key={p.title} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                {p.title}
              </h2>
              <ul className="mt-4 flex-1 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground md:text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href={p.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
              >
                {p.linkLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <SectionHeading
            eyebrow="How to apply"
            title="One email is enough"
            lede={`Send your resume and a short note on what you want to work on to ${site.email}. For internships, use the subject line "Internship Application – [Your Track] – [Your Name]".`}
          />
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
          >
            {site.email}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <CtaStrip
        title="Questions first?"
        lede="Book a call and ask. We'll tell you honestly whether it's a fit."
      />
    </>
  );
}
