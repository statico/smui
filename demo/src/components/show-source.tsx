"use client";

import { useState } from "react";
import { Code, X, Copy, Check } from "lucide-react";

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
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  if (showCode) {
    return (
      <div className="bg-card border border-border h-full flex flex-col min-h-[200px]">
        <div className="flex items-center justify-between py-2 px-3.5 border-b border-border">
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
              onClick={() => setShowCode(false)}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
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
    );
  }

  return (
    <div className="relative h-full [&>*:first-child]:h-full">
      {children}
      <button
        onClick={() => setShowCode(true)}
        className="absolute bottom-2 right-2 flex items-center gap-1 text-muted-foreground hover:text-primary px-1.5 py-0.5 bg-card/90 border border-border text-[10px] uppercase tracking-wider backdrop-blur-sm cursor-pointer transition-colors"
        title="View source"
      >
        <Code className="w-3 h-3" />
        source
      </button>
    </div>
  );
}
