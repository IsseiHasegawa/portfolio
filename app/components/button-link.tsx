// ButtonLink コンポーネントが受け取る props の型
type ButtonLinkProps = {
  href: string; // リンク先 URL または #アンカー
  children: React.ReactNode; // ボタン内に表示するテキスト
  variant?: "primary" | "outline"; // 見た目の種類（省略時 outline）
  external?: boolean; // true なら新しいタブで開く
};

// variant ごとの Tailwind クラス文字列
const variantClasses = {
  primary:
    "rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800", // 塗りつぶしボタン
  outline:
    "rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900", // 枠線ボタン
} as const;

// ボタン風の <a> タグを返すコンポーネント
export function ButtonLink({
  href,
  children,
  variant = "outline", // デフォルトは枠線スタイル
  external = false, // デフォルトは同じタブで開く
}: ButtonLinkProps) {
  return (
    <a
      href={href} // 遷移先
      className={variantClasses[variant]} // スタイル適用
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" } // 外部リンク用属性
        : undefined)} // 内部リンクでは追加属性なし
    >
      {children} {/* ラベル文字列 */}
    </a>
  );
}
