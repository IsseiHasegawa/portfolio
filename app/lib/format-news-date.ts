// 言語型（"en" | "ja"）を content.ts からインポート
import type { Language } from "../data/content";

// お知らせの日付文字列を、言語に合った表示形式に変換する関数
export function formatNewsDate(iso: string, language: Language): string {
  // Intl.DateTimeFormat でロケール別フォーマットを生成して返す
  return new Intl.DateTimeFormat(language === "ja" ? "ja-JP" : "en-US", {
    year: "numeric", // 年を数字で表示
    month: "short", // 月を短い名前（May / 5月 など）
    day: "numeric", // 日を数字で表示
  }).format(new Date(`${iso}T12:00:00`)); // 正午指定でタイムゾーンずれを防ぐ
}
