"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

// Interface for the props of each individual icon.
export interface HeroIconProps {
  id: number;
  /** SVG icon component (e.g. lucide) … */
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  /** … or an image url (brand logo). One of the two is required. */
  img?: string;
  label?: string;
  className: string; // Used for custom positioning of the icon.
}

// Interface for the main hero component's props.
export interface FloatingIconsHeroProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle: string;
  icons: HeroIconProps[];
  /** "sm" renders smaller floating tiles. */
  tileSize?: "default" | "sm";
  /** CTA row + anything below the subtitle (stat row, reviews). */
  children?: React.ReactNode;
}

// A single icon component with its own motion logic
const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
  tileSize,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: HeroIconProps;
  index: number;
  tileSize: "default" | "sm";
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  // Motion values for the icon's position, with spring physics for smooth movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY.current - (rect.top + rect.height / 2), 2),
        );

        // If the cursor is close enough, repel the icon
        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2),
          );
          // The closer the cursor, the stronger the repulsion
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          // Return to original position when cursor is away
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  const tile =
    tileSize === "sm"
      ? "w-10 h-10 md:w-14 md:h-14 p-2 md:p-2.5 rounded-2xl"
      : "w-14 h-14 md:w-20 md:h-20 p-3 rounded-3xl";
  const glyph =
    tileSize === "sm" ? "w-5 h-5 md:w-8 md:h-8" : "w-7 h-7 md:w-10 md:h-10";

  return (
    <motion.div
      ref={ref}
      key={iconData.id}
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("absolute", iconData.className)}
    >
      {/* Inner wrapper for the continuous floating animation */}
      <motion.div
        className={cn(
          "flex items-center justify-center shadow-lg bg-card/90 backdrop-blur-md border border-border/70",
          tile,
        )}
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        {iconData.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={iconData.img}
            alt={iconData.label ?? ""}
            className={cn("object-contain", glyph)}
            loading="lazy"
          />
        ) : iconData.icon ? (
          <iconData.icon className={cn("text-foreground", glyph)} />
        ) : null}
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  Omit<React.HTMLAttributes<HTMLDivElement>, "title"> & FloatingIconsHeroProps
>(
  (
    {
      className,
      badge,
      title,
      subtitle,
      icons,
      tileSize = "default",
      children,
      ...props
    },
    ref,
  ) => {
    // Refs to track the raw mouse position
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };

    return (
      <section
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          "relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-background",
          className,
        )}
        {...props}
      >
        {/* Dotted grid backdrop (reference-site pattern) */}
        <div
          className="dot-grid absolute inset-x-0 top-0 h-2/3"
          aria-hidden="true"
        />

        {/* Container for the background floating icons */}
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          {icons.map((iconData, index) => (
            <Icon
              key={iconData.id}
              mouseX={mouseX}
              mouseY={mouseY}
              iconData={iconData}
              index={index}
              tileSize={tileSize}
            />
          ))}
        </div>

        {/* Container for the foreground content. Top padding keeps the badge
            clear of the floating pill nav on short viewports. */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 pb-24 pt-40">
          {badge}
          <h1 className="max-w-3xl text-[34px] leading-[1.1] font-semibold tracking-[-1.7px] md:text-[50px] md:font-bold md:tracking-[-2.5px] md:leading-[1.2] xl:leading-[64px] text-foreground">
            {title}
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-sm md:text-lg tracking-tight leading-snug text-muted-foreground">
            {subtitle}
          </p>
          {children}
        </div>
      </section>
    );
  },
);

FloatingIconsHero.displayName = "FloatingIconsHero";

export { FloatingIconsHero };
