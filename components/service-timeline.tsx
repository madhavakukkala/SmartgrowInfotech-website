"use client";

import { Timeline } from "@/components/ui/timeline";
import type { ProcessPhase } from "@/lib/content";

/**
 * Maps a service's process/curriculum phases onto the provided scroll
 * Timeline: the phase period is the big sticky marker, the phase details
 * render as a card of bullet points.
 */
export function ServiceTimeline({
  heading,
  phases,
}: {
  heading: string;
  phases: ProcessPhase[];
}) {
  const data = phases.map((phase, i) => ({
    title: phase.period ?? `Step ${i + 1}`,
    content: (
      <div className="rounded-2xl border border-border bg-card p-6">
        <h4 className="mb-4 text-lg font-semibold text-foreground md:text-xl">
          {phase.title}
        </h4>
        <ul className="space-y-2">
          {phase.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-sm text-muted-foreground md:text-base"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <Timeline
      data={data}
      heading={heading}
      description="Scroll the line. Each phase lights up as you reach it."
    />
  );
}
