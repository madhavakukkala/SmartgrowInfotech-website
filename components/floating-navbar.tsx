"use client";

import {
  Home,
  Info,
  Mail,
  Sparkles,
  Trophy,
  Wrench,
} from "lucide-react";
import { FloatingNav, type FloatingNavItem } from "@/components/ui/floating-navbar";
import { navMenu } from "@/lib/site";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="h-4 w-4" />,
  Services: <Wrench className="h-4 w-4" />,
  "Our Work": <Sparkles className="h-4 w-4" />,
  Achievements: <Trophy className="h-4 w-4" />,
  About: <Info className="h-4 w-4" />,
  Contact: <Mail className="h-4 w-4" />,
};

/**
 * The site navbar: the FloatingNav pill (from navbar.txt). Services and
 * About open hover dropdowns; on mobile the parent link goes to the index
 * page, which lists the same children.
 */
export function FloatingNavbar() {
  const items: FloatingNavItem[] = navMenu.map((item) => ({
    name: item.label,
    link: item.href,
    icon: iconMap[item.label],
    children: item.children?.map((c) => ({ name: c.label, link: c.href })),
  }));

  return <FloatingNav navItems={items} />;
}
