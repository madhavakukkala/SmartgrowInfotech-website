"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FloatingIconsHero,
  type FloatingIconsHeroProps,
} from "@/components/ui/floating-icons-hero-section";
import ButtonWithIcon from "@/components/ui/button-with-icon";
import { SlotsBadge, ReviewsWidget } from "@/components/hero-widgets";
import { BOOK_CALL_URL } from "@/lib/site";
import { heroStats } from "@/lib/content";

const ROTATING_WORDS = ["products", "platforms", "AI", "growth"];

/**
 * Vertical word-flip. The slot animates its width to the current word so
 * short words ("AI") don't leave a gap that reads as loose letter-spacing.
 */
function RotatingWord() {
  const [index, setIndex] = React.useState(0);
  const [widths, setWidths] = React.useState<number[]>([]);
  const measureRefs = React.useRef<(HTMLSpanElement | null)[]>([]);

  const measure = React.useCallback(() => {
    setWidths(measureRefs.current.map((el) => el?.offsetWidth ?? 0));
  }, []);

  React.useEffect(() => {
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  React.useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % ROTATING_WORDS.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-block align-bottom">
      {/* Hidden measurers inherit the h1's font so widths are exact. */}
      <span
        aria-hidden="true"
        className="invisible absolute left-0 top-0 whitespace-nowrap"
      >
        {ROTATING_WORDS.map((w, i) => (
          <span
            key={w}
            ref={(el) => {
              measureRefs.current[i] = el;
            }}
            className="inline-block"
          >
            {w}
          </span>
        ))}
      </span>

      {/* Outgoing and incoming words share one grid cell, so they overlap
          during the flip with no blank frame and no misplaced ghost. */}
      <motion.span
        className="inline-grid justify-items-start overflow-hidden align-bottom"
        animate={widths[index] ? { width: widths[index] } : {}}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence initial={false}>
          <motion.span
            key={ROTATING_WORDS[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="whitespace-nowrap text-brand-blue [grid-area:1/1]"
          >
            {ROTATING_WORDS[index]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </span>
  );
}

// Colorful AI/tech brand logos (owner-approved). Half hide below md so the
// mobile hero stays readable.
const icons: FloatingIconsHeroProps["icons"] = [
  { id: 1, img: "/ai-logos/openai.svg", label: "OpenAI GPT", className: "top-[12%] left-[8%]" },
  { id: 2, img: "/ai-logos/claude-color.svg", label: "Claude", className: "top-[22%] right-[7%]" },
  { id: 3, img: "/ai-logos/python.svg", label: "Python", className: "top-[82%] left-[9%]" },
  { id: 4, img: "/ai-logos/openjdk.svg", label: "Java", className: "bottom-[8%] right-[10%]" },
  { id: 5, img: "/ai-logos/antigravity.svg", label: "Antigravity", className: "hidden md:block top-[7%] left-[32%]" },
  { id: 6, img: "/ai-logos/gemini-color.svg", label: "Gemini", className: "hidden md:block top-[6%] right-[28%]" },
  { id: 7, img: "/ai-logos/githubcopilot.svg", label: "GitHub Copilot", className: "hidden md:block bottom-[9%] left-[27%]" },
  { id: 8, img: "/ai-logos/huggingface.svg", label: "Hugging Face", className: "hidden md:block top-[42%] left-[12%]" },
  { id: 9, img: "/ai-logos/react.svg", label: "React", className: "hidden md:block top-[72%] right-[22%]" },
  { id: 10, img: "/ai-logos/googlegemini.svg", label: "Gemini mark", className: "hidden md:block top-[52%] right-[6%]" },
];

export function HomeHero() {
  return (
    <FloatingIconsHero
      badge={<SlotsBadge />}
      title={
        <>
          We engineer <RotatingWord />
          <br className="hidden md:block" /> for companies that mean business.
        </>
      }
      subtitle="End-to-end: consulting, build, launch, scale. One standard."
      icons={icons}
      tileSize="sm"
    >
      <div className="mt-8">
        <ButtonWithIcon label="Book a Call" href={BOOK_CALL_URL} />
      </div>

      <ReviewsWidget />

      <dl className="mx-auto mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-0.5">
            <dd className="font-mono text-xl font-semibold text-brand-blue md:text-2xl">
              {stat.value}
            </dd>
            <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    </FloatingIconsHero>
  );
}
