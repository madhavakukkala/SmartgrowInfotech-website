import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/lib/content";
import { CategoryCards } from "@/components/category-section";
import { SectionHeading } from "@/components/section-heading";
import { CtaStrip } from "@/components/cta-strip";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Nine services across Branding, Technology, Marketing and Training. Pick one to see how we work.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="border-b border-border/60 py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="circuit-eyebrow mb-4">Services</p>
          <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight md:text-[42px] text-brand-blue">
            What we do
          </h1>
          <p className="mt-4 text-[15px] leading-snug tracking-tight text-muted-foreground md:text-lg">
            Nine services, four practice areas. Pick a card to see how the
            engagement works, and book a call when you're ready.
          </p>
        </div>
      </section>

      {serviceCategories.map((cat) => (
        <section key={cat.slug} id={cat.slug} className="scroll-mt-24 py-16">
          <div className="container">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow={cat.tagline}
                title={cat.name}
                lede={cat.description}
                className="mb-0"
              />
              <Link
                href={`/services/${cat.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
              >
                View {cat.name}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <CategoryCards category={cat} />
          </div>
        </section>
      ))}

      <CtaStrip
        title="Not sure which one you need?"
        lede="Tell us the problem on a call and we'll point you to the right service. First consultation is free, 30 minutes."
      />
    </>
  );
}
