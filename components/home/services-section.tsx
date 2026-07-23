import { Globe2 } from "lucide-react";
import HoverRevealCards, { type CardItem } from "@/components/ui/cards";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";

export function ServicesSection() {
  const items: CardItem[] = services.map((s) => ({
    id: s.slug,
    title: s.name,
    subtitle: s.short,
    imageUrl: s.image,
    href: `/services/${s.slug}`,
    // US IT Staffing has no legible icon in the brand file (M12) —
    // a globe stands in, consistent with the other emoji entries.
    icon: s.icon || <Globe2 className="h-6 w-6" aria-hidden="true" />,
  }));

  return (
    <section id="services" className="scroll-mt-20 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="What we do"
          lede="Nine services, one team. Pick one to see how we work, and book a call when you're ready."
          blue
        />
        <HoverRevealCards items={items} />
      </div>
    </section>
  );
}
