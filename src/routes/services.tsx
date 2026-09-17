import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { useCopy } from "@/components/site-shell";
import { SectionTag, ServiceCard } from "@/components/service-ui";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos services de conciergerie · HK Concierge & Bridge" },
      {
        name: "description",
        content:
          "Sept services à Hong Kong : pack bienvenue, protection rapprochée, promenade de chiens, garde d'enfants, accompagnement social, réservations et conciergerie administrative.",
      },
      { property: "og:title", content: "Nos services de conciergerie à Hong Kong" },
      {
        property: "og:description",
        content: "Chaque service avec son contenu détaillé et ses tarifs clairs en EUR, USD ou HKD.",
      },
    ],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/services/$slug");
  if (isChild) return <Outlet />;
  return <ServicesIndex />;
}

function ServicesIndex() {
  const t = useCopy();
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionTag>{t.seven}</SectionTag>
      <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
        {t.everything}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/65">{t.everythingBody}</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
