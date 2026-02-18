import { highlight } from "@/lib/highlight";

// Server component that highlights code at build time using shiki.
// The html is generated from hardcoded code strings passed via the `code` prop,
// never from user input, so dangerouslySetInnerHTML is safe here.

export async function HighlightedCode({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) {
  const html = await highlight(code, lang);

  return (
    <div
      className="bg-card border border-border p-3 text-[12px] leading-relaxed overflow-x-auto [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_code]:!text-[12px] [&_code]:!leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
