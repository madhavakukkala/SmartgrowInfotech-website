import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { services, heroStats } from "@/lib/content";
import { BOOK_CALL_URL, site } from "@/lib/site";
import ButtonWithIcon from "@/components/ui/button-with-icon";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: `Ready to transform your business? Book a call with ${site.name}, or reach us by email, phone, or WhatsApp.`,
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phone,
    href: site.whatsapp,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border/60 py-20 lg:py-28">
        <div className="container max-w-3xl text-center">
          <p className="circuit-eyebrow mb-4 justify-center">Contact</p>
          <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight md:text-[42px]">
            Ready to transform your business?
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            The fastest route is a call. Pricing, scope, and timelines are all
            discussed there, and the first consultation is free (30 minutes).
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonWithIcon
              label="Book a Call"
              href={BOOK_CALL_URL}
              className="text-base"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => {
              const inner = (
                <>
                  <channel.icon
                    className="mb-3 h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {channel.label}
                  </h2>
                  <p className="mt-1 break-words text-sm font-medium text-foreground">
                    {channel.value}
                  </p>
                </>
              );
              return "href" in channel && channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
                  {...(channel.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={channel.label}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  {inner}
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Website: {site.website}
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <dl className="grid grid-cols-2 gap-8 rounded-2xl border border-border bg-card p-8 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dd className="font-mono text-3xl font-semibold text-primary md:text-4xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border/60 py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Services directory"
            title="Who each service is for"
            lede="Find yourself in the right-hand column, then open the service to see how the engagement works."
          />
          <ol className="divide-y divide-border overflow-hidden rounded-2xl border border-border">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-4 bg-card p-5 transition-colors hover:bg-secondary sm:gap-6"
                >
                  <span className="font-mono text-sm text-accent">{s.num}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-foreground">
                      {s.name}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {s.audience}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
