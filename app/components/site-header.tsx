// ヘッダーで使うデータ・型を content.ts からインポート
import {
  languages,
  sectionNav,
  type Content,
  type Language,
} from "../data/content";

// SiteHeader の props 型
type SiteHeaderProps = {
  name: string; // 左上に表示する名前
  nav: Content["nav"]; // ナビラベル一式
  languageLabel: string; // 言語ボタン群の説明（スクリーンリーダー用）
  language: Language; // 現在の言語
  onLanguageChange: (language: Language) => void; // 言語変更コールバック
};

// 画面上部固定のヘッダーコンポーネント
export function SiteHeader({
  name,
  nav,
  languageLabel,
  language,
  onLanguageChange,
}: SiteHeaderProps) {
  return (
  // fixed: スクロールしても上部に固定 / z-50: 他要素より前面
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        {/* 名前クリックでページ先頭へ */}
        <a href="#" className="text-sm font-bold tracking-wide text-slate-900">
          {name}
        </a>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 sm:gap-6">
          {/* sectionNav の各項目から <a> を生成 */}
          {sectionNav.map(({ href, labelKey }) => (
            <a
              key={href} // React のリスト一意キー
              href={href} // #about など
              className="transition hover:text-slate-900"
            >
              {nav[labelKey]} {/* 言語に応じたラベル */}
            </a>
          ))}

          {/* EN / 日本語 切替ボタン */}
          <div
            aria-label={languageLabel}
            className="flex rounded-full border border-slate-300 bg-white p-1"
            role="group"
          >
            {languages.map((option) => (
              <button
                key={option}
                type="button"
                lang={option} // ラベル「日本語」を英語として読み上げさせない
                aria-pressed={language === option} // 選択中かどうか
                onClick={() => onLanguageChange(option)} // 親の state を更新
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  language === option
                    ? "bg-slate-900 text-white" // 選択中スタイル
                    : "text-slate-600 hover:text-slate-900" // 未選択スタイル
                }`}
              >
                {option === "en" ? "EN" : "日本語"}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
