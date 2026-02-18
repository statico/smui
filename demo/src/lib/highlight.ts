import { codeToHtml } from "shiki";

export async function highlight(code: string, lang = "tsx"): Promise<string> {
  return codeToHtml(code, {
    lang,
    theme: "nord",
  });
}
