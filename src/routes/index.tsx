import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import {
  Advantages,
  BodyRepair,
  Equipment,
  Faq,
  FinalCta,
  Locations,
  PaintRepair,
  PhotoEstimate,
  Pricing,
  Process,
  Reviews,
  Services,
} from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";
import { ContactModal } from "@/components/site/ContactModal";

const TITLE = "Кузовной и малярный ремонт в Ростове-на-Дону | АвтоВизаж";
const DESCRIPTION =
  "Кузовной и малярный ремонт автомобилей в Ростове-на-Дону. Восстановление после ДТП, ремонт кузова, покраска, подбор запчастей. 3 сервисных адреса.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const onRequest = () => setOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Header onRequest={onRequest} />
      <main>
        <Hero onRequest={onRequest} />
        <Advantages />
        <Services onRequest={onRequest} />
        <BeforeAfter onRequest={onRequest} />
        <PhotoEstimate onRequest={onRequest} />
        <BodyRepair onRequest={onRequest} />
        <PaintRepair />
        <Equipment />
        <Process />
        <Pricing onRequest={onRequest} />
        <Reviews />
        <Locations />
        <Faq />
        <FinalCta onRequest={onRequest} />
      </main>
      <Footer />
      <MobileBar onRequest={onRequest} />
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
