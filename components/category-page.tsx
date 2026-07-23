import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ServiceCategory } from "@/lib/content";
import { CategoryCards } from "@/components/category-section";
import { CtaStrip } from "@/components/cta-strip";

/** Full page for one service category (Branding, Technology, Marketing, Training). */
export function CategoryPage({ category }: { category: ServiceCategory }) {
  return (
    <>
      <section className="border-b border-border/60 py-24 lg:py-28">
        <div className="container max-w-3xl">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All services
          </Link>
          <p className="circuit-eyebrow mb-4">{category.tagline}</p>
          <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight md:text-[42px] text-brand-blue">
            {category.name}
          </h1>
          <p className="mt-4 text-[15px] leading-snug tracking-tight text-muted-foreground md:text-lg">
            {category.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <CategoryCards category={category} />
        </div>
      </section>

      <CtaStrip
        title={`Talk to us about ${category.name.toLowerCase()}`}
        lede="Book a call and tell us what you need. Pricing is discussed on the call. The first consultation is free, 30 minutes."
      />
    </>
  );
}
