// Section コンポーネントの props 型
type SectionProps = {
  id: string; // HTML id（#about などのジャンプ先）
  title: string; // <h2> に表示するセクションタイトル
  children: React.ReactNode; // セクション本文（コンポーネントが渡す）
  titleSpacing?: "normal" | "wide"; // 見出し下の余白の大きさ
};

// 各セクション共通の外枠レイアウト
export function Section({
  id,
  title,
  children,
  titleSpacing = "normal", // 省略時は mb-6 相当
}: SectionProps) {
  // wide のとき見出し下余白を広くする
  const titleMargin = titleSpacing === "wide" ? "mb-8" : "mb-6";

  return (
    <section id={id} className="border-t border-slate-200 px-6 py-20">
      {/* コンテンツ最大幅を max-w-5xl で中央寄せ */}
      <div className="mx-auto max-w-5xl">
        <h2 className={`${titleMargin} text-3xl font-bold text-slate-900`}>
          {title}
        </h2>
        {children} {/* 各セクション固有の中身 */}
      </div>
    </section>
  );
}
