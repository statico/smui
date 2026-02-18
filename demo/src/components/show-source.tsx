"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Copy, Check } from "lucide-react";

// NOTE: The `html` prop is generated server-side by shiki at build time from
// hardcoded code strings in page.tsx. It never contains user-supplied content,
// so dangerouslySetInnerHTML is safe here.

export function ShowSource({
  children,
  code,
  html,
}: {
  children: React.ReactNode;
  code: string;
  html?: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer h-full [&>*:first-child]:h-full"
        title="Click to view source"
      >
        {children}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative bg-card border border-border w-full max-w-[720px] max-h-[80vh] flex flex-col z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between py-2.5 px-3.5 border-b border-border shrink-0">
              <span className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase">
                source
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={async () => {
                    await navigator.clipboard.writeText(code);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  title="Copy"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[hsl(var(--smui-green))]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <button
                  onClick={close}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Code */}
            {html ? (
              <div
                className="flex-1 p-3.5 text-[12px] leading-relaxed overflow-auto [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_code]:!text-[12px] [&_code]:!leading-relaxed"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : (
              <pre className="flex-1 p-3.5 text-[12px] leading-relaxed text-muted-foreground overflow-auto">
                <code>{code}</code>
              </pre>
            )}
          </div>
        </div>
      )}
    </>
  );
}
