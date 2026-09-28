import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-bold tracking-tight transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-110 hover:-translate-y-0.5 shadow-[var(--shadow-accent)]",
  outline:
    "border border-border bg-transparent text-foreground hover:border-primary hover:text-foreground",
  ghostLight:
    "border border-light-foreground/20 bg-transparent text-light-foreground hover:border-primary",
  solidLight: "bg-light text-light-foreground hover:brightness-95",
} as const;

const sizes = {
  md: "h-11 px-5",
  lg: "h-14 px-7 text-base",
  sm: "h-9 px-4 text-xs",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: Size }) {
  return <a className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={cn(
          "mt-3 text-3xl leading-[1.08] sm:text-4xl lg:text-5xl",
          light ? "text-light-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-light-foreground/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
