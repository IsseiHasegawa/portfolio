type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  titleSpacing?: "normal" | "wide";
};

export function Section({
  id,
  title,
  children,
  titleSpacing = "normal",
}: SectionProps) {
  const titleMargin = titleSpacing === "wide" ? "mb-8" : "mb-6";

  return (
    <section id={id} className="border-t border-slate-200 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2
          className={`${titleMargin} text-3xl font-bold text-slate-900`}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
