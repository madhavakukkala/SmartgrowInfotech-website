"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type FloatingNavItem = {
  name: string;
  link: string;
  icon?: React.ReactNode;
  children?: { name: string; link: string }[];
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: FloatingNavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // This pill IS the site navbar: visible at the top of the page and on
  // scroll-up, hidden while scrolling down.
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
        if (direction >= 0) setMobileOpen(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -150,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-24 xl:top-8 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 sm:px-9 py-3 items-center justify-center space-x-5",
          className,
        )}
      >
        {/* Mobile: hamburger toggle */}
        <button
          type="button"
          className="flex items-center gap-2 text-[15px] font-medium text-neutral-600 dark:text-neutral-50 sm:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          Menu
        </button>

        {/* Desktop: inline links with hover dropdowns */}
        {navItems.map((navItem, idx) => (
          <div key={`link=${idx}`} className="group relative hidden sm:block">
            <Link
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
              )}
            >
              <span className="flex items-center gap-1 text-[15px]">
                {navItem.name}
                {navItem.children && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 transition-transform group-hover:rotate-180"
                  >
                    <path
                      d="M1 3.5 5 7l4-3.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </Link>

            {navItem.children && (
              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="min-w-[170px] rounded-2xl border border-neutral-200 bg-white p-1.5 shadow-lg dark:border-white/[0.2] dark:bg-black">
                  {navItem.children.map((child) => (
                    <Link
                      key={child.link}
                      href={child.link}
                      className="block rounded-xl px-3.5 py-2 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Mobile: dropdown menu panel */}
        {mobileOpen && (
          <div className="absolute left-1/2 top-full mt-3 w-[calc(100vw-2rem)] max-w-xs -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl dark:border-white/[0.2] dark:bg-black sm:hidden">
            {navItems.map((navItem) => (
              <div key={navItem.link}>
                <Link
                  href={navItem.link}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[15px] font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-white/10"
                >
                  {navItem.icon}
                  {navItem.name}
                </Link>
                {navItem.children && (
                  <div className="mb-1 ml-8 border-l border-neutral-200 pl-3 dark:border-white/[0.15]">
                    {navItem.children.map((child) => (
                      <Link
                        key={child.link}
                        href={child.link}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-2.5 py-1.5 text-sm text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
