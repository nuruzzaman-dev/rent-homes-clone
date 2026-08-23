/*
 * Style reminder: Reference-matched RentHomes visual language — warm ivory canvas,
 * architectural navy imagery, charcoal editorial type, cool blue accents, restrained
 * borders, and quiet motion. Keep all page styling in Tailwind utility classes only.
 */

import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  ChevronDown,
  Compass,
  Heart,
  Home as HomeIcon,
  Menu,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";

const HERO_IMAGE = "/manus-storage/rent-homes-hero_6c575328.png";
const MARK_IMAGE = "/manus-storage/rent-homes-mark_2064c270.png";

const properties = [
  {
    name: "Ocean Breeze Villa",
    city: "Malibu, California",
    type: "Villa",
    price: "$9,100",
    period: "/ month",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    tone: "bg-[#dfe7e9]",
  },
  {
    name: "Jackson House",
    city: "Austin, Texas",
    type: "House",
    price: "$7,500",
    period: "/ month",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    tone: "bg-[#dedbd4]",
  },
  {
    name: "Lakeside Cottage",
    city: "Como, Italy",
    type: "Cottage",
    price: "€5,400",
    period: "/ month",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",
    tone: "bg-[#d6dfe2]",
  },
];

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Research phase",
    body: "Tell us what matters. We turn a broad search into a considered shortlist of places worth seeing.",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Close the deal",
    body: "Compare every detail in one clear view, then move forward with the confidence to make a decision.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Key delivery",
    body: "From first enquiry to the moment you arrive, we keep the final steps feeling simple and human.",
  },
];

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] ${light ? "text-white/65" : "text-[#6f7d8c]"}`}>
      <span className={`h-px w-8 ${light ? "bg-white/35" : "bg-[#3d6f9d]"}`} />
      <span>{children}</span>
    </div>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="RentHomes home">
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#eef2f1] ring-1 ring-[#dae3e2] transition-transform duration-200 group-hover:-rotate-6">
        <img src={MARK_IMAGE} alt="" className="h-7 w-7 object-contain" />
      </span>
      {!compact && (
        <span className="font-[Cormorant_Garamond] text-[19px] font-semibold tracking-[-0.04em] text-[#182531]">
          Rent<span className="text-[#3d6f9d]">Homes</span>
        </span>
      )}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [city, setCity] = useState("All cities");
  const [type, setType] = useState("Any property");
  const [price, setPrice] = useState("Any price");
  const [hasSearched, setHasSearched] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const cityMatch = city === "All cities" || property.city.includes(city);
      const typeMatch = type === "Any property" || property.type === type;
      const priceMatch = price === "Any price" || (price === "Under $8,000" ? property.price.includes("7,500") || property.price.includes("5,400") : property.price.includes("9,100"));
      return cityMatch && typeMatch && priceMatch;
    });
  }, [city, type, price]);

  const handleSearch = () => {
    setHasSearched(true);
    document.querySelector("#most-viewed")?.scrollIntoView({ behavior: "smooth", block: "start" });
    toast.success(filteredProperties.length ? `${filteredProperties.length} homes match your search` : "Try widening your search", {
      description: "Your shortlist has been updated below.",
    });
  };

  const toggleSaved = (name: string) => {
    setSaved((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
    toast(saved.includes(name) ? "Removed from saved homes" : "Saved to your shortlist");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#f5f5f1] font-[DM_Sans] text-[#182531] selection:bg-[#3d6f9d] selection:text-white">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-7">
          <Logo />
          <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.12em] text-white/80 lg:flex">
            <a className="border-b border-white/70 pb-1 text-white transition-colors hover:text-white" href="#top">Home</a>
            <a className="pb-1 transition-colors hover:text-white" href="#most-viewed">Most Viewed</a>
            <a className="pb-1 transition-colors hover:text-white" href="#about">About us</a>
            <a className="pb-1 transition-colors hover:text-white" href="#steps">Our process</a>
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <button onClick={() => toast("Sign in is ready for your account connection.")} className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-white">Sign in</button>
            <button onClick={() => toast("Tell us what you are looking for and we’ll be in touch.")} className="rounded-full border border-white/45 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition duration-200 hover:bg-white hover:text-[#182531] active:scale-[0.97]">List a home</button>
          </div>
          <button aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition hover:bg-white/10 lg:hidden">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="mx-4 rounded-2xl border border-white/15 bg-[#182531]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
              <a href="#top" onClick={closeMenu}>Home</a>
              <a href="#most-viewed" onClick={closeMenu}>Most Viewed</a>
              <a href="#about" onClick={closeMenu}>About us</a>
              <a href="#steps" onClick={closeMenu}>Our process</a>
              <button className="mt-2 w-full rounded-full bg-[#dce8ed] px-4 py-3 text-[#182531]" onClick={() => { closeMenu(); toast("Tell us what you are looking for and we’ll be in touch."); }}>List a home</button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative isolate min-h-[760px] overflow-hidden bg-[#1a2b3b] sm:min-h-[820px]">
          <img src={HERO_IMAGE} alt="Warmly lit contemporary villa at dusk" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,25,37,0.9)_0%,rgba(12,25,37,0.68)_34%,rgba(12,25,37,0.12)_75%,rgba(12,25,37,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,25,37,0.55)_0%,transparent_40%)]" />
          <div className="relative mx-auto flex min-h-[760px] max-w-[1320px] flex-col justify-center px-5 pb-28 pt-36 sm:min-h-[820px] sm:px-8 lg:px-12">
            <div className="max-w-[560px]">
              <SectionLabel light>Find your place</SectionLabel>
              <h1 className="mt-7 max-w-[540px] font-[Cormorant_Garamond] text-[clamp(3.4rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.065em] text-white">
                Finding your new home is simple.
              </h1>
              <p className="mt-7 max-w-[400px] text-sm leading-7 text-white/68 sm:text-[15px]">
                A considered way to discover apartments, villas, and houses that feel right from the first view.
              </p>
              <a href="#most-viewed" className="mt-9 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:text-[#c3d9e4]">
                Explore the collection <ArrowDown className="h-4 w-4" />
              </a>
            </div>

            <div className="absolute bottom-8 left-5 right-5 max-w-[1030px] sm:left-8 sm:right-8 lg:bottom-12 lg:left-12">
              <div className="mb-3 flex items-center justify-between px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                <span>Search your next address</span>
                <span className="hidden sm:inline">01 — 03</span>
              </div>
              <div className="grid gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/20 shadow-2xl backdrop-blur-xl sm:grid-cols-[1.1fr_1fr_1fr_auto]">
                <label className="group flex flex-col gap-2 bg-white/95 px-5 py-4 transition hover:bg-white">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#82909d]">City</span>
                  <select value={city} onChange={(event) => setCity(event.target.value)} className="w-full appearance-none bg-transparent text-sm font-medium text-[#182531] outline-none">
                    <option>All cities</option>
                    <option>Malibu</option>
                    <option>Austin</option>
                    <option>Como</option>
                  </select>
                </label>
                <label className="group flex flex-col gap-2 bg-white/95 px-5 py-4 transition hover:bg-white">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#82909d]">Typology</span>
                  <select value={type} onChange={(event) => setType(event.target.value)} className="w-full appearance-none bg-transparent text-sm font-medium text-[#182531] outline-none">
                    <option>Any property</option>
                    <option>Villa</option>
                    <option>House</option>
                    <option>Cottage</option>
                  </select>
                </label>
                <label className="group flex flex-col gap-2 bg-white/95 px-5 py-4 transition hover:bg-white">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#82909d]">Price range</span>
                  <select value={price} onChange={(event) => setPrice(event.target.value)} className="w-full appearance-none bg-transparent text-sm font-medium text-[#182531] outline-none">
                    <option>Any price</option>
                    <option>Under $8,000</option>
                    <option>Premium homes</option>
                  </select>
                </label>
                <button onClick={handleSearch} className="flex items-center justify-center gap-3 bg-[#3d6f9d] px-7 py-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-[#2f5b84] active:scale-[0.98] sm:min-w-[142px]">
                  <Search className="h-4 w-4" /> Search
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 hidden h-28 w-[29%] border-l border-t border-white/10 lg:block" />
        </section>

        <section id="most-viewed" className="scroll-mt-6 bg-[#f5f5f1] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1320px]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <SectionLabel>Selected residences</SectionLabel>
                <h2 className="mt-5 max-w-[590px] font-[Cormorant_Garamond] text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#182531] sm:text-5xl lg:text-[4.35rem]">Most viewed, for good reason.</h2>
              </div>
              <div className="max-w-[285px] text-sm leading-6 text-[#7a858b] md:pb-1">
                {hasSearched ? <span><span className="font-semibold text-[#182531]">{filteredProperties.length}</span> results shaped by your search.</span> : <span>Three places our community keeps coming back to.</span>}
                <a href="#about" className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#3d6f9d] hover:text-[#182531]">View all homes <ArrowRight className="h-3.5 w-3.5" /></a>
              </div>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-3 lg:mt-20 lg:gap-8">
              {filteredProperties.length ? filteredProperties.map((property, index) => (
                <article key={property.name} className="group">
                  <div className={`relative aspect-[1.16] overflow-hidden ${property.tone}`}>
                    <img src={property.image} alt={`${property.name} exterior`} className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10212f]/40 via-transparent to-transparent opacity-70" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#536371]">0{index + 1} / featured</span>
                    <button onClick={() => toggleSaved(property.name)} aria-label={`Save ${property.name}`} className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition ${saved.includes(property.name) ? "bg-[#3d6f9d] text-white" : "bg-white/85 text-[#52616b] hover:bg-white"}`}>
                      <Heart className={`h-4 w-4 ${saved.includes(property.name) ? "fill-current" : ""}`} />
                    </button>
                  </div>
                  <div className="flex items-start justify-between gap-5 border-b border-[#dce0dc] py-5">
                    <div>
                      <h3 className="font-[Cormorant_Garamond] text-2xl tracking-[-0.035em] text-[#182531] transition-colors group-hover:text-[#3d6f9d]">{property.name}</h3>
                      <p className="mt-1.5 text-xs text-[#7a858b]">{property.city} <span className="mx-1 text-[#c1c8c8]">/</span> {property.type}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-[Cormorant_Garamond] text-xl tracking-[-0.04em] text-[#182531]">{property.price}</p>
                      <p className="mt-1 text-[10px] text-[#8a9396]">{property.period}</p>
                    </div>
                  </div>
                  <button onClick={() => toast(`${property.name} added to your viewing list`, { description: "We’ll keep the details ready for your next step." })} className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3d6f9d] transition-all hover:gap-3 hover:text-[#182531]">View residence <ArrowRight className="h-3.5 w-3.5" /></button>
                </article>
              )) : (
                <div className="col-span-full border border-dashed border-[#cbd4d2] bg-white/50 px-8 py-16 text-center">
                  <p className="font-[Cormorant_Garamond] text-3xl text-[#182531]">Nothing quite fits yet.</p>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7a858b]">Try a broader city, property type, or price range and we’ll bring the shortlist back into view.</p>
                  <button onClick={() => { setCity("All cities"); setType("Any property"); setPrice("Any price"); }} className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3d6f9d]">Reset filters</button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-6 bg-[#e9eeed] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -left-5 -top-5 h-24 w-24 border-l border-t border-[#8ca2aa]" />
              <div className="relative aspect-[0.92] overflow-hidden bg-[#bdc9c8]">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" alt="Minimal living room with warm natural light" className="h-full w-full object-cover" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-[#f5f5f1]/90 px-4 py-3 backdrop-blur-sm">
                  <HomeIcon className="h-4 w-4 text-[#3d6f9d]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#52616b]">A better way home</span>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b border-r border-[#8ca2aa]" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionLabel>The simplest method</SectionLabel>
              <h2 className="mt-6 max-w-[600px] font-[Cormorant_Garamond] text-5xl font-medium leading-[0.95] tracking-[-0.06em] text-[#182531] sm:text-6xl">The easiest method to find a house.</h2>
              <p className="mt-7 max-w-[490px] text-sm leading-7 text-[#6d7b81] sm:text-[15px]">Finding a place to live should not feel like sorting through noise. RentHomes brings the details that matter into one quiet, useful view, so you can spend less time searching and more time imagining the life inside.</p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <button onClick={() => document.querySelector("#steps")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-3 rounded-full bg-[#182531] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition duration-200 hover:bg-[#3d6f9d] active:scale-[0.97]">Our approach <ArrowRight className="h-3.5 w-3.5" /></button>
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7d898d]"><BedDouble className="h-4 w-4 text-[#3d6f9d]" /> Across the US & Europe</span>
              </div>
            </div>
          </div>
        </section>

        <section id="steps" className="scroll-mt-6 bg-[#f5f5f1] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
              <div>
                <SectionLabel>Our work in 3 steps</SectionLabel>
                <h2 className="mt-5 max-w-[390px] font-[Cormorant_Garamond] text-5xl font-medium leading-[0.95] tracking-[-0.06em] text-[#182531]">From search to keys.</h2>
                <p className="mt-6 max-w-[300px] text-sm leading-6 text-[#7a858b]">A clear process for a decision that deserves your full attention.</p>
              </div>
              <div className="grid gap-0 border-t border-[#d6dcd9] sm:grid-cols-3 sm:border-l">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.number} className="group border-b border-[#d6dcd9] px-0 py-8 sm:border-b-0 sm:border-r sm:px-7 sm:py-3 lg:px-9">
                      <div className="flex items-center justify-between">
                        <span className="font-[Cormorant_Garamond] text-4xl tracking-[-0.06em] text-[#a4b4b7] transition-colors group-hover:text-[#3d6f9d]">{step.number}</span>
                        <Icon className="h-5 w-5 text-[#3d6f9d] transition-transform duration-200 group-hover:-translate-y-1" />
                      </div>
                      <h3 className="mt-12 font-[Cormorant_Garamond] text-2xl tracking-[-0.04em] text-[#182531]">{step.title}</h3>
                      <p className="mt-4 text-sm leading-6 text-[#7a858b]">{step.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#182531] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-12 md:flex-row md:items-end">
            <div>
              <SectionLabel light>Make room for what matters</SectionLabel>
              <h2 className="mt-6 max-w-[650px] font-[Cormorant_Garamond] text-5xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-[5.2rem]">Your next chapter starts with a better address.</h2>
            </div>
            <div className="md:pb-2">
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group flex items-center gap-4 rounded-full bg-[#dce8ed] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#182531] transition duration-200 hover:bg-white active:scale-[0.97]">Start your search <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f5f5f1] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-7 border-t border-[#d9dfdc] pt-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-wrap gap-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7a858b]">
            <button onClick={() => toast("Privacy information is available on request.")}>Privacy</button>
            <button onClick={() => toast("Terms information is available on request.")}>Terms</button>
            <button onClick={() => toast("hello@rent-homes.example")}>Contact</button>
          </div>
          <p className="text-[10px] uppercase tracking-[0.13em] text-[#a0a9a8]">© 2026 RentHomes</p>
        </div>
      </footer>
    </div>
  );
}
