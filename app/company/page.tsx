"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * The company story moved to /about. Client-side redirect (server
 * redirect() is not available with static export).
 */
export default function CompanyPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/about");
  }, [router]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <p className="text-sm text-muted-foreground">
        This page moved.{" "}
        <Link href="/about" className="text-brand-blue underline-offset-4 hover:underline">
          Go to About Us
        </Link>
      </p>
    </section>
  );
}
