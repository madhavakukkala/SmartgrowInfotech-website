"use client";

import { ScrollAndSwapText } from "@/components/ui/scroll-and-swap-text";
import { SectionHeading } from "@/components/section-heading";
import {
  achievementHeadlines,
  companyAchievements,
  trainingAchievements,
} from "@/lib/content";

// Local logo files for the hiring-companies marquee. No names shown on the
// page; the logos speak for themselves.
const companyLogos = [
  "tcs", "wipro", "infosys", "capgemini", "accenture", "cognizant",
  "techmahindra", "hcl", "mindtree", "amazon", "microsoft", "flipkart", "paytm",
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-20 border-t border-border/60 py-24"
    >
      <div className="container">
        <SectionHeading eyebrow="Achievements" title="The numbers so far" />

        {/* Signature scroll moment: headline figures swap in as you scroll. */}
        <div className="mb-16 flex flex-col items-start gap-1 font-display text-3xl font-bold uppercase tracking-tight text-brand-blue sm:text-4xl lg:text-5xl">
          {achievementHeadlines.map((line, i) => (
            <ScrollAndSwapText
              key={line}
              label={line}
              offset={[`0 ${0.9 - i * 0.08}`, `0 ${0.55 - i * 0.08}`]}
            />
          ))}
        </div>

        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Company
            </h3>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {companyAchievements.map((a) => (
                <div key={a.label}>
                  <dd className="font-mono text-xl font-semibold text-foreground md:text-2xl">
                    {a.value}
                  </dd>
                  <dt className="mt-1 text-[13px] leading-snug text-muted-foreground">
                    {a.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Training & careers
            </h3>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3">
              {trainingAchievements.map((a) => (
                <div key={a.label}>
                  <dd className="font-mono text-xl font-semibold text-foreground md:text-2xl">
                    {a.value}
                  </dd>
                  <dt className="mt-1 text-[13px] leading-snug text-muted-foreground">
                    {a.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Hiring companies: logo marquee, right to left, faded edges. */}
        <div className="mt-16">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Where trained students got hired
          </h3>
          <div className="marquee-mask overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-14">
              {[...companyLogos, ...companyLogos].map((logo, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`${logo}-${i}`}
                  src={`/companies/${logo}.png`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-10 w-auto shrink-0 object-contain md:h-12 dark:rounded-lg dark:bg-white/95 dark:p-1.5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
