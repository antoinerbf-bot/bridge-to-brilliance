import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useCopy, useLanguage } from "@/components/site-shell";
import { formatPrice, type Service, type ServiceTone } from "@/lib/site-data";

export const toneBg: Record<ServiceTone, string> = {
  sky: "bg-sky",
  coral: "bg-coral",
  leaf: "bg-leaf",
  grape: "bg-grape",
  sun: "bg-sun",
  cream: "bg-cream",
  ink: "bg-ink",
};

export const toneText: Record<ServiceTone, string> = {
  sky: "text-ink",
  coral: "text-cream",
  leaf: "text-ink",
  grape: "text-cream",
  sun: "text-ink",
  cream: "text-ink",
  ink: "text-cream",
};

export function ServiceCard({ service }: { service: Service }) {
  const { locale } = useLanguage();
  const t = useCopy();
  const lowest = Math.min(...service.prices.map((p) => p.hkd));
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className={`group flex flex-col justify-between rounded-3xl border-2 border-ink p-6 shadow-pop-sm transition-transform hover:-translate-y-1.5 hover:shadow-pop ${toneBg[service.tone]} ${toneText[service.tone]}`}
    >
      <div>
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs font-bold opacity-70">{service.number}</span>
          <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold leading-tight">{service.name[locale]}</h3>
        <p className="mt-2 text-sm opacity-80">{service.short[locale]}</p>
      </div>
      <p className="mt-8 font-mono text-sm font-bold">
        {t.from} {formatPrice(lowest, locale)}
      </p>
    </Link>
  );
}

export function PriceList({ service }: { service: Service }) {
  const { locale } = useLanguage();
  const t = useCopy();
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {service.prices.map((price) => (
        <div key={price.label.en} className="rounded-2xl border-2 border-ink bg-cream p-5 text-ink">
          <p className="font-display text-lg font-bold">{price.label[locale]}</p>
          <p className="mt-2 font-mono text-2xl font-bold text-coral">
            {price.from ? `${t.from} ` : ""}
            {formatPrice(price.hkd, locale)}
          </p>
          <p className="mt-1 text-sm text-ink/60">{price.suffix[locale]}</p>
        </div>
      ))}
    </div>
  );
}

export function CtaRow({ label }: { label?: string }) {
  const t = useCopy();
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        to="/booking"
        className="rounded-full border-2 border-ink bg-coral px-6 py-3 font-bold text-cream shadow-pop-sm transition-transform hover:-translate-y-1"
      >
        {label ?? t.request}
      </Link>
      <a
        href="https://wa.me/85295275644"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-leaf px-6 py-3 font-bold text-ink shadow-pop-sm transition-transform hover:-translate-y-1"
      >
        <MessageCircle className="size-4" /> WhatsApp
      </a>
    </div>
  );
}

export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border-2 border-ink bg-sun px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-ink">
      {children}
    </span>
  );
}
