import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, ShieldCheck } from "lucide-react";
import { useCopy, useLanguage } from "@/components/site-shell";
import { CtaRow, SectionTag, ServiceCard } from "@/components/service-ui";
import { BrandMark } from "@/components/brand-mark";
import { services } from "@/lib/site-data";
import video from "@/assets/hong-kong-video.asset.json";
import poster from "@/assets/hong-kong-poster.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HK Concierge & Bridge · Votre pont vers Hong Kong" },
      {
        name: "description",
        content:
          "Conciergerie humaine à Hong Kong : installation, protection rapprochée, garde d'enfants, promenade de chiens, réservations et démarches. FR / EN / 繁體.",
      },
      { property: "og:title", content: "HK Concierge & Bridge · Votre pont vers Hong Kong" },
      {
        property: "og:description",
        content: "Sept services de conciergerie à Hong Kong, un seul numéro : +852 9527 5644.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const t = useCopy();
  const { locale } = useLanguage();

  return (
    <div>
      <section className="relative isolate overflow-hidden border-b-4 border-ink bg-ink">
        <video
          className="absolute inset-0 size-full object-cover opacity-55"
          src={video.url}
          poster={poster.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-cream/40 px-3 py-1 font-mono text-[11px] font-bold uppercase text-cream">
              {t.heroTag}
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] text-cream sm:text-6xl lg:text-7xl">
              {t.heroA}
              <br />
              <span className="text-sun">{t.heroB}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/80">{t.heroBody}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-6 py-3 font-bold text-ink shadow-pop-sm transition-transform hover:-translate-y-1"
              >
                {t.discover} <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/booking"
                className="rounded-full border-2 border-cream px-6 py-3 font-bold text-cream transition-colors hover:bg-cream hover:text-ink"
              >
                {t.appointment}
              </Link>
            </div>
          </div>
          <div className="self-end rounded-3xl border-2 border-cream/30 bg-ink/60 p-6 backdrop-blur-md">
            <p className="font-mono text-xs font-bold uppercase text-sky">{t.express}</p>
            <p className="mt-3 font-display text-2xl font-bold text-cream">{t.answer}</p>
            <a
              href="https://wa.me/85295275644"
              target="_blank"
              rel="noreferrer"
              className="mt-5 block font-mono text-lg font-bold text-sun"
            >
              +852 9527 5644
            </a>
            <a href="mailto:conciergebridge@gmail.com" className="mt-1 block text-sm text-cream/70">
              conciergebridge@gmail.com
            </a>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b-4 border-ink bg-coral py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-sm font-bold uppercase text-cream">
          {[0, 1].map((k) => (
            <span key={k} className="flex gap-8">
              {services.map((s) => (
                <span key={s.slug}>{s.name[locale]} ·</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionTag>{t.seven}</SectionTag>
        <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {t.everything}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/65">{t.everythingBody}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="border-y-4 border-ink bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionTag>{t.bridge}</SectionTag>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              {t.bridgeTitle}
            </h2>
            <p className="mt-4 max-w-lg text-lg text-ink/65">{t.bridgeBody}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [ShieldCheck, t.values],
                [Clock, t.oneDay],
                [MapPin, "Hong Kong"],
              ].map(([Icon, label], i) => (
                <div key={i} className="rounded-2xl border-2 border-ink bg-background p-4">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(() => {
                    const C = Icon as any;
                    return <C className="size-5 text-coral" />;
                  })()}
                  <p className="mt-3 text-sm font-bold text-ink">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid place-items-center rounded-3xl border-2 border-ink bg-sky p-12 shadow-pop">
            <BrandMark className="h-40 w-56 text-ink" />
            <p className="mt-6 text-center font-display text-2xl font-bold text-ink">
              HK Concierge &amp; Bridge
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-3xl border-2 border-ink bg-ink p-10 text-cream shadow-pop lg:p-14">
          <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">{t.talk}</h2>
          <p className="mt-4 max-w-xl text-cream/70">{t.noPayment}</p>
          <div className="mt-8">
            <CtaRow label={t.appointment} />
          </div>
        </div>
      </section>
    </div>
  );
}
