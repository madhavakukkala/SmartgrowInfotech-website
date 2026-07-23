import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { CalEmbed } from "@/components/cal-embed";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Call",
  description: `Pick a slot that works for you. The first consultation with ${site.name} is free, 30 minutes, no strings.`,
};

export default function BookACallPage() {
  return (
    <>
      <section className="border-b border-border/60 py-20 lg:py-24">
        <div className="container max-w-3xl text-center">
          <p className="circuit-eyebrow mb-4 justify-center">Book a Call</p>
          <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight md:text-[42px]">
            Pick a slot that works for you
          </h1>
          <p className="mt-4 text-[15px] leading-snug tracking-tight text-muted-foreground md:text-lg">
            30 minutes, free, no strings. We'll talk about what you're
            building and how we can help. Pricing is discussed here too.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-5xl">
          <CalEmbed />
        </div>
      </section>

      <section className="pb-20">
        <div className="container max-w-3xl text-center">
          <p className="mb-5 text-[15px] tracking-tight text-muted-foreground">
            Calendar not your thing? Reach us directly:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1fb857]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Or email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-brand-blue underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
