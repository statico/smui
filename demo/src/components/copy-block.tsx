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
    <div className="flex max-w-full sm:max-w-fit mx-auto border border-border bg-card">
      <code className="min-w-0 flex-1 px-3 py-[7px] text-sm text-muted-foreground whitespace-nowrap leading-none overflow-hidden text-ellipsis">
        {prefix && (
          <span className="text-primary font-normal mr-[1ch]">{prefix}</span>
        )}
        {text}
      </code>
      <button
        onClick={async () => {
          if (navigator.clipboard) {
            await navigator.clipboard.writeText(text);
          } else {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
          }
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="text-xs text-muted-foreground bg-secondary border-l border-border px-3 py-[7px] leading-none uppercase tracking-wider hover:text-foreground transition-colors shrink-0 cursor-pointer"
      >
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}
