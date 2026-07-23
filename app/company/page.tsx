import { redirect } from "next/navigation";

/** The company story moved to /about (owner decision, 23 Jul 2026). */
export default function CompanyPage() {
  redirect("/about");
}
