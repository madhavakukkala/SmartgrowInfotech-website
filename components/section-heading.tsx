import { cn } from "@/lib/utils";

/**
 * Standard section header: circuit-trace eyebrow (SmartGrow signature motif)
 * + display heading + optional lede. `blue` renders the title in the
 * reference-site blue (#0067f3).
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
  align = "left",
  blue = false,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
  align?: "left" | "center";
  blue?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "circuit-eyebrow mb-4",
          align === "center" && "justify-center",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-[26px] font-bold leading-[1.15] tracking-tight md:text-[36px]",
          blue && "text-brand-blue",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p className="mt-3 text-[15px] leading-snug tracking-tight text-muted-foreground md:text-base">
          {lede}
        </p>
      )}
    </div>
  );
}
