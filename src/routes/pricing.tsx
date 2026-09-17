import { createFileRoute, Link } from "@tanstack/react-router";
import { useCopy, useLanguage } from "@/components/site-shell";
import { CtaRow, SectionTag, toneBg, toneText } from "@/components/service-ui";
import { formatPrice, services } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Tarifs de conciergerie à Hong Kong · HK Concierge & Bridge" },
      {
        name: "description",
        content:
          "Tous les tarifs de nos sept services de conciergerie à Hong Kong, affichés en euros, dollars ou dollars hongkongais.",
      },
      { property: "og:title", content: "Tarifs · HK Concierge & Bridge" },
      {
        property: "og:description",
        content: "Prix clairs par service, sans paiement en ligne : chaque demande est confirmée personnellement.",
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  const t = useCopy();
  const { locale } = useLanguage();
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionTag>{t.rates}</SectionTag>
      <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">{t.pricing}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/65">{t.rateNote}</p>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <div key={service.slug} className="overflow-hidden rounded-3xl border-2 border-ink shadow-pop-sm">
            <div className={`flex items-center justify-between px-6 py-4 ${toneBg[service.tone]} ${toneText[service.tone]}`}>
              <p className="font-display text-xl font-bold">{service.name[locale]}</p>
              <span className="font-mono text-xs font-bold opacity-70">{service.number}</span>
            </div>
            <div className="divide-y-2 divide-ink/10 bg-background">
              {service.prices.map((price) => (
                <div key={price.label.en} className="flex items-baseline justify-between gap-4 px-6 py-4">
                  <div>
                    <p className="font-bold text-ink">{price.label[locale]}</p>
                    <p className="text-sm text-ink/55">{price.suffix[locale]}</p>
                  </div>
                  <p className="whitespace-nowrap font-mono font-bold text-coral">
                    {price.from ? `${t.from} ` : ""}
                    {formatPrice(price.hkd, locale)}
                  </p>
                </div>
              ))}
              <div className="px-6 py-4">
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="font-mono text-xs font-bold uppercase text-ink underline"
                >
                  {t.request}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border-2 border-ink bg-sun p-10 shadow-pop">
        <h2 className="font-display text-3xl font-bold text-ink">{t.talk}</h2>
        <p className="mt-3 max-w-xl text-ink/70">{t.noPayment}</p>
        <div className="mt-6">
          <CtaRow label={t.appointment} />
        </div>
      </div>
    </div>
  );
}
