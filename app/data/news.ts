/**
 * Recent updates — add entries at the top (newest first is fine; the page sorts by date).
 *
 * - `date`: YYYY-MM-DD (calendar date in your timezone intent)
 * - `link`: optional URL (opens in new tab when set)
 */
export type NewsItem = {
  id: string;
  date: string;
  en: { title: string; body: string };
  ja: { title: string; body: string };
  link?: string;
};

export const newsItems: NewsItem[] = [
  {
    "id": "harold-m-state-fellowship-2026",
    "date": "2026-05-04",
    "en": {
      "title": "Awarded the Harold M. State Student Research Fellowship",
      "body": "I am honored to announce that I have received the Harold M. State Student Research Fellowship at Allegheny College, which includes a $1,000 research grant. This prestigious award is presented annually to third-year students in the natural science departments who demonstrate outstanding academic performance and a commitment to learning. It is a privilege to be recognized as part of this elite group of scholars and to receive this support for my ongoing research endeavors."
    },
    "ja": {
      "title": "ハロルド・M・ステート学生研究フェローシップを受賞",
      "body": "アレゲニー大学にて「ハロルド・M・ステート学生研究フェローシップ」を受賞し、あわせて1,000ドルの研究助成金を授与されました。この賞は、自然科学部門の学部3年生の中から選出され、学業成績と研究への取り組みを評価していただきました。伝統ある学術コミュニティの一員として認められたことを励みに、この支援を活用して今後の研究活動にいっそう精進してまいります。"
    }
  }
];

export function getNewsSorted(): NewsItem[] {
  return [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
}
