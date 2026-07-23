"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ButtonWithIcon from "@/components/ui/button-with-icon";
import { BOOK_CALL_URL, footerCompanyLinks, site } from "@/lib/site";
import { footerAbout, services } from "@/lib/content";

/**
 * Site footer, built on the provided footer-section component's layout.
 * Columns follow the blueprint: about blurb · Company links · Services links ·
 * Contact channels. No social/newsletter/legal links — none exist in the
 * brand file (blueprint M2–M4).
 */
export function SiteFooter() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Image
              src="/logo/logo-light.png"
              alt={site.name}
              width={190}
              height={67}
              className="mb-4 h-16 w-auto dark:hidden"
            />
            <Image
              src="/logo/logo-dark.png"
              alt={site.name}
              width={190}
              height={67}
              className="mb-4 hidden h-16 w-auto dark:block"
            />
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {footerAbout}
            </p>
            <ButtonWithIcon label="Book a Call" href={BOOK_CALL_URL} />
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          <div className="lg:justify-self-center">
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <nav className="space-y-2 text-sm" aria-label="Company">
              {footerCompanyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <nav className="space-y-2 text-sm" aria-label="Services">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-primary"
                >
                  {site.phone}
                </a>
              </p>
              <p>{site.website}</p>
              <p>{site.location}</p>
            </address>

            <div className="mb-6 mt-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <a href={`mailto:${site.email}`} aria-label="Email us">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Email {site.email}</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <a href={site.phoneHref} aria-label="Call us">
                        <Phone className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Call {site.phone}</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <a
                        href={site.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp us"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>WhatsApp {site.phone}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="footer-dark-mode"
                checked={isDark}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="footer-dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {site.name} · {site.location}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
