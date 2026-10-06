import { useState } from "react";
import { ArrowRight, Check, ChevronDown, MapPin, Navigation, Phone } from "lucide-react";
import paintBooth from "@/assets/paint-booth.jpg";
import {
  ADVANTAGES,
  EQUIPMENT,
  FAQ,
  LOCATIONS,
  PAINT_STEPS,
  PHONE,
  PHONE_HREF,
  PROCESS,
  SERVICES,
  mapMarkersSrc,
  mapRoute,
} from "@/lib/site-data";
import { Button, LinkButton, SectionHeading } from "./ui";

export function Advantages() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading
          eyebrow="Полный цикл"
          title="Восстанавливаем автомобиль полностью"
          subtitle="От оценки повреждений до финальной обработки и выдачи автомобиля."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((item) => (
            <article key={item.title} className="card-surface bg-background p-6">
              <span className="flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary">
                <Check className="size-5" />
              </span>
              <h3 className="mt-5 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services({ onRequest }: { onRequest: () => void }) {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading eyebrow="Что мы делаем" title="Услуги" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.num} className="card-surface group flex flex-col p-6">
              <span className="text-4xl font-extrabold text-primary/30 transition-colors group-hover:text-primary">
                {s.num}
              </span>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <button
                onClick={onRequest}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary"
              >
                Подробнее <ArrowRight className="size-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PhotoEstimate({ onRequest }: { onRequest: () => void }) {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="section-x">
        <div className="rounded-2xl border border-border bg-background p-8 sm:p-14">
          <SectionHeading
            eyebrow="Оценка по фото"
            title="Не знаете, сколько будет стоить ремонт?"
            subtitle="Отправьте фотографии повреждений — специалист подскажет, с чего начать и какой вариант ремонта возможен."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={onRequest}>
              Отправить фото повреждений
            </Button>
            <LinkButton href={PHONE_HREF} variant="outline" size="lg">
              <Phone className="size-4" /> Позвонить
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const BODY_LIST = [
  "Восстановление геометрии",
  "Ремонт кузовных элементов",
  "Удаление вмятин",
  "Ремонт после ДТП",
  "Ремонт пластиковых элементов",
  "Подготовка кузова к окраске",
];

export function BodyRepair({ onRequest }: { onRequest: () => void }) {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="section-x grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Кузовной ремонт"
            title="Восстанавливаем кузов, а не просто скрываем повреждения"
            subtitle="Выполняем кузовной ремонт автомобилей после ДТП и различных повреждений — от локальных вмятин и царапин до сложного восстановления геометрии кузова."
          />
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Для сложных работ используем профессиональное оборудование для восстановления и контроля
            геометрии кузова.
          </p>
          <Button size="lg" className="mt-8" onClick={onRequest}>
            Обсудить ремонт
          </Button>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {BODY_LIST.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-4 text-sm font-semibold"
            >
              <Check className="size-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PaintRepair() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="section-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={paintBooth}
              alt="Окрасочно-сушильная камера и покраска кузовного элемента"
              loading="lazy"
              width={1280}
              height={864}
              className="size-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Малярные работы"
              title="Подберём цвет и восстановим покрытие"
              subtitle="Выполняем локальную и полную окраску автомобиля с профессиональной подготовкой поверхности, подбором оттенка, нанесением покрытия, сушкой и финишной обработкой."
            />
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PAINT_STEPS.map((step) => (
            <div key={step.num} className="card-surface bg-background p-5">
              <span className="text-xs font-extrabold tracking-[0.2em] text-primary">
                {step.num}
              </span>
              <h3 className="mt-2 text-base">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Equipment() {
  return (
    <section id="equipment" className="bg-background py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading eyebrow="Оборудование" title="Технологии для точного восстановления" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPMENT.map((item) => (
            <article key={item.title} className="card-surface p-6">
              <h3 className="text-lg tracking-tight">{item.title}</h3>
              <span className="mt-3 block h-px w-10 bg-primary" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-surface py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading eyebrow="Процесс" title="Как проходит ремонт" />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-6">
          {PROCESS.map((step) => (
            <li key={step.num} className="bg-background p-6">
              <span className="text-xs font-extrabold tracking-[0.2em] text-primary">
                {step.num}
              </span>
              <h3 className="mt-2 text-base">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Pricing({ onRequest }: { onRequest: () => void }) {
  return (
    <section id="pricing" className="bg-light py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading
          light
          eyebrow="Цены"
          title="Ориентировочная стоимость"
          subtitle="Итоговая цена зависит от состояния автомобиля, площади повреждений, типа покрытия и объёма работ."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { title: "Окраска отдельного элемента", price: "от 23 000 ₽" },
            { title: "Полная окраска автомобиля", price: "от 300 000 ₽" },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-xl border border-light-foreground/12 bg-background/[0.03] p-8"
            >
              <h3 className="text-xl text-light-foreground">{card.title}</h3>
              <p className="mt-4 text-3xl font-extrabold text-primary">{card.price}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-light-foreground/60">
          Точная стоимость определяется после осмотра автомобиля и оценки объёма работ.
        </p>
        <Button size="lg" className="mt-8" onClick={onRequest}>
          Получить расчёт
        </Button>
      </div>
    </section>
  );
}

export function Locations() {
  return (
    <section id="locations" className="bg-background py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading eyebrow="Адреса" title="3 сервисных адреса в Ростове-на-Дону" />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <article key={loc.name} className="card-surface flex flex-col p-6">
              <MapPin className="size-5 text-primary" />
              <h3 className="mt-4 text-lg leading-snug">{loc.name}</h3>
              <p className="mt-1 text-sm font-semibold">{loc.address}</p>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{loc.city}</p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <LinkButton
                  href={mapRoute(loc.address)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1"
                >
                  <Navigation className="size-4" /> Построить маршрут
                </LinkButton>
                <LinkButton href={PHONE_HREF} variant="outline" className="flex-1">
                  <Phone className="size-4" /> Позвонить
                </LinkButton>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Карта сервисных адресов АвтоВизаж в Ростове-на-Дону"
            src={mapMarkersSrc()}
            loading="lazy"
            className="h-[380px] w-full"
          />
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Демо-отзыв",
    car: "Пример карточки",
    text: "Здесь будут реальные отзывы клиентов. Блок подготовлен под загрузку настоящих отзывов.",
  },
  {
    name: "Демо-отзыв",
    car: "Пример карточки",
    text: "Место для отзыва клиента: имя, короткий текст, автомобиль и дата.",
  },
  {
    name: "Демо-отзыв",
    car: "Пример карточки",
    text: "Пока отзывы не предоставлены — контент является демонстрационным.",
  },
];

export function Reviews() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading eyebrow="Отзывы" title="Отзывы клиентов" />
        <p className="mt-3 text-xs font-bold tracking-wide text-primary uppercase">
          Демо-контент: заменить на реальные отзывы
        </p>
        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              className="w-[85%] shrink-0 snap-start rounded-xl border border-border bg-background p-6 sm:w-[360px]"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              <p className="mt-6 text-sm font-bold">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.car}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
        <div className="mt-10 divide-y divide-border border-y border-border">
          {FAQ.map((item, i) => (
            <div key={item.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-base font-bold sm:text-lg">{item.q}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i ? (
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({ onRequest }: { onRequest: () => void }) {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="section-x text-center">
        <SectionHeading
          align="center"
          eyebrow="Свяжитесь с нами"
          title="Автомобиль повреждён?"
          subtitle="Покажите нам, что произошло. Поможем определить дальнейшие шаги по ремонту."
        />
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" onClick={onRequest}>
            Отправить фото повреждений
          </Button>
          <LinkButton href={PHONE_HREF} variant="outline" size="lg">
            <Phone className="size-4" /> Позвонить {PHONE}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
