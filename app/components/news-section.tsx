import { getNewsSorted } from "../data/news";
import type { Content, Language } from "../data/content";
import { formatNewsDate } from "../lib/format-news-date";
import { Section } from "./section";

// お知らせセクションの props
type NewsSectionProps = {
  news: Content["news"]; // 見出し・空メッセージ
  language: Language; // 表示言語（item.en / item.ja の選択に使用）
};

// モジュール読み込み時に一度ソート（静的サイトなので実行中は変わらない）
const newsItems = getNewsSorted();

// お知らせ一覧セクション
export function NewsSection({ news, language }: NewsSectionProps) {
  return (
    <Section id="news" title={news.title} titleSpacing="wide">
      {newsItems.length === 0 ? (
        // データが0件のとき
        <p className="text-slate-500">{news.empty}</p>
      ) : (
        // 1件以上あるときはリスト表示
        <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-2">
          {newsItems.map((item) => {
            const copy = item[language]; // 現在言語の title/body
            const titleClass =
              "text-lg font-semibold text-slate-900 transition hover:text-slate-600";

            return (
              <li key={item.id} className="py-6 first:pt-4 last:pb-4">
                <time
                  dateTime={item.date} // 機械可読な日付
                  className="text-sm font-medium text-slate-500"
                >
                  {formatNewsDate(item.date, language)} {/* 人間向け日付 */}
                </time>

                {item.link ? (
                  // リンク付きお知らせ
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-2 block ${titleClass}`}
                  >
                    {copy.title}
                  </a>
                ) : (
                  // リンクなしお知らせ
                  <h3 className={`mt-2 ${titleClass}`}>{copy.title}</h3>
                )}

                <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
                  {copy.body}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}
