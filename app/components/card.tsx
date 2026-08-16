// Card の props: 中身だけ親から受け取る
type CardProps = {
  children: React.ReactNode;
};

// 角丸・薄グレー背景のカード枠
export function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      {children}
    </div>
  );
}
