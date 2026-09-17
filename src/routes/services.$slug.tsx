import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { useCopy, useLanguage } from "@/components/site-shell";
import { CtaRow, PriceList, SectionTag, toneBg, toneText } from "@/components/service-ui";
import { getService, services } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    const title = service ? `${service.name.fr} à Hong Kong · HK Concierge & Bridge` : "Service";
    const description = service ? service.short.fr : "Service de conciergerie à Hong Kong.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useParams();
  const { locale } = useLanguage();
  const t = useCopy();
  const service = getService(slug)!;
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div>
      <section className={`border-b-4 border-ink ${toneBg[service.tone]} ${toneText[service.tone]}`}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <Link to="/services" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase opacity-75">
            <ArrowLeft className="size-4" /> {t.allServices}
          </Link>
          <p className="mt-8 font-mono text-sm font-bold opacity-70">{service.number}</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold leading-[1.02] sm:text-6xl">
            {service.name[locale]}
          </h1>
          <p className="mt-5 max-w-2xl text-lg opacity-85">{service.short[locale]}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <p className="text-lg leading-relaxed text-ink/75">{service.description[locale]}</p>
          <h2 className="mt-10 font-display text-2xl font-bold text-ink">{t.included}</h2>
          <ul className="mt-5 grid gap-3">
            {service.features[locale].map((feature) => (
              <li key={feature} className="flex items-start gap-3 rounded-2xl border-2 border-ink/10 bg-cream p-4">
                <Check className="mt-0.5 size-5 shrink-0 text-leaf" />
                <span className="font-medium text-ink">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTag>{t.rates}</SectionTag>
          <div className="mt-5">
            <PriceList service={service} />
          </div>
          <p className="mt-4 text-xs text-ink/55">{t.rateNote}</p>
          <div className="mt-8 rounded-3xl border-2 border-ink bg-ink p-7 text-cream shadow-pop">
            <p className="font-display text-2xl font-bold">{t.talk}</p>
            <p className="mt-2 text-sm text-cream/70">{t.noPayment}</p>
            <div className="mt-6">
              <CtaRow />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-4 border-ink bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink">{t.allServices}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/services/$slug"
                params={{ slug: other.slug }}
                className={`rounded-3xl border-2 border-ink p-6 shadow-pop-sm transition-transform hover:-translate-y-1 ${toneBg[other.tone]} ${toneText[other.tone]}`}
              >
                <p className="font-mono text-xs font-bold opacity-70">{other.number}</p>
                <p className="mt-4 font-display text-xl font-bold">{other.name[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
