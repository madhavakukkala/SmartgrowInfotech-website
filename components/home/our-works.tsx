"use client";

import Scroll01 from "@/components/ui/scroll-01";
import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
} from "@/components/ui/animated-card-diagram";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, clientTestimonials } from "@/lib/content";

// Stable reference so the scroll component doesn't remount on re-renders.
const CASE_STUDIES = [...caseStudies];

export function OurWorks() {
  return (
    <section id="our-works" className="scroll-mt-20 border-t border-border/60 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Our Work"
          title="Selected work"
          lede="Products and platforms we've built and run for our clients."
          blue
        />

        <div className="mx-auto max-w-5xl">
          <Scroll01 items={CASE_STUDIES} />
        </div>
      </div>

      {/* Client testimonials: auto-scrolling right to left, pauses on hover. */}
      <div className="mt-24">
        <h3 className="mb-10 text-center text-2xl font-semibold tracking-tight md:text-3xl">
          What our clients say
        </h3>
        <div className="marquee-mask marquee-pause overflow-hidden">
          <div className="marquee-track-slow flex w-max items-stretch gap-6 px-6">
            {[...clientTestimonials, ...clientTestimonials].map((t, i) => (
              <AnimatedCard
                key={`${t.name}-${i}`}
                className="flex w-[320px] shrink-0 flex-col md:w-[356px]"
              >
                <CardVisual className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt={`${t.name}, ${t.org}`}
                    loading="lazy"
                    className="h-[180px] w-full object-cover object-center grayscale-[35%] transition-all duration-500 ease-out group-hover/animated-card:scale-110 group-hover/animated-card:rotate-1 group-hover/animated-card:grayscale-0"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </CardVisual>
                <CardBody className="flex-1">
                  <CardTitle className="text-base">
                    {t.name} · {t.org}
                  </CardTitle>
                  <CardDescription className="text-[13px] leading-snug tracking-tight">
                    “{t.quote}”
                  </CardDescription>
                </CardBody>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
