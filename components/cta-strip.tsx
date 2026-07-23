import ButtonWithIcon from "@/components/ui/button-with-icon";
import { BOOK_CALL_URL, site } from "@/lib/site";

/**
 * Closing CTA strip (blueprint H6), reused on service pages as the global
 * service-page CTA block. Pricing is shared on the call, never on the page.
 * Office photo background with a dark shade; all text renders white.
 * Owner image: replace public/cta-office.jpg.
 */
export function CtaStrip({
  title = "Ready when you are",
  lede = "Book a call and tell us what you're building. Pricing is discussed on the call. The first consultation is free, 30 minutes, no strings.",
  ctaLabel = "Book a Call",
  showHq = true,
}: {
  title?: string;
  lede?: string;
  ctaLabel?: string;
  showHq?: boolean;
}) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/cta-office.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Black shade for white-text contrast */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="container relative flex flex-col items-center text-center">
        <p className="circuit-eyebrow mb-4 justify-center text-white/70">
          Next step
        </p>
        <h2 className="max-w-2xl text-[26px] font-bold leading-[1.15] tracking-tight text-white md:text-[36px]">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-snug tracking-tight text-white/80 md:text-base">
          {lede}
        </p>
        <div className="mt-7">
          <ButtonWithIcon label={ctaLabel} href={BOOK_CALL_URL} invert />
        </div>
        <p className="mt-6 text-sm text-white/80">
          <a
            href={`mailto:${site.email}`}
            className="underline-offset-4 hover:text-white hover:underline"
          >
            {site.email}
          </a>{" "}
          ·{" "}
          <a
            href={site.phoneHref}
            className="underline-offset-4 hover:text-white hover:underline"
          >
            {site.phone}
          </a>
        </p>
        {showHq && (
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            Headquarters: {site.location}
          </p>
        )}
      </div>
    </section>
  );
}
