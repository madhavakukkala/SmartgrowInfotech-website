import type { Metadata } from "next";
import { User } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CtaStrip } from "@/components/cta-strip";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people behind SmartGrow Infotech: 15+ years of combined industry experience across technologies and domains.",
};

/*
 * NOTE FOR OWNER: the brand file lists no team names or photos (M5).
 * These are placeholder cards. Replace name/detail and drop photos into
 * public/team/ when ready.
 */
const roles = [
  { role: "Founder & CEO", detail: "Sets the direction. Talks to every client personally." },
  { role: "Head of Engineering", detail: "Owns architecture and code quality across projects." },
  { role: "Lead Full-Stack Developer", detail: "Ships the products. Reviews every intern's code." },
  { role: "AI/ML Lead", detail: "Builds the models and teaches the AI/ML program." },
  { role: "Head of Training", detail: "Runs CRT and mentors students to placement." },
  { role: "Marketing Lead", detail: "Runs campaigns for clients and keeps them tied to revenue." },
];

export default function TeamPage() {
  return (
    <>
      <section className="border-b border-border/60 py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="circuit-eyebrow mb-4">Team</p>
          <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight md:text-[42px]">
            Small team, senior hands
          </h1>
          <p className="mt-4 text-[15px] leading-snug tracking-tight text-muted-foreground md:text-lg">
            15+ years of combined industry experience across technologies and
            domains. The same people who scope your project build it.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="The people"
            title="Who does the work"
            lede="Photos and names are on their way. The roles are real today."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <div
                key={r.role}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <User className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground">{r.role}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  Name coming soon
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "8+", label: "Years of experience each mentor brings" },
              { value: "500+", label: "Projects this team has delivered" },
              { value: "1000+", label: "Students they've trained" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="font-mono text-2xl font-semibold text-brand-blue">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Want to meet us?"
        lede="Book a call. You'll talk to the people who do the work, not a sales layer."
      />
    </>
  );
}
