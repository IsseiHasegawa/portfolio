import { getNewsSorted } from "../data/news";
import type { Content, Language } from "../data/content";
import { formatNewsDate } from "../lib/format-news-date";
import { Section } from "./section";

type NewsSectionProps = {
  news: Content["news"];
  language: Language;
};

const newsItems = getNewsSorted();

export function NewsSection({ news, language }: NewsSectionProps) {
  return (
    <Section id="news" title={news.title} titleSpacing="wide">
      {newsItems.length === 0 ? (
        <p className="text-slate-500">{news.empty}</p>
      ) : (
        <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-2">
          {newsItems.map((item) => {
            const copy = item[language];
            const titleClass =
              "text-lg font-semibold text-slate-900 transition hover:text-slate-600";

            return (
              <li key={item.id} className="py-6 first:pt-4 last:pb-4">
                <time
                  dateTime={item.date}
                  className="text-sm font-medium text-slate-500"
                >
                  {formatNewsDate(item.date, language)}
                </time>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-2 block ${titleClass}`}
                  >
                    {copy.title}
                  </a>
                ) : (
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
