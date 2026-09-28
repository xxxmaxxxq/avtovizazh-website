import { Camera, Phone } from "lucide-react";
import { PHONE_HREF } from "@/lib/site-data";

export function MobileBar({ onRequest }: { onRequest: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
      <a
        href={PHONE_HREF}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border text-sm font-bold"
      >
        <Phone className="size-4" /> Позвонить
      </a>
      <button
        onClick={onRequest}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary text-sm font-bold text-primary-foreground"
      >
        <Camera className="size-4" /> Отправить фото
      </button>
    </div>
  );
}
