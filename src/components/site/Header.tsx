import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV, PHONE, PHONE_HREF } from "@/lib/site-data";
import { LinkButton } from "./ui";
import { cn } from "@/lib/utils";

export function Header({ onRequest }: { onRequest: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/92 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="section-x flex items-center justify-between gap-6 py-3">
        <a href="#top" className="text-lg font-extrabold tracking-[0.14em] text-foreground">
          AVTO<span className="text-primary">VIZAZH</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={PHONE_HREF}
            className="text-sm font-bold text-foreground transition-colors hover:text-primary"
          >
            {PHONE}
          </a>
          <button
            onClick={onRequest}
            className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground transition-all hover:brightness-110"
          >
            Получить расчёт
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LinkButton href={PHONE_HREF} variant="outline" size="sm" aria-label="Позвонить">
            <Phone className="size-4" />
          </LinkButton>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="section-x flex flex-col py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base font-semibold text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
