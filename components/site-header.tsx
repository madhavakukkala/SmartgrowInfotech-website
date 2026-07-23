import Link from "next/link";
import Image from "next/image";
import ButtonWithIcon from "@/components/ui/button-with-icon";
import { BOOK_CALL_URL, site } from "@/lib/site";

/**
 * Top header row: logo on the left, Book a Call on the right, both in their
 * normal places. The FloatingNav pill (links only) floats in the center.
 * Not sticky; it scrolls away with the page.
 */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" aria-label={`${site.name} home`} className="flex items-center">
          <Image
            src="/logo/logo-light.png"
            alt={site.name}
            width={320}
            height={113}
            priority
            className="h-[52px] w-auto md:h-16 dark:hidden"
          />
          <Image
            src="/logo/logo-dark.png"
            alt={site.name}
            width={320}
            height={113}
            priority
            className="hidden h-[52px] w-auto md:h-16 dark:block"
          />
        </Link>
        <ButtonWithIcon label="Book a Call" href={BOOK_CALL_URL} />
      </div>
    </header>
  );
}
