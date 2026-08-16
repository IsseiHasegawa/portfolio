// お知らせ1件分のデータ構造を TypeScript の型として定義
export type NewsItem = {
  id: string; // 一意 ID（React の key に使用）
  date: string; // "YYYY-MM-DD" 形式（ソート用）
  en: { title: string; body: string }; // 英語の見出しと本文
  ja: { title: string; body: string }; // 日本語の見出しと本文
  link?: string; // 任意: あるとタイトルが外部リンクになる
};

// お知らせの実データ配列（ここに追記して更新）
export const newsItems: NewsItem[] = [
  {
    id: "harold-m-state-fellowship-2026", // このエントリの識別子
    date: "2026-05-04", // 公開日・表示日
    en: {
      title: "Awarded the Harold M. State Student Research Fellowship", // 英語タイトル
      body: "I am honored to announce that I have received the Harold M. State Student Research Fellowship at Allegheny College, which includes a $1,000 research grant. This prestigious award is presented annually to third-year students in the natural science departments who demonstrate outstanding academic performance and a commitment to learning. It is a privilege to be recognized as part of this elite group of scholars and to receive this support for my ongoing research endeavors.", // 英語本文
    },
    ja: {
      title: "ハロルド・M・ステート学生研究フェローシップを受賞", // 日本語タイトル
      body: "アレゲニー大学にて「ハロルド・M・ステート学生研究フェローシップ」を受賞し、あわせて1,000ドルの研究助成金を授与されました。この賞は、自然科学部門の学部3年生の中から選出され、学業成績と研究への取り組みを評価していただきました。伝統ある学術コミュニティの一員として認められたことを励みに、この支援を活用して今後の研究活動にいっそう精進してまいります。", // 日本語本文
    },
    // link を省略 → タイトルはリンクにならない
  },
];

// 日付の新しい順に並べ替えたコピーを返す
export function getNewsSorted(): NewsItem[] {
  return [...newsItems].sort((a, b) => b.date.localeCompare(a.date)); // b と a の順で降順ソート
}
