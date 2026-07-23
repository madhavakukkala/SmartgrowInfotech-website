import React from "react";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string | number;
  title: string;
  subtitle: string;
  imageUrl: string;
  /** Optional destination — cards render as links when provided. */
  href?: string;
  /** Optional icon/emoji shown above the title. */
  icon?: React.ReactNode;
}

export interface HoverRevealCardsProps {
  items: CardItem[];
  className?: string;
  cardClassName?: string;
}

/**
 * A grid of cards with a hover-reveal effect: the hovered/focused card stands
 * out while the others are de-emphasized.
 */
const HoverRevealCards: React.FC<HoverRevealCardsProps> = ({
  items,
  className,
  cardClassName,
}) => {
  return (
    // The `group` class on the container enables styling children on parent hover.
    <div
      role="list"
      className={cn(
        "group grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => {
        const Comp = item.href ? "a" : "div";
        return (
          <Comp
            key={item.id}
            role="listitem"
            aria-label={`${item.title}, ${item.subtitle}`}
            href={item.href}
            tabIndex={0}
            className={cn(
              "relative h-72 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out",
              // On parent hover, de-emphasize all cards…
              "group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px]",
              // …then re-emphasize the hovered/focused one.
              "hover:!scale-105 hover:!opacity-100 hover:!blur-none focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
              cardClassName,
            )}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            {/* Gradient overlay for text contrast. */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

            {/* Card content */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
              {item.icon && (
                <span className="mb-2 block text-2xl" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              <p className="font-mono text-xs font-light uppercase tracking-widest opacity-80">
                {item.subtitle}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
            </div>
          </Comp>
        );
      })}
    </div>
  );
};

export default HoverRevealCards;
