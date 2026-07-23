import type { Metadata } from "next";
import { company, heroStats, faqs } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { CtaStrip } from "@/components/cta-strip";
import ScrollFAQAccordion from "@/components/ui/scroll-faq-accordion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: company.purpose,
};

const FAQ_DATA = [...faqs];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border/60 py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="circuit-eyebrow mb-4">About Us</p>
          <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight md:text-[42px]">
            Built to close the gap between learning and industry
          </h1>
          <p className="mt-4 text-[15px] leading-snug tracking-tight text-muted-foreground md:text-lg">
            {company.purpose}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          {company.overview.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="mb-5 text-[15px] leading-relaxed tracking-tight text-muted-foreground md:text-lg"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <dl className="grid grid-cols-2 gap-8 rounded-2xl border border-border bg-card p-8 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dd className="font-mono text-2xl font-semibold text-brand-blue md:text-3xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border/60 py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Vision" title="Where we're headed" />
            <p className="text-[15px] leading-relaxed tracking-tight text-muted-foreground md:text-lg">
              “{company.vision}”
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Mission" title="What we're here to do" />
            <ol className="space-y-4">
              {company.mission.map((m, i) => (
                <li key={m} className="flex items-start gap-4">
                  <span className="mt-0.5 font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-muted-foreground">{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Core values"
            title="The principles that govern how we work"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {company.values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Why SmartGrow"
            title="Ten reasons clients and students stay"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {company.whyChoose.map((w) => (
              <div key={w.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground">
                  {w.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {w.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs (also on the home page; both stay) */}
      <section className="border-t border-border/60">
        <div className="container">
          <ScrollFAQAccordion
            data={FAQ_DATA}
            heading="Frequently Asked Questions"
            subheading="Keep scrolling, the answers open as you go. Anything else, ask us on a call."
          />
        </div>
      </section>

      <CtaStrip
        title={`Talk to ${site.name}`}
        lede="Book a call, or reach us by email, phone, or WhatsApp. Whatever suits you."
      />
    </>
  );
}
