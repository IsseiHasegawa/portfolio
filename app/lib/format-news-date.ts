import type { Language } from "../data/content";

export function formatNewsDate(iso: string, language: Language): string {
  return new Intl.DateTimeFormat(language === "ja" ? "ja-JP" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(`${iso}T12:00:00`));
}
