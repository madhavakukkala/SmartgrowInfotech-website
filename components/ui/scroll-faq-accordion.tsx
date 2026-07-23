"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface ScrollFAQAccordionProps {
  data: FAQItem[];
  heading?: string;
  subheading?: string;
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export default function ScrollFAQAccordion({
  data,
  heading = "Frequently Asked Questions",
  subheading,
  className,
  questionClassName,
  answerClassName,
}: ScrollFAQAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRefs = React.useRef<Map<string, HTMLDivElement>>(new Map());

  // Register GSAP plugins
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  // Scroll-driven accordion: pin the section and open items sequentially.
  useGSAP(
    () => {
      if (!containerRef.current || data.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${data.length * 200}`,
          scrub: 0.3,
          pin: true,
          markers: false,
        },
      });

      data.forEach((item, index) => {
        tl.add(() => {
          setOpenItem(item.id.toString());
        }, index * 2);
      });
    },
    { scope: containerRef, dependencies: [data.length] },
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "max-w-4xl mx-auto text-center py-16 min-h-screen",
        className,
      )}
    >
      <h2 className="text-[26px] md:text-[36px] leading-[1.15] font-bold mb-2">
        {heading}
      </h2>
      {subheading && (
        <p className="text-muted-foreground text-[15px] md:text-base tracking-tight mb-6">
          {subheading}
        </p>
      )}

      <Accordion.Root type="single" collapsible value={openItem || ""}>
        {data.map((item) => (
          <Accordion.Item
            value={item.id.toString()}
            key={item.id}
            className="mb-6"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-start gap-x-4 cursor-pointer text-left"
                onClick={() =>
                  setOpenItem(
                    openItem === item.id.toString() ? null : item.id.toString(),
                  )
                }
              >
                <div
                  className={cn(
                    "relative flex items-center space-x-2 rounded-xl p-2 transition-colors",
                    openItem === item.id.toString()
                      ? "bg-primary/20 text-primary"
                      : "bg-muted",
                    questionClassName,
                  )}
                >
                  {item.icon && (
                    <span
                      className={cn(
                        "absolute bottom-6",
                        item.iconPosition === "right" ? "right-0" : "left-0",
                      )}
                      style={{
                        transform:
                          item.iconPosition === "right"
                            ? "rotate(7deg)"
                            : "rotate(-4deg)",
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium">{item.question}</span>
                </div>

                <span
                  className={cn(
                    "text-muted-foreground",
                    openItem === item.id.toString() && "text-primary",
                  )}
                >
                  {openItem === item.id.toString() ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content asChild forceMount>
              <motion.div
                ref={(el) => {
                  if (el) contentRefs.current.set(item.id.toString(), el);
                }}
                initial="collapsed"
                animate={
                  openItem === item.id.toString() ? "open" : "collapsed"
                }
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="flex justify-end ml-7 mt-4 md:ml-16">
                  <div
                    className={cn(
                      "relative max-w-md rounded-2xl px-4 py-3 text-left text-primary-foreground bg-primary text-base",
                      answerClassName,
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
