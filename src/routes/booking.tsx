import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useCopy, useLanguage } from "@/components/site-shell";
import { SectionTag } from "@/components/service-ui";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Réserver un service · HK Concierge & Bridge" },
      {
        name: "description",
        content:
          "Envoyez votre demande de conciergerie à Hong Kong : choisissez un service, décrivez votre besoin, nous confirmons personnellement sous un jour ouvré.",
      },
      { property: "og:title", content: "Réserver un service à Hong Kong" },
      { property: "og:description", content: "Demande de réservation confirmée personnellement, sans paiement en ligne." },
    ],
  }),
  component: Booking,
});

function Booking() {
  const t = useCopy();
  const { locale } = useLanguage();
  const [service, setService] = useState(services[0].slug);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const chosen = services.find((s) => s.slug === service)!;
  const body = encodeURIComponent(
    `${t.fullName}: ${name}\n${t.email}: ${email}\n${t.services}: ${chosen.name[locale]}\n\n${message}`,
  );

  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <SectionTag>{t.book}</SectionTag>
      <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">{t.talk}</h1>
      <p className="mt-4 text-ink/65">{t.noPayment}</p>

      <form
        className="mt-10 grid gap-5 rounded-3xl border-2 border-ink bg-cream p-7 shadow-pop"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = `mailto:conciergebridge@gmail.com?subject=${encodeURIComponent(chosen.name[locale])}&body=${body}`;
        }}
      >
        <label className="grid gap-2">
          <span className="font-mono text-xs font-bold uppercase text-ink/60">{t.services}</span>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="rounded-xl border-2 border-ink bg-background px-4 py-3 font-medium text-ink"
          >
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name[locale]}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="font-mono text-xs font-bold uppercase text-ink/60">{t.fullName}</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border-2 border-ink bg-background px-4 py-3 text-ink"
          />
        </label>
        <label className="grid gap-2">
          <span className="font-mono text-xs font-bold uppercase text-ink/60">{t.email}</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border-2 border-ink bg-background px-4 py-3 text-ink"
          />
        </label>
        <label className="grid gap-2">
          <span className="font-mono text-xs font-bold uppercase text-ink/60">{t.message}</span>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-xl border-2 border-ink bg-background px-4 py-3 text-ink"
          />
        </label>
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-full border-2 border-ink bg-coral px-6 py-3 font-bold text-cream shadow-pop-sm transition-transform hover:-translate-y-1"
          >
            {t.send}
          </button>
          <a
            href="https://wa.me/85295275644"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-ink bg-leaf px-6 py-3 font-bold text-ink shadow-pop-sm transition-transform hover:-translate-y-1"
          >
            WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}
