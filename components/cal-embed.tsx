"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { CAL_LINK } from "@/lib/site";

declare global {
  interface Window {
    Cal?: any;
  }
}

/**
 * cal.com inline embed (owner-provided snippet, adapted for React and the
 * site's light/dark toggle). The calendar follows the active theme and uses
 * the site's blue as its brand color.
 */
export function CalEmbed() {
  const { resolvedTheme } = useTheme();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const initialized = React.useRef(false);

  React.useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Loader from the official cal.com embed snippet.
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "30min", { origin: "https://app.cal.com" });
    window.Cal.config = window.Cal.config || {};
    window.Cal.config.forwardQueryParams = true;

    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: resolvedTheme ?? "auto",
      },
      calLink: CAL_LINK,
    });

    window.Cal.ns["30min"]("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#0067f3" },
        dark: { "cal-brand": "#0067f3" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the calendar in sync with the site's theme toggle.
  React.useEffect(() => {
    if (!initialized.current || !resolvedTheme) return;
    window.Cal?.ns?.["30min"]?.("ui", { theme: resolvedTheme });
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      id="my-cal-inline-30min"
      className="min-h-[70vh] w-full overflow-auto rounded-2xl border border-border bg-card"
    />
  );
}
