import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "./ui";

const METHODS = ["Телефон", "Telegram", "WhatsApp"] as const;

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [method, setMethod] = useState<(typeof METHODS)[number]>("Телефон");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setSent(false);
  }, [open]);

  if (!open) return null;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // Форма пока не подключена к серверу: заявка не отправляется на бэкенд.
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-4">
      <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-border bg-surface p-6 sm:rounded-2xl">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl">{sent ? "Заявка отправлена" : "Получить консультацию"}</h3>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        {sent ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto size-12 text-primary" />
            <p className="mt-4 text-base font-semibold text-foreground">
              Спасибо! Заявка отправлена. Специалист свяжется с вами.
            </p>
            <Button className="mt-6 w-full" size="lg" onClick={onClose}>
              Закрыть
            </Button>
          </div>
        ) : (
          <form className="mt-5 space-y-4" onSubmit={submit}>
            <Field label="Имя">
              <input required name="name" className={inputClass} placeholder="Ваше имя" />
            </Field>
            <Field label="Телефон">
              <input
                required
                name="phone"
                type="tel"
                className={inputClass}
                placeholder="+7 (___) ___-__-__"
              />
            </Field>
            <Field label="Что произошло?">
              <textarea
                name="message"
                rows={3}
                className={inputClass}
                placeholder="Коротко опишите повреждения"
              />
            </Field>
            <Field label="Фото повреждений">
              <input
                type="file"
                name="photos"
                accept="image/*"
                multiple
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-muted-foreground file:mr-3 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-xs file:font-bold file:text-foreground"
              />
            </Field>
            <Field label="Удобный способ связи">
              <div className="flex gap-2">
                {METHODS.map((m) => (
                  <button
                    type="button"
                    key={m}
                    onClick={() => setMethod(m)}
                    className={`flex-1 rounded-md border px-3 py-2.5 text-sm font-semibold transition-colors ${
                      method === m
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-input text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </Field>

            <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
              <input
                required
                type="checkbox"
                className="mt-0.5 size-4 accent-[var(--primary)]"
              />
              Согласен на обработку персональных данных
            </label>

            <Button type="submit" size="lg" className="w-full">
              Отправить заявку
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}
