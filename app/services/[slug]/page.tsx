import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Quote } from "lucide-react";
import {
  getCategory,
  getService,
  serviceCategories,
  services,
} from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { ServiceTimeline } from "@/components/service-timeline";
import { CategoryPage } from "@/components/category-page";
import { CtaStrip } from "@/components/cta-strip";
import ButtonWithIcon from "@/components/ui/button-with-icon";
import { BOOK_CALL_URL } from "@/lib/site";

export function generateStaticParams() {
  return [
    ...serviceCategories.map((c) => ({ slug: c.slug })),
    ...services.map((s) => ({ slug: s.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const category = getCategory(slug);
  if (category) {
    return { title: `${category.name} services`, description: category.description };
  }
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // Category pages (Branding, Technology, Marketing, Training) share this
  // route; categories are checked before individual services.
  const category = getCategory(slug);
  if (category) return <CategoryPage category={category} />;

  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="container grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="circuit-eyebrow mb-4">Service {service.num} / 09</p>
            <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight md:text-[42px]">
              {service.name}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-snug tracking-tight text-muted-foreground md:text-lg">
              {service.tagline}
            </p>
            <div className="mt-8">
              <ButtonWithIcon label="Book a Call" href={BOOK_CALL_URL} />
            </div>
          </div>
          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <p className="circuit-eyebrow mb-4">Overview</p>
          {service.overview.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="mb-5 text-lg leading-relaxed text-muted-foreground"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Scope sections */}
      {service.sections.map((section) => (
        <section key={section.heading} className="pb-20">
          <div className="container">
            <SectionHeading eyebrow={service.name} title={section.heading} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
            {section.note && (
              <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
                {section.note}
              </p>
            )}
          </div>
        </section>
      ))}

      {/* Process timeline */}
      {service.process && service.processHeading && (
        <section className="border-t border-border/60 py-10">
          <div className="container">
            <ServiceTimeline
              heading={service.processHeading}
              phases={service.process}
            />
          </div>
        </section>
      )}

      {/* Tech stack */}
      {service.stack && (
        <section className="border-t border-border/60 py-20">
          <div className="container">
            <SectionHeading eyebrow="Stack" title="Technology we use here" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.stack.map((group) => (
                <div key={group.group}>
                  <h3 className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    {group.group}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Engagement note */}
      {service.engagementNote && (
        <section className="pb-4">
          <div className="container max-w-3xl">
            <p className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-sm leading-relaxed text-muted-foreground">
              {service.engagementNote}
            </p>
          </div>
        </section>
      )}

      {/* Success stories */}
      {service.stories && (
        <section className="py-20">
          <div className="container">
            <SectionHeading eyebrow="Results" title="What this looks like in practice" />
            <div className="grid gap-4 md:grid-cols-3">
              {service.stories.map((story) => (
                <div
                  key={story.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-mono text-lg font-semibold text-primary">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {story.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {service.testimonials && (
        <section className="pb-20">
          <div className="container">
            <div className="grid gap-4 md:grid-cols-2">
              {service.testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <Quote
                    className="mb-3 h-5 w-5 text-accent"
                    aria-hidden="true"
                  />
                  <blockquote className="text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-muted-foreground">
                    {t.name} · {t.org}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaStrip
        title={service.ctaLabel ?? "Let's scope your engagement"}
        lede="Pricing is shared on the call. Book one and we'll map the work together."
        showHq={false}
      />
    </>
  );
}
