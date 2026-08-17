type TagListProps = {
  items: readonly string[];
  label?: string; // 支援技術向けの一覧名（見出しを兼ねない場合に使う）
};

// 技術スタックや履修科目を並べるピル型のリスト
export function TagList({ items, label }: TagListProps) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
