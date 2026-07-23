import type { Metadata } from "next";
import { techIndex } from "@/lib/content";
import { CtaStrip } from "@/components/cta-strip";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The complete technology stack used across all SmartGrow services, in one place.",
};

export default function TechnologyPage() {
  return (
    <>
      <section className="border-b border-border/60 py-20 lg:py-28">
        <div className="container max-w-3xl">
          <p className="circuit-eyebrow mb-4">Technology index</p>
          <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight md:text-[42px] text-brand-blue">
            Every tool in the kit
          </h1>
          <p className="mt-4 text-[15px] leading-snug tracking-tight text-muted-foreground md:text-lg">
            The complete technology stack used across all SmartGrow services,
            in one place.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-x-8 gap-y-12 md:grid-cols-2">
          {techIndex.map((group) => (
            <div key={group.group}>
              <h2 className="circuit-eyebrow mb-4 !text-sm normal-case !tracking-[0.15em]">
                {group.group}
                <span className="ml-1 font-mono text-muted-foreground">
                  ({group.items.length})
                </span>
              </h2>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Not sure which stack fits?"
        lede="That's what the call is for. Tell us what you're building and we'll recommend a stack, with reasons."
      />
    </>
  );
}
