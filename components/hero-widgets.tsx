import { ArrowUpRight } from "lucide-react";
import { BOOK_CALL_URL } from "@/lib/site";

/** White pill badge with pulsing availability dot (reference-site pattern). */
export function SlotsBadge() {
  return (
    <a
      href={BOOK_CALL_URL}
      className="mb-8 flex items-center justify-center gap-3 rounded-full border border-border bg-white py-1 pl-3 pr-1 text-xs font-medium tracking-tighter text-gray-700 shadow-sm dark:bg-card dark:text-foreground md:text-sm"
    >
      <span className="pulse-ring" aria-hidden="true" />
      Only 2 open slots available!
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f6f7f9] dark:bg-secondary">
        <ArrowUpRight size={14} />
      </span>
    </a>
  );
}

const star =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=160&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=160&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=160&auto=format&fit=crop",
];

/** Avatar stack + five stars + review count (reference-site pattern). */
export function ReviewsWidget() {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <div className="flex items-center">
        {avatars.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            className={`h-10 w-10 rounded-full border-2 border-white object-cover dark:border-card ${i > 0 ? "-ml-3" : ""}`}
            loading="lazy"
          />
        ))}
        <span className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-semibold text-gray-900 dark:border-border dark:bg-card dark:text-foreground">
          +30
        </span>
      </div>
      <div className="flex flex-col items-start gap-1">
        <div className="flex space-x-0.5" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="15"
              height="15"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="inline text-gray-900 dark:text-foreground"
              aria-hidden="true"
            >
              <path d={star} />
            </svg>
          ))}
        </div>
        <span className="text-[13.5px] font-medium tracking-tight text-gray-600 dark:text-muted-foreground">
          From 30+ reviews
        </span>
      </div>
    </div>
  );
}
