import { Link } from "@tanstack/react-router";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/brand-mark";
import { copy, type Locale } from "@/lib/site-data";

type LanguageContextValue = { locale: Locale; setLocale: (locale: Locale) => void };
const LanguageContext = createContext<LanguageContextValue>({ locale: "fr", setLocale: () => undefined });

export function useLanguage() { return useContext(LanguageContext); }
export function useCopy() { const { locale } = useLanguage(); return copy[locale]; }

const langs: { value: Locale; label: string }[] = [
  { value: "fr", label: "FR · €" }, { value: "en", label: "EN · $" }, { value: "zh", label: "繁 · HK$" },
];

export function SiteProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  useEffect(() => {
    const stored = window.localStorage.getItem("hkcb-locale");
    if (stored === "fr" || stored === "en" || stored === "zh") setLocaleState(stored);
  }, []);
  const value = useMemo(() => ({ locale, setLocale: (next: Locale) => { setLocaleState(next); window.localStorage.setItem("hkcb-locale", next); } }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();
  return <div className="flex items-center gap-1 rounded-full bg-ink/6 p-1 font-mono text-[11px] font-bold" aria-label="Language and currency">
    {langs.map((lang) => <button key={lang.value} onClick={() => setLocale(lang.value)} className={`rounded-full px-2.5 py-1.5 transition-colors ${locale === lang.value ? "bg-ink text-cream" : "text-ink/55 hover:text-ink"}`}>{lang.label}</button>)}
  </div>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const t = useCopy();
  const [menu, setMenu] = useState(false);
  const nav = [["/services", t.services], ["/pricing", t.pricing], ["/about", t.about], ["/contact", t.contact]] as const;
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b-2 border-ink/10 bg-cream/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 text-ink" onClick={() => setMenu(false)}>
          <BrandMark className="h-9 w-12 text-coral" />
          <span className="font-display text-base font-bold leading-[.95]">HK Concierge<br/><span className="font-mono text-[10px] uppercase text-ink/55">& Bridge</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">{nav.map(([to,label]) => <Link key={to} to={to} className="text-sm font-bold text-ink/60 transition-colors hover:text-ink" activeProps={{ className: "text-ink" }}>{label}</Link>)}</nav>
        <div className="flex items-center gap-2"><div className="hidden sm:block"><LanguageSwitch /></div><Button asChild className="hidden rounded-full bg-coral px-5 text-cream shadow-none hover:bg-coral/85 md:inline-flex"><Link to="/booking">{t.book}</Link></Button><button aria-label="Menu" className="grid size-10 place-items-center rounded-full bg-ink text-cream lg:hidden" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div>
      </div>
      {menu && <div className="border-t-2 border-ink/10 bg-cream px-5 py-5 lg:hidden"><div className="mb-4 sm:hidden"><LanguageSwitch/></div><nav className="grid gap-2">{nav.map(([to,label]) => <Link key={to} to={to} onClick={() => setMenu(false)} className="border-b border-ink/10 py-3 font-display text-xl font-bold">{label}</Link>)}<Link to="/booking" onClick={() => setMenu(false)} className="mt-2 rounded-full bg-coral px-5 py-3 text-center font-bold text-cream">{t.book}</Link></nav></div>}
    </header>
    <main>{children}</main>
    <a href="https://wa.me/85295275644" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full border-2 border-ink bg-leaf text-ink shadow-pop transition-transform hover:-translate-y-1" aria-label="WhatsApp"><MessageCircle className="size-6"/></a>
    <footer className="border-t-4 border-ink bg-sky py-10 text-ink"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-7 px-5 lg:px-8"><Link to="/" className="flex items-center gap-3"><BrandMark className="h-10 w-14 text-ink"/><span className="font-display font-bold">HK Concierge & Bridge</span></Link><div className="font-mono text-xs font-bold text-ink/65">{t.available}<br/><a href="mailto:conciergebridge@gmail.com">conciergebridge@gmail.com</a> · <a href="https://wa.me/85295275644">+852 9527 5644</a></div></div></footer>
  </div>;
}