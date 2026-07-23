import { Globe2 } from "lucide-react";
import HoverRevealCards, { type CardItem } from "@/components/ui/cards";
import { getService, type ServiceCategory } from "@/lib/content";

/** Card grid for one service category (used on /services and category pages). */
export function CategoryCards({ category }: { category: ServiceCategory }) {
  const items: CardItem[] = category.serviceSlugs
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({
      id: `${category.slug}-${s.slug}`,
      title: s.name,
      subtitle: s.short,
      imageUrl: s.image,
      href: `/services/${s.slug}`,
      icon: s.icon || <Globe2 className="h-6 w-6" aria-hidden="true" />,
    }));

  return <HoverRevealCards items={items} />;
}
