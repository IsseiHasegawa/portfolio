// Card の props: 中身だけ親から受け取る
type CardProps = {
  children: React.ReactNode;
};

// 角丸・薄グレー背景のカード枠。
// ホバーは境界と影だけを動かす。背景色やカーソルを変えるとリンクだと誤解されるため。
export function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:border-slate-300 hover:shadow-sm">
      {children}
    </div>
  );
}
