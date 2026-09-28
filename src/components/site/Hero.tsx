import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";
import { PHONE, PHONE_HREF } from "@/lib/site-data";
import { Button, LinkButton } from "./ui";

const TRUST = [
  "Кузовной ремонт",
  "Малярные работы",
  "Восстановление геометрии",
  "3 сервисных адреса",
];

export function Hero({ onRequest }: { onRequest: () => void }) {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Премиальный автомобиль на кузовном ремонте в сервисе АвтоВизаж"
        width={1920}
        height={1200}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="section-x relative pt-32 pb-16">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">Ростов-на-Дону</span>
          <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Восстановим автомобиль после ДТП и повреждений
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Кузовной и малярный ремонт в Ростове-на-Дону — от локальных повреждений до сложного
            восстановления кузова.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={onRequest}>
              Получить расчёт ремонта
            </Button>
            <LinkButton href={PHONE_HREF} variant="outline" size="lg">
              <Phone className="size-4" />
              Позвонить {PHONE}
            </LinkButton>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {TRUST.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
