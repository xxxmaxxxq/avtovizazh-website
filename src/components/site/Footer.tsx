import { EMAIL, LOCATIONS, NAV, PHONE, PHONE_HREF } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14 pb-28 lg:pb-14">
      <div className="section-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold tracking-[0.14em]">
            AVTO<span className="text-primary">VIZAZH</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Кузовной и малярный ремонт</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-4 block text-sm font-semibold hover:text-primary"
          >
            {EMAIL}
          </a>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Телефон
          </p>
          <a href={PHONE_HREF} className="mt-3 block text-lg font-bold hover:text-primary">
            {PHONE}
          </a>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Адреса
          </p>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            {LOCATIONS.map((l) => (
              <li key={l.name}>
                <span className="font-bold text-foreground">{l.name}:</span> {l.address},{" "}
                {l.city}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Навигация
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted-foreground hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
