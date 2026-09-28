import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeImage from "@/assets/before-damage.jpg";
import afterImage from "@/assets/after-repair.jpg.asset.json";
import { Button, SectionHeading } from "./ui";

export function BeforeAfter({ onRequest }: { onRequest: () => void }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      update(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [update]);

  return (
    <section id="works" className="bg-background py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading
          eyebrow="Наши работы"
          title="Результат видно сразу"
          subtitle="От повреждённого кузова — к восстановленному автомобилю."
        />

        <div
          ref={ref}
          onPointerDown={(e) => {
            dragging.current = true;
            update(e.clientX);
          }}
          className="relative mt-10 aspect-[16/10] w-full cursor-ew-resize touch-none overflow-hidden rounded-2xl border border-border select-none sm:aspect-[16/9]"
        >
          <img
            src={afterImage.url}
            alt="Кузов автомобиля после ремонта и окраски"
            loading="lazy"
            width={1920}
            height={1296}
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt="Повреждённый кузов автомобиля до ремонта"
              loading="lazy"
              width={1280}
              height={864}
              className="size-full object-cover"
            />
          </div>

          <span className="absolute top-4 left-4 rounded-md bg-background/80 px-3 py-1 text-xs font-extrabold tracking-[0.2em] text-foreground backdrop-blur">
            ДО
          </span>
          <span className="absolute top-4 right-4 rounded-md bg-primary px-3 py-1 text-xs font-extrabold tracking-[0.2em] text-primary-foreground">
            ПОСЛЕ
          </span>

          <div
            className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary"
            style={{ left: `${pos}%` }}
          >
            <span className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-accent)]">
              <MoveHorizontal className="size-5" />
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button size="lg" onClick={onRequest}>
            Показать мой автомобиль
          </Button>
        </div>
      </div>
    </section>
  );
}
