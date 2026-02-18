"use client";

import { useState } from "react";

export function CopyBlock({
  text,
  prefix,
}: {
  text: string;
  prefix?: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center max-w-fit mx-auto border border-border bg-card">
      <code className="flex-1 px-3 py-[7px] text-sm text-muted-foreground whitespace-nowrap">
        {prefix && (
          <span className="text-primary font-normal mr-[1ch]">{prefix}</span>
        )}
        {text}
      </code>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="text-xs text-muted-foreground bg-secondary border-l border-border px-3 uppercase tracking-wider hover:text-foreground transition-colors shrink-0 cursor-pointer flex items-center"
      >
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}
