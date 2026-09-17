import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useCopy } from "@/components/site-shell";
import { SectionTag } from "@/components/service-ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · HK Concierge & Bridge" },
      {
        name: "description",
        content:
          "Contactez HK Concierge & Bridge à Hong Kong : +852 9527 5644 sur WhatsApp ou conciergebridge@gmail.com. Réponse sous un jour ouvré.",
      },
      { property: "og:title", content: "Contacter HK Concierge & Bridge" },
      { property: "og:description", content: "WhatsApp +852 9527 5644 · conciergebridge@gmail.com" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const t = useCopy();
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionTag>{t.contact}</SectionTag>
      <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">{t.talk}</h1>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <a
          href="https://wa.me/85295275644"
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border-2 border-ink bg-leaf p-7 text-ink shadow-pop-sm transition-transform hover:-translate-y-1"
        >
          <MessageCircle className="size-6" />
          <p className="mt-5 font-display text-xl font-bold">WhatsApp</p>
          <p className="mt-1 font-mono text-sm">+852 9527 5644</p>
        </a>
        <a
          href="tel:+85295275644"
          className="rounded-3xl border-2 border-ink bg-sky p-7 text-ink shadow-pop-sm transition-transform hover:-translate-y-1"
        >
          <Phone className="size-6" />
          <p className="mt-5 font-display text-xl font-bold">{t.express}</p>
          <p className="mt-1 font-mono text-sm">+852 9527 5644</p>
        </a>
        <a
          href="mailto:conciergebridge@gmail.com"
          className="rounded-3xl border-2 border-ink bg-sun p-7 text-ink shadow-pop-sm transition-transform hover:-translate-y-1"
        >
          <Mail className="size-6" />
          <p className="mt-5 font-display text-xl font-bold">{t.email}</p>
          <p className="mt-1 font-mono text-sm">conciergebridge@gmail.com</p>
        </a>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-3xl border-2 border-ink bg-cream p-7">
          <p className="font-mono text-xs font-bold uppercase text-ink/55">{t.serviceArea}</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">Hong Kong</p>
        </div>
        <div className="rounded-3xl border-2 border-ink bg-cream p-7">
          <p className="font-mono text-xs font-bold uppercase text-ink/55">{t.responseTime}</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">{t.oneDay}</p>
        </div>
      </div>
    </div>
  );
}
