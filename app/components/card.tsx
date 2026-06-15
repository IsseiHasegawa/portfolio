type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      {children}
    </div>
  );
}
