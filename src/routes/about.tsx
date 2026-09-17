import { createFileRoute } from "@tanstack/react-router";
import { useCopy } from "@/components/site-shell";
import { CtaRow, SectionTag } from "@/components/service-ui";
import { BrandMark } from "@/components/brand-mark";
import founder from "@/assets/founder.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos · HK Concierge & Bridge" },
      {
        name: "description",
        content:
          "HK Concierge & Bridge accompagne les nouveaux arrivants et les familles à Hong Kong avec un interlocuteur unique, en français, anglais et chinois traditionnel.",
      },
      { property: "og:title", content: "À propos de HK Concierge & Bridge" },
      {
        property: "og:description",
        content: "Une conciergerie humaine à Hong Kong : confiance, discrétion et réponse rapide.",
      },
      { property: "og:image", content: `https://www.hkconciergebridge.com.hk${founder.url}` },
    ],
  }),
  component: About,
});

function About() {
  const t = useCopy();
  return (
    <div>
      <section className="border-b-4 border-ink bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionTag>{t.about}</SectionTag>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              {t.bridgeTitle}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/70">{t.bridgeBody}</p>
            <p className="mt-4 max-w-xl text-ink/65">{t.heroBody}</p>
            <div className="mt-8">
              <CtaRow label={t.appointment} />
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border-2 border-ink shadow-pop">
            <img src={founder.url} alt="Fondateur de HK Concierge & Bridge" className="w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionTag>{t.values}</SectionTag>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[t.available, t.oneDay, t.noPayment].map((value, i) => (
            <div key={i} className="rounded-3xl border-2 border-ink bg-background p-7 shadow-pop-sm">
              <BrandMark className="h-9 w-12 text-coral" />
              <p className="mt-5 font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
