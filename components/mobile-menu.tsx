"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navMenu } from "@/lib/site";

/**
 * Mobile-only hamburger menu, top right of the header (replaces the
 * Book a Call button there on small screens). The pill navbar handles
 * navigation from `sm` upward.
 */
export function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[5000] mt-3 w-[calc(100vw-2.5rem)] max-w-xs rounded-2xl border border-border bg-background p-2 shadow-xl">
          {navMenu.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3.5 py-2.5 text-[15px] font-medium text-foreground hover:bg-secondary"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="mb-1 ml-4 border-l border-border pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
