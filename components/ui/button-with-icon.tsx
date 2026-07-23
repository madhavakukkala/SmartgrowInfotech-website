import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The provided sliding-arrow CTA button, made reusable: renders as a link
 * with configurable label and destination. External URLs open in a new tab
 * automatically. `invert` renders a white button for use on dark imagery.
 */
const ButtonWithIcon = ({
  label,
  href,
  className,
  invert = false,
}: {
  label: string;
  href: string;
  className?: string;
  invert?: boolean;
}) => {
  const external = /^https?:\/\//.test(href);
  return (
    <Button
      asChild
      className={cn(
        "relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer",
        invert && "bg-white text-gray-900 hover:bg-white/90",
        className,
      )}
    >
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span className="relative z-10 transition-all duration-500">
          {label}
        </span>
        <span
          className={cn(
            "absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45",
            invert && "bg-gray-900 text-white",
          )}
        >
          <ArrowUpRight size={16} />
        </span>
      </a>
    </Button>
  );
};

export default ButtonWithIcon;
