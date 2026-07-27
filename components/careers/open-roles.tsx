"use client";

import * as React from "react";
import { ChevronDown, Loader2, MapPin, Send, Upload } from "lucide-react";
import { jobs } from "@/lib/jobs";
import { APPLY_ENDPOINT, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const MAX_FILE_MB = 5;
const ACCEPTED = [".pdf", ".doc", ".docx"];

/** Open roles: expandable job descriptions + the application form. */
export function OpenRoles() {
  const [expanded, setExpanded] = React.useState<string | null>(jobs[0]?.id ?? null);
  const [role, setRole] = React.useState<string>(jobs[0]?.title ?? "");
  const formRef = React.useRef<HTMLDivElement>(null);

  const applyFor = (title: string) => {
    setRole(title);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Job cards */}
      <div className="space-y-4">
        {jobs.map((job) => {
          const open = expanded === job.id;
          return (
            <article
              key={job.id}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                type="button"
                onClick={() => setExpanded(open ? null : job.id)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <div>
                  <h3 className="text-lg font-bold tracking-tight md:text-xl">
                    {job.title}
                  </h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {job.location}
                    </span>
                    <span>{job.type}</span>
                    {job.salary && (
                      <span className="font-medium text-brand-blue">{job.salary}</span>
                    )}
                  </p>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                    open && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>

              {open && (
                <div className="border-t border-border px-6 pb-6 pt-5">
                  <p className="max-w-2xl text-[15px] leading-snug tracking-tight text-muted-foreground">
                    {job.intro}
                  </p>
                  <div className="mt-6 grid gap-8 md:grid-cols-2">
                    {job.sections.map((s) => (
                      <div key={s.heading}>
                        <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          {s.heading}
                        </h4>
                        <ul className="space-y-2">
                          {s.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-foreground"
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => applyFor(job.title)}
                    className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Apply for this role
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Application form */}
      <div ref={formRef} className="scroll-mt-28 pt-16">
        <h3 className="text-xl font-bold tracking-tight md:text-2xl">
          Apply now
        </h3>
        <p className="mt-1 text-[15px] tracking-tight text-muted-foreground">
          Fill this in, attach your resume, and we'll get back to you.
        </p>
        <ApplicationForm role={role} onRoleChange={setRole} />
      </div>
    </>
  );
}

function ApplicationForm({
  role,
  onRoleChange,
}: {
  role: string;
  onRoleChange: (r: string) => void;
}) {
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "done" | "error"
  >("idle");
  const [error, setError] = React.useState("");
  const [fileName, setFileName] = React.useState("");

  // No endpoint configured yet: show the email fallback instead of a form
  // that can't submit.
  if (!APPLY_ENDPOINT) {
    return (
      <div className="mt-6 rounded-2xl border border-border bg-card p-6">
        <p className="text-[15px] leading-snug tracking-tight text-muted-foreground">
          Email your resume to{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-brand-blue underline-offset-4 hover:underline"
          >
            {site.email}
          </a>{" "}
          with the subject line{" "}
          <span className="font-mono text-[13px] text-foreground">
            "Application – {role || "[Role]"} – [Your Name]"
          </span>
          . Include your phone number and a portfolio link if you have one.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const file = fd.get("resume") as File | null;

    if (!file || file.size === 0) {
      setError("Please attach your resume.");
      setStatus("error");
      return;
    }
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setError(`Resume must be under ${MAX_FILE_MB} MB.`);
      setStatus("error");
      return;
    }
    const ext = "." + (file.name.split(".").pop() || "").toLowerCase();
    if (!ACCEPTED.includes(ext)) {
      setError("Please upload a PDF, DOC, or DOCX file.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const resumeBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () =>
          resolve((reader.result as string).split(",")[1] ?? "");
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const payload = {
        role: fd.get("role"),
        name: fd.get("name"),
        email: fd.get("email"),
        phone: fd.get("phone"),
        experience: fd.get("experience"),
        portfolio: fd.get("portfolio"),
        note: fd.get("note"),
        resumeName: file.name,
        resumeType: file.type || "application/octet-stream",
        resumeBase64,
      };

      // text/plain keeps this a "simple" request so the Apps Script web app
      // accepts it cross-origin without a preflight.
      const res = await fetch(APPLY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({ ok: res.ok }));
      if (!data.ok) throw new Error(data.error || "Submission failed");

      setStatus("done");
      form.reset();
      setFileName("");
    } catch (err) {
      setError(
        "Something went wrong sending your application. Please try again, or email us at " +
          site.email,
      );
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-6">
        <p className="text-[15px] font-medium text-foreground">
          Application received. Thank you!
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          We read every application and we'll reach out if it's a fit.
        </p>
      </div>
    );
  }

  const inputCls =
    "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Applying for
        <select
          name="role"
          value={role}
          onChange={(e) => onRoleChange(e.target.value)}
          className={inputCls}
          required
        >
          {jobs.map((j) => (
            <option key={j.id} value={j.title}>
              {j.title}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Full name
        <input name="name" type="text" required placeholder="Your name" className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Email
        <input name="email" type="email" required placeholder="you@example.com" className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Phone
        <input name="phone" type="tel" required placeholder="+91" className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Years of experience
        <input name="experience" type="text" required placeholder="e.g. 2 years" className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Portfolio / LinkedIn (optional)
        <input name="portfolio" type="url" placeholder="https://" className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium sm:col-span-2">
        Why you? (optional)
        <textarea
          name="note"
          rows={3}
          placeholder="A few lines about you and this role"
          className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </label>
      <label className="flex cursor-pointer flex-col gap-1.5 text-sm font-medium sm:col-span-2">
        Resume (PDF, DOC, DOCX · max {MAX_FILE_MB} MB)
        <span className="flex h-11 items-center gap-2 rounded-xl border border-dashed border-border bg-background px-3.5 text-sm text-muted-foreground">
          <Upload className="h-4 w-4" aria-hidden="true" />
          {fileName || "Choose file"}
        </span>
        <input
          name="resume"
          type="file"
          accept={ACCEPTED.join(",")}
          required
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-destructive sm:col-span-2">{error}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Submit application
              <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
