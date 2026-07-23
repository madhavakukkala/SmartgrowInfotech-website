import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SlotsBadge } from "@/components/hero-widgets";
import { CtaStrip } from "@/components/cta-strip";
import { footerAbout } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "SmartGrow Infotech brand guidelines: logos, colors, typography, signature elements, and voice. Everything needed to represent the brand correctly.",
};

/* ------------------------------------------------------------------ */
/* Brand data                                                          */
/* ------------------------------------------------------------------ */

const logoVariants = [
  { file: "SmartgrowInfotech_plain-horizontal.png", name: "Primary · horizontal", note: "Full color with navy wordmark. Default on light backgrounds.", bg: "light" },
  { file: "SmartgrowInfotech_darkblue-horizontal.png", name: "Dark surfaces · horizontal", note: "Teal star, white wordmark. Default on dark backgrounds.", bg: "dark" },
  { file: "SmartgrowInfotech_orange-horizontal.png", name: "Mono · horizontal (dark)", note: "Navy star with white wordmark for tinted surfaces.", bg: "dark" },
  { file: "SmartgrowInfotech_lightblue-horizontal.png", name: "Mono outline · horizontal", note: "All-navy line version for subtle placements.", bg: "light" },
  { file: "SmartgrowInfotech_plain.png", name: "Primary · mark", note: "Square star mark. Favicons, avatars, app icons.", bg: "light" },
  { file: "SmartgrowInfotech_darkblue.png", name: "Dark surfaces · mark", note: "Star mark for dark backgrounds.", bg: "dark" },
  { file: "SmartgrowInfotech_orange.png", name: "Mono navy · mark", note: "Single-color star mark.", bg: "light" },
  { file: "SmartgrowInfotech_lightblue.png", name: "Mono outline · mark", note: "Outline star mark.", bg: "light" },
];

const brandColors = [
  { name: "SmartGrow Teal", hex: "#1690B8", use: "The star. Logo primary, brand recognition." },
  { name: "SmartGrow Orange", hex: "#F18A21", use: "The spark. Accents, eyebrow dots, highlights." },
  { name: "Deep Navy", hex: "#0B1B2B", use: "Wordmark and mono logo color." },
  { name: "Action Blue", hex: "#0067F3", use: "Select headings, links, interactive emphasis." },
  { name: "Ink", hex: "#212121", use: "Body headings and primary buttons on light." },
  { name: "Pure Black", hex: "#000000", use: "Dark mode background." },
  { name: "White", hex: "#FFFFFF", use: "Light mode background, cards." },
  { name: "Slate", hex: "#50576B", use: "Body copy on light surfaces." },
];

const typeScale = [
  { label: "Hero headline", spec: "Satoshi Bold · 50px / 34px mobile · letter-spacing -2.5px", sample: "We engineer products", cls: "font-display text-[34px] md:text-[50px] font-bold tracking-[-2.5px] leading-[1.1]" },
  { label: "Section heading", spec: "Satoshi Bold · 36px / 26px mobile · tracking tight", sample: "The numbers so far", cls: "font-display text-[26px] md:text-[36px] font-bold tracking-tight leading-[1.15]" },
  { label: "Card title", spec: "Satoshi Semibold · 18–24px", sample: "Product Development", cls: "font-display text-2xl font-semibold tracking-tight" },
  { label: "Body", spec: "Inter Regular · 15px · letter-spacing -0.5px · leading snug", sample: "We help startups and B2B enterprises move from vision to reality, and beyond. One hand on design, the other on development.", cls: "text-[15px] leading-snug text-muted-foreground max-w-md" },
  { label: "Label / stat", spec: "JetBrains Mono · 11–13px · uppercase · wide tracking", sample: "500+ PROJECTS DELIVERED", cls: "font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground" },
];

/* ------------------------------------------------------------------ */

export default function BrandPage() {
  return (
    <>
      <section className="border-b border-border/60 py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="circuit-eyebrow mb-4">Brand guidelines</p>
          <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight md:text-[42px] text-brand-blue">
            The SmartGrow Infotech brand
          </h1>
          <p className="mt-4 text-[15px] leading-snug tracking-tight text-muted-foreground md:text-lg">
            Everything needed to represent SmartGrow correctly: logos, colors,
            type, signature elements, and how we write. If you're putting the
            brand somewhere, start here.
          </p>
        </div>
      </section>

      {/* Logos */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="01 · Logo"
            title="The circuit star"
            lede="A five-point star traced like a circuit board: three nodes connected by traces, with the SGI monogram at its heart. It stands for engineering and growth in one mark."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {logoVariants.map((v) => (
              <figure
                key={v.file}
                className="overflow-hidden rounded-xl border border-border"
              >
                <div
                  className={`flex h-36 items-center justify-center p-6 ${
                    v.bg === "dark" ? "bg-brand-navy" : "bg-white"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/brand/${v.file}`}
                    alt={v.name}
                    className="max-h-full w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <figcaption className="border-t border-border bg-card p-4">
                  <p className="text-sm font-semibold text-foreground">{v.name}</p>
                  <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                    {v.note}
                  </p>
                  <a
                    href={`/brand/${v.file}`}
                    download
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-blue underline-offset-4 hover:underline"
                  >
                    <Download className="h-3 w-3" aria-hidden="true" />
                    Download PNG
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Clear space", "Keep space equal to the star's inner node diameter on all sides."],
              ["Minimum size", "24px tall for the mark, 32px for the horizontal lockup."],
              ["Don't recolor", "Use only the variants above. No gradients, shadows, or new colors."],
              ["Don't distort", "Never stretch, rotate, outline, or crop the logo."],
            ].map(([t, d]) => (
              <div key={t}>
                <p className="text-sm font-semibold text-foreground">{t}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="border-t border-border/60 py-20">
        <div className="container">
          <SectionHeading
            eyebrow="02 · Color"
            title="Teal for the brand, blue for action"
            lede="The logo owns teal and orange. The interface stays neutral: white or pure black, with Action Blue reserved for headings and links that matter."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brandColors.map((c) => (
              <div key={c.hex} className="overflow-hidden rounded-xl border border-border">
                <div
                  className="h-24"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden="true"
                />
                <div className="border-t border-border bg-card p-4">
                  <p className="text-sm font-semibold text-foreground">{c.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-brand-blue">{c.hex}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{c.use}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-snug text-muted-foreground">
            Ratio in practice: roughly 80% neutral surfaces, 15% Action Blue
            emphasis, 5% teal and orange brand moments. Dark mode inverts the
            neutrals to pure black and keeps the same accents.
          </p>
        </div>
      </section>

      {/* Typography */}
      <section className="border-t border-border/60 py-20">
        <div className="container">
          <SectionHeading
            eyebrow="03 · Typography"
            title="Satoshi speaks, Inter explains, Mono counts"
            lede="Three faces, three jobs. Headlines are packed tight; body copy stays comfortable; numbers and labels go monospace."
          />
          <div className="space-y-6">
            {typeScale.map((t) => (
              <div
                key={t.label}
                className="grid gap-4 rounded-xl border border-border bg-card p-6 lg:grid-cols-[240px_1fr] lg:items-center"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.label}</p>
                  <p className="mt-1 font-mono text-[11px] leading-relaxed text-muted-foreground">
                    {t.spec}
                  </p>
                </div>
                <p className={t.cls}>{t.sample}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["Satoshi", "Display face. Weights 500 / 700 / 900. Served via Fontshare."],
              ["Inter", "Body face. Global letter-spacing of -0.5px keeps text packed."],
              ["JetBrains Mono", "Stats, eyebrows, and labels. Uppercase with wide tracking."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-card p-5">
                <p className="text-sm font-semibold text-foreground">{t}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature elements */}
      <section className="border-t border-border/60 py-20">
        <div className="container">
          <SectionHeading
            eyebrow="04 · Signature elements"
            title="The details that make it ours"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="circuit-eyebrow mb-4">Circuit eyebrow</p>
              <p className="text-sm font-semibold text-foreground">Section eyebrows</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">
                An orange node, a fading trace, and a mono label. Echoes the
                circuit star. Opens every major section.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6">
              <div className="dot-grid absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <p className="text-sm font-semibold text-foreground">Dotted grid</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  Blue-tinted dot grid behind heroes, fading out radially.
                  Structure without noise.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex justify-start [&>a]:mb-0">
                <SlotsBadge />
              </div>
              <p className="text-sm font-semibold text-foreground">Availability badge</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">
                A pulsing green dot and an honest scarcity line. Always links
                to the booking page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice */}
      <section className="border-t border-border/60 py-20">
        <div className="container">
          <SectionHeading
            eyebrow="05 · Voice"
            title="Plain, warm, professional"
            lede="We write like a person explaining work to another person. Apple-level polish, zero fluff."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Plain English", "Short sentences. Everyday words. No jargon unless the reader uses it too."],
              ["No em dashes", "Commas and full stops carry the rhythm. Never the long dash."],
              ["No pricing on pages", "Every price conversation happens on a call. Pages never quote fees."],
              ["No delivery promises", "Timelines depend on the project. They're agreed on the call, not printed."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-card p-5">
                <p className="text-sm font-semibold text-foreground">{t}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boilerplate */}
      <section className="border-t border-border/60 py-20">
        <div className="container max-w-3xl">
          <SectionHeading
            eyebrow="06 · Boilerplate"
            title="The official description"
            lede="Use this text verbatim in press, directories, and partner pages."
          />
          <blockquote className="rounded-xl border border-border bg-card p-6 text-[15px] leading-relaxed tracking-tight text-muted-foreground">
            {footerAbout}
            <footer className="mt-4 font-mono text-xs text-foreground">
              Contact: {site.email} · {site.phone} · {site.website}
            </footer>
          </blockquote>
        </div>
      </section>

      <CtaStrip
        title="Need something not covered here?"
        lede="Ask us for source files, co-branding approval, or anything brand related."
      />
    </>
  );
}
