// ButtonLink コンポーネントが受け取る props の型
type ButtonLinkProps = {
  href: string; // リンク先 URL または #アンカー
  children: React.ReactNode; // ボタン内に表示するテキスト
  variant?: "primary" | "outline"; // 見た目の種類（省略時 outline）
  external?: boolean; // true なら新しいタブで開く
};

// キーボード操作でも現在位置が分かるよう、両 variant 共通で focus リングを出す
const baseClasses =
  "rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900";

// variant ごとの Tailwind クラス文字列
const variantClasses = {
  primary: "bg-slate-900 text-white hover:bg-slate-700 hover:shadow-md", // 塗りつぶしボタン
  outline:
    "border border-slate-300 text-slate-800 hover:border-slate-900 hover:bg-slate-50 hover:text-slate-900", // 枠線ボタン
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
      className={`${baseClasses} ${variantClasses[variant]}`} // スタイル適用
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" } // 外部リンク用属性
        : undefined)} // 内部リンクでは追加属性なし
    >
      {children} {/* ラベル文字列 */}
    </a>
  );
}
