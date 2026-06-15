type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
};

const variantClasses = {
  primary:
    "rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800",
  outline:
    "rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "outline",
  external = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={variantClasses[variant]}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
