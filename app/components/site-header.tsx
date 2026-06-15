import {
  languages,
  sectionNav,
  type Content,
  type Language,
} from "../data/content";

type SiteHeaderProps = {
  name: string;
  nav: Content["nav"];
  languageLabel: string;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function SiteHeader({
  name,
  nav,
  languageLabel,
  language,
  onLanguageChange,
}: SiteHeaderProps) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="text-sm font-bold tracking-wide text-slate-900">
          {name}
        </a>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 sm:gap-6">
          {sectionNav.map(({ href, labelKey }) => (
            <a
              key={href}
              href={href}
              className="transition hover:text-slate-900"
            >
              {nav[labelKey]}
            </a>
          ))}

          <div
            aria-label={languageLabel}
            className="flex rounded-full border border-slate-300 bg-white p-1"
            role="group"
          >
            {languages.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={language === option}
                onClick={() => onLanguageChange(option)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  language === option
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
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
