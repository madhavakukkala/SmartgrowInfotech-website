import Link from "next/link";
import Image from "next/image";
import ButtonWithIcon from "@/components/ui/button-with-icon";
import { BOOK_CALL_URL } from "@/lib/site";

/**
 * 404 page. The star mark plays the missing zero in "4 ★ 4".
 */
export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="dot-grid absolute inset-x-0 top-0 h-2/3" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <div className="flex items-center gap-2 font-display text-[100px] font-bold leading-none tracking-tight text-foreground md:text-[160px]">
          <span>4</span>
          <Image
            src="/logo/star.png"
            alt="0"
            width={160}
            height={160}
            className="h-[84px] w-auto animate-[spin_14s_linear_infinite] md:h-[132px] dark:invert"
          />
          <span>4</span>
        </div>

        <p className="circuit-eyebrow mt-6 justify-center">Page not found</p>
        <h1 className="mt-3 max-w-md text-[26px] font-bold leading-[1.15] tracking-tight md:text-[36px]">
          This page hasn't shipped yet
        </h1>
        <p className="mt-3 max-w-sm text-[15px] leading-snug tracking-tight text-muted-foreground">
          The link is broken or the page moved. Either way, nothing to see
          here. These will get you back on track:
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <ButtonWithIcon label="Back to Home" href="/" />
          <Link
            href="/#services"
            className="text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
          >
            See our services
          </Link>
          <Link
            href={BOOK_CALL_URL}
            className="text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
          >
            Book a call
          </Link>
        </div>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Error 404 · route not in production
        </p>
      </div>
    </section>
  );
}
