"use client";

import ScrollFAQAccordion from "@/components/ui/scroll-faq-accordion";
import { faqs } from "@/lib/content";

// Stable reference: a fresh array each render would remount the GSAP
// scroll timeline on every state change and break the accordion.
const FAQ_DATA = [...faqs];

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border/60">
      <div className="container">
        <ScrollFAQAccordion
          data={FAQ_DATA}
          heading="Frequently Asked Questions"
          subheading="Keep scrolling, the answers open as you go. Anything else, ask us on a call."
        />
      </div>
    </section>
  );
}
