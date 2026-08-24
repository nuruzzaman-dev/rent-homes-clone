/*
 * Style reminder: RentHomes is an architectural film that happens to let people discover homes.
 * Preserve the DNA: dark navy, warm ivory, editorial serif, architectural imagery, thin rules,
 * restrained controls, and intentional pacing. Page-specific styling stays Tailwind utility-only.
 */

import { useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import cinematicFrames from "@/lib/renthomes-sequence.json";
import { toast } from "sonner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Heart,
  Home as HomeIcon,
  Menu,
  MoveRight,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE = "/manus-storage/rent-homes-hero_6c575328.png";
const MARK_IMAGE = "/manus-storage/rent-homes-mark_2064c270.png";
const CINEMATIC_FRAMES = cinematicFrames as string[];

const lifestyleImages = [
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
];

const lifestyleCards = [
  { number: "01", title: "City life", description: "For people who want everything within reach.", image: lifestyleImages[0], width: "w-full lg:w-[38vw]" },
  { number: "02", title: "Coastal living", description: "For mornings that begin with a horizon.", image: lifestyleImages[1], width: "w-full lg:w-[34vw]" },
  { number: "03", title: "Quiet retreat", description: "For the space to hear yourself think.", image: lifestyleImages[2], width: "w-full lg:w-[40vw]" },
  { number: "04", title: "Modern minimal", description: "For a life shaped by light and line.", image: lifestyleImages[3], width: "w-full lg:w-[32vw]" },
  { number: "05", title: "Nature escape", description: "For the feeling of arriving somewhere rare.", image: lifestyleImages[4], width: "w-full lg:w-[36vw]" },
];

const properties = [
  { number: "01", name: "Ocean Terrace Villa", city: "Malibu, California", type: "Villa", price: "$4.8M", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85" },
  { number: "02", name: "Jackson House", city: "Austin, Texas", type: "House", price: "$2.9M", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85" },
  { number: "03", name: "Lakeside Cottage", city: "Como, Italy", type: "Cottage", price: "€1.8M", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85" },
];

const dayFrames = [
  { time: "07:00", title: "Morning light", copy: "The first light enters through the eastern windows.", image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85" },
  { time: "09:30", title: "Slow coffee", copy: "A quieter start to the day, with nowhere else to be.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85" },
  { time: "13:00", title: "Open air", copy: "The architecture gives the day room to breathe.", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85" },
  { time: "18:40", title: "Golden hour", copy: "The house changes with the light.", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85" },
  { time: "22:15", title: "Quiet", copy: "The last room is the one that lets you switch off.", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85" },
];

const detailItems = [
  { id: "light", label: "Light", copy: "Designed around the movement of natural light throughout the day.", position: "left-[26%] top-[26%]" },
  { id: "material", label: "Material", copy: "Stone, timber, and glass held in a quiet, tactile balance.", position: "left-[67%] top-[35%]" },
  { id: "space", label: "Space", copy: "Every threshold opens onto another feeling of volume.", position: "left-[55%] top-[69%]" },
  { id: "view", label: "View", copy: "The horizon is treated as part of the architecture.", position: "left-[82%] top-[58%]" },
];

const destinations = [
  { city: "New York", coordinate: "40.7128° N / 74.0060° W", description: "Vertical energy, old brick, and rooms that keep pace with the city.", image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=85" },
  { city: "Copenhagen", coordinate: "55.6761° N / 12.5683° E", description: "Measured calm, natural materials, and a sharper idea of home.", image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85" },
  { city: "Sydney", coordinate: "33.8688° S / 151.2093° E", description: "Open air, long light, and architecture that leans toward the water.", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85" },
];

const methodSteps = [
  ["01", "Research", "A focused beginning."],
  ["02", "Shortlist", "Less noise, more signal."],
  ["03", "View", "See what the screen cannot show."],
  ["04", "Choose", "Make the decision your own."],
  ["05", "Move in", "Begin the part that matters."],
];

const feelWords = [
  ["Space", "room to live"],
  ["Light", "a changing atmosphere"],
  ["Material", "something you can feel"],
  ["Privacy", "a pause from the world"],
  ["View", "a wider horizon"],
  ["Location", "the life around it"],
];

const feelImages = [
  dayFrames[2].image,
  dayFrames[0].image,
  dayFrames[3].image,
  destinations[1].image,
  destinations[2].image,
  lifestyleImages[0],
];

function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] ${light ? "text-white/60" : "text-[#72808a]"}`}><span className={`h-px w-8 ${light ? "bg-white/35" : "bg-[#3d6f9d]"}`} /><span>{children}</span></div>;
}

function Logo() {
  return <a href="#top" className="group flex items-center gap-2.5" aria-label="RentHomes home"><span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#eef2f1] ring-1 ring-[#dae3e2] transition-transform duration-200 group-hover:-rotate-6"><img src={MARK_IMAGE} alt="" className="h-7 w-7 object-contain" /></span><span className="font-[Cormorant_Garamond] text-[19px] font-semibold tracking-[-0.04em] text-[#182531]">Rent<span className="text-[#3d6f9d]">Homes</span></span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [city, setCity] = useState("All cities");
  const [type, setType] = useState("Any property");
  const [price, setPrice] = useState("Any price");
  const [saved, setSaved] = useState<string[]>([]);
  const [activeDetail, setActiveDetail] = useState("light");
  const [activeDestination, setActiveDestination] = useState(0);
  const [activeMethod, setActiveMethod] = useState(0);
  const [activeFeel, setActiveFeel] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const preparedFramesRef = useRef<Set<string>>(new Set([dayFrames[0].image]));
  const methodRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const timelineProgressRef = useRef<HTMLSpanElement>(null);
  const feelRef = useRef<HTMLElement>(null);
  const feelImageRef = useRef<HTMLImageElement>(null);
  const feelIndexRef = useRef(0);
  const heroRef = useRef<HTMLElement>(null);
  const cinematicRef = useRef<HTMLElement>(null);
  const cinematicCanvasRef = useRef<HTMLCanvasElement>(null);
  const cinematicProgressRef = useRef<HTMLSpanElement>(null);
  const cinematicFrameRef = useRef(0);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const lifestyleRef = useRef<HTMLElement>(null);
  const lifestyleTrackRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLElement>(null);
  const dayImageRef = useRef<HTMLImageElement>(null);
  const dayNextImageRef = useRef<HTMLImageElement>(null);
  const dayLayerRef = useRef<0 | 1>(0);
  const dayFrameIndexRef = useRef(0);
  const dayTimeRef = useRef<HTMLSpanElement>(null);
  const dayTitleRef = useRef<HTMLHeadingElement>(null);
  const dayCopyRef = useRef<HTMLParagraphElement>(null);
  const methodLineRef = useRef<HTMLSpanElement>(null);

  const filteredProperties = useMemo(() => properties.filter((property) => {
    const cityMatch = city === "All cities" || property.city.includes(city);
    const typeMatch = type === "Any property" || property.type === type;
    const priceMatch = price === "Any price" || (price === "Under $3M" ? property.price.includes("2.9") || property.price.includes("1.8") : property.price.includes("4.8"));
    return cityMatch && typeMatch && priceMatch;
  }), [city, type, price]);

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    let removeCursorListeners = () => {};
    let removeCinematic = () => {};
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const desktopMotion = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)").matches;
      const mobileMotion = window.matchMedia("(max-width: 1023px) and (prefers-reduced-motion: no-preference)").matches;
      if (cursorRef.current && window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches && !reduced) {
        const cursor = cursorRef.current;
        const moveX = gsap.quickTo(cursor, "x", { duration: 0.18, ease: "power3.out" });
        const moveY = gsap.quickTo(cursor, "y", { duration: 0.18, ease: "power3.out" });
        const onMove = (event: MouseEvent) => { moveX(event.clientX); moveY(event.clientY); };
        const onOver = (event: Event) => { const target = event.currentTarget as HTMLElement; cursor.dataset.label = target.dataset.cursor || "VIEW"; gsap.to(cursor, { autoAlpha: 1, scale: 1, width: 64, height: 64, duration: 0.18 }); };
        const onOut = () => gsap.to(cursor, { autoAlpha: 0, scale: 0.85, width: 12, height: 12, duration: 0.16 });
        window.addEventListener("mousemove", onMove);
        const targets = gsap.utils.toArray<HTMLElement>("[data-cursor]");
        targets.forEach((target) => { target.addEventListener("mouseenter", onOver); target.addEventListener("mouseleave", onOut); });
        gsap.set(cursor, { autoAlpha: 0, scale: 0.85 });
        removeCursorListeners = () => { window.removeEventListener("mousemove", onMove); targets.forEach((target) => { target.removeEventListener("mouseenter", onOver); target.removeEventListener("mouseleave", onOut); }); };
      }
      gsap.fromTo("[data-reveal]", { opacity: 0, y: reduced ? 0 : 26 }, { opacity: 1, y: 0, duration: reduced ? 0.2 : 0.9, stagger: reduced ? 0 : 0.08, ease: "power3.out", delay: reduced ? 0 : 0.15 });
      if (heroImageRef.current && !reduced) gsap.fromTo(heroImageRef.current, { scale: 1.08 }, { scale: 1, duration: 2.1, ease: "power3.out" });
      if (mobileMotion) {
        gsap.utils.toArray<HTMLElement>("main > section").filter((section) => section !== cinematicRef.current).forEach((section) => {
          gsap.fromTo(section, { autoAlpha: 0.01, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.75, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 88%", toggleActions: "play none none reverse" } });
        });
        if (dayRef.current) {
          const dayImage = dayRef.current.querySelector("img");
          if (dayImage) gsap.fromTo(dayImage, { scale: 1.04 }, { scale: 1, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: dayRef.current, start: "top 82%", toggleActions: "play none none reverse" } });
        }
      }
      if (cinematicRef.current && cinematicCanvasRef.current && (desktopMotion || mobileMotion)) {
        const canvas = cinematicCanvasRef.current;
        const context = canvas.getContext("2d");
        if (context) {
          const frames: HTMLImageElement[] = [];
          let frameWidth = 0;
          let frameHeight = 0;
          const drawFrame = (index: number) => {
            const image = frames[index];
            if (!image || !image.complete || !image.naturalWidth) return;
            frameWidth = image.naturalWidth;
            frameHeight = image.naturalHeight;
            const rect = canvas.getBoundingClientRect();
            const ratio = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(rect.width * ratio);
            canvas.height = Math.round(rect.height * ratio);
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
            const scale = Math.max(rect.width / frameWidth, rect.height / frameHeight);
            const width = frameWidth * scale;
            const height = frameHeight * scale;
            context.clearRect(0, 0, rect.width, rect.height);
            context.drawImage(image, (rect.width - width) / 2, (rect.height - height) / 2, width, height);
          };
          const loadFrame = (index: number) => {
            if (index < 0 || index >= CINEMATIC_FRAMES.length) return;
            if (frames[index]) return;
            const image = new Image();
            image.decoding = "async";
            image.src = CINEMATIC_FRAMES[index];
            image.onload = () => { frames[index] = image; if (index === cinematicFrameRef.current) drawFrame(index); };
            frames[index] = image;
          };
          CINEMATIC_FRAMES.slice(0, 24).forEach((_, index) => loadFrame(index));
          if (mobileMotion) {
            let nextFrame = 24;
            const warmMobileFrames = () => {
              const limit = Math.min(nextFrame + 8, CINEMATIC_FRAMES.length);
              while (nextFrame < limit) loadFrame(nextFrame++);
              if (nextFrame < CINEMATIC_FRAMES.length) window.requestAnimationFrame(warmMobileFrames);
            };
            window.requestAnimationFrame(warmMobileFrames);
          }
          const proxy = { progress: 0 };
          const updateCinematic = (self: { progress: number }) => {
            const index = Math.min(CINEMATIC_FRAMES.length - 1, Math.round(self.progress * (CINEMATIC_FRAMES.length - 1)));
            cinematicFrameRef.current = index;
            loadFrame(index);
            loadFrame(index + 1);
            drawFrame(index);
            if (cinematicProgressRef.current) cinematicProgressRef.current.textContent = `${String(index + 1).padStart(3, "0")} / ${String(CINEMATIC_FRAMES.length).padStart(3, "0")}`;
          };
          const resize = () => drawFrame(cinematicFrameRef.current);
          window.addEventListener("resize", resize);
          removeCinematic = () => window.removeEventListener("resize", resize);
          gsap.to(proxy, { progress: 1, ease: "none", scrollTrigger: { trigger: cinematicRef.current, start: "top top", end: desktopMotion ? "+=1900" : "+=1500", pin: true, pinSpacing: true, scrub: desktopMotion ? 1.65 : 1.45, anticipatePin: 1, invalidateOnRefresh: true, onUpdate: updateCinematic, onLeave: () => { updateCinematic({ progress: 1 }); gsap.fromTo("#lifestyles", { autoAlpha: 0.82, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", overwrite: true }); }, onEnterBack: () => { gsap.set("#lifestyles", { clearProps: "opacity,transform" }); } } });
        }
      }
      if (heroRef.current && desktopMotion && heroImageRef.current) {
        const heroTimeline = gsap.timeline({ scrollTrigger: { trigger: heroRef.current, start: "top top", end: "+=560", pin: true, scrub: 1, invalidateOnRefresh: true } });
        heroTimeline.to(heroImageRef.current, { scale: 1.12, yPercent: 5, ease: "none" }, 0).to("[data-hero-copy]", { y: -34, autoAlpha: 0.35, ease: "none" }, 0).to("[data-hero-search]", { y: 26, scale: 0.96, autoAlpha: 0.78, ease: "none" }, 0).to("header", { autoAlpha: 0.55, ease: "none" }, 0);
      }
      if (desktopMotion && lifestyleRef.current && lifestyleTrackRef.current) {
        const track = lifestyleTrackRef.current;
        const travel = () => Math.max(0, track.scrollWidth - window.innerWidth + 72);
        gsap.to(track, { x: () => -travel(), ease: "none", scrollTrigger: { trigger: lifestyleRef.current, start: "top top", end: () => `+=${travel() + window.innerHeight * 0.55}`, pin: true, scrub: 1, invalidateOnRefresh: true } });
      }
      if (mobileMotion && lifestyleRef.current && lifestyleTrackRef.current) {
        const track = lifestyleTrackRef.current;
        const travel = () => Math.max(0, track.scrollWidth - window.innerWidth + 24);
        gsap.to(track, {
          x: () => -travel(),
          ease: "none",
          scrollTrigger: {
            trigger: lifestyleRef.current,
            start: "top top",
            end: () => `+=${Math.max(1400, travel() + window.innerHeight * 0.35)}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.35,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
      if (dayRef.current && dayImageRef.current && dayNextImageRef.current && dayTimeRef.current && dayTitleRef.current && dayCopyRef.current && !reduced) {
        const proxy = { progress: 0 };
        const updateDay = () => {
          const index = Math.min(dayFrames.length - 1, Math.round(proxy.progress * (dayFrames.length - 1)));
          if (index === dayFrameIndexRef.current) return;
          dayFrameIndexRef.current = index;
          const frame = dayFrames[index];
          const front = dayLayerRef.current === 0 ? dayImageRef.current : dayNextImageRef.current;
          const back = dayLayerRef.current === 0 ? dayNextImageRef.current : dayImageRef.current;
          if (!front || !back) return;
          const nextFrame = dayFrames[index + 1];
          if (nextFrame && !preparedFramesRef.current.has(nextFrame.image)) { const image = new Image(); image.decoding = "async"; image.src = nextFrame.image; preparedFramesRef.current.add(nextFrame.image); }
          back.src = frame.image;
          gsap.set(back, { autoAlpha: 0, scale: 1.035 });
          gsap.timeline({ defaults: { overwrite: true } })
            .to([dayTimeRef.current, dayTitleRef.current, dayCopyRef.current], { autoAlpha: 0, y: 10, duration: 0.3, stagger: 0.05, ease: "power2.out" })
            .set([dayTimeRef.current, dayTitleRef.current, dayCopyRef.current], { textContent: (index === 0 ? [frame.time, frame.title, frame.copy] : undefined) })
            .call(() => { if (dayTimeRef.current) dayTimeRef.current.textContent = frame.time; if (dayTitleRef.current) dayTitleRef.current.textContent = frame.title; if (dayCopyRef.current) dayCopyRef.current.textContent = frame.copy; })
            .to(back, { autoAlpha: 0.8, scale: 1, duration: 1.05, ease: "power2.out" }, 0.28)
            .to(front, { autoAlpha: 0.16, scale: 1.012, duration: 1.05, ease: "power2.out" }, 0.28)
            .to([dayTimeRef.current, dayTitleRef.current, dayCopyRef.current], { autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.075, ease: "power3.out" }, 0.62)
            .call(() => { dayLayerRef.current = dayLayerRef.current === 0 ? 1 : 0; });
        };
        gsap.to(proxy, { progress: 1, ease: "none", scrollTrigger: { trigger: dayRef.current, start: "top top", end: "+=1800", pin: true, pinSpacing: true, scrub: 2.05, anticipatePin: 1, invalidateOnRefresh: true, snap: { snapTo: 1 / (dayFrames.length - 1), duration: { min: 0.55, max: 1.1 }, delay: 0.35, ease: "power2.out" }, onUpdate: updateDay } });
      }
      if (methodLineRef.current && methodRef.current && !reduced) gsap.fromTo(methodLineRef.current, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", ease: "none", scrollTrigger: { trigger: methodRef.current, start: "top 72%", end: "bottom 38%", scrub: 1 } });
      if (methodRef.current && desktopMotion) {
        gsap.to({ progress: 0 }, { progress: 1, ease: "none", scrollTrigger: { trigger: methodRef.current, start: "top 72%", end: "bottom 38%", scrub: 1, onUpdate: (self) => setActiveMethod(Math.min(methodSteps.length - 1, Math.floor(self.progress * methodSteps.length))) } });
        gsap.to(methodRef.current, { scrollTrigger: { trigger: methodRef.current, start: "top top", end: "+=720", pin: true, scrub: 1, invalidateOnRefresh: true } });
      }
      if (timelineRef.current && timelineProgressRef.current && !reduced) gsap.fromTo(timelineProgressRef.current, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", ease: "none", scrollTrigger: { trigger: timelineRef.current, start: "top 80%", end: "bottom 35%", scrub: 1 } });
      if (feelRef.current && feelImageRef.current && desktopMotion) {
        gsap.to({ progress: 0 }, { progress: 1, ease: "none", scrollTrigger: { trigger: feelRef.current, start: "top top", end: "+=1400", pin: true, pinSpacing: true, scrub: 1.75, anticipatePin: 1, invalidateOnRefresh: true, onUpdate: (self) => { const index = Math.min(feelWords.length - 1, Math.floor(self.progress * feelWords.length)); if (index === feelIndexRef.current) return; feelIndexRef.current = index; setActiveFeel(index); const image = feelImageRef.current; if (image) { gsap.timeline({ defaults: { overwrite: true } }).to(image, { opacity: 0, scale: 1.02, duration: 0.38, ease: "power2.out" }).call(() => { image.src = feelImages[index]; }).to(image, { opacity: 1, scale: 1, duration: 0.72, ease: "power3.out" }); } } } });
      }
      ScrollTrigger.refresh();
    }, rootRef);
    return () => { cancelAnimationFrame(id); removeCursorListeners(); removeCinematic(); ctx.revert(); };
  }, []);

  useLayoutEffect(() => {
    if (!menuOpen || !menuPanelRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animation = gsap.fromTo(menuPanelRef.current, { opacity: reduced ? 1 : 0, y: reduced ? 0 : -12 }, { opacity: 1, y: 0, duration: reduced ? 0 : 0.22, ease: "power3.out" });
    return () => { animation.kill(); };
  }, [menuOpen]);

  const chooseFeel = (index: number) => { setActiveFeel(index); feelIndexRef.current = index; const image = feelImageRef.current; if (image && image.src !== feelImages[index]) { gsap.to(image, { opacity: 0, duration: 0.32, overwrite: true, onComplete: () => { image.src = feelImages[index]; gsap.to(image, { opacity: 1, duration: 0.62, overwrite: true }); } }); } };
  const search = () => { document.querySelector("#properties")?.scrollIntoView({ behavior: "smooth" }); toast.success(filteredProperties.length ? `${filteredProperties.length} residences in your view` : "Try widening your search", { description: "Your shortlist is updated below." }); };
  const toggleSaved = (name: string) => { const next = saved.includes(name) ? saved.filter((item) => item !== name) : [...saved, name]; setSaved(next); toast(next.includes(name) ? "Saved to your shortlist" : "Removed from your shortlist"); };
  const start = () => { setCity("All cities"); setType("Any property"); setPrice("Any price"); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return <div ref={rootRef} id="top" className="min-h-screen overflow-x-hidden bg-[#f5f5f1] font-[DM_Sans] text-[#182531] selection:bg-[#3d6f9d] selection:text-white"><div className={`pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-[#142331] transition-opacity duration-500 ${loaded ? "pointer-events-none opacity-0" : "opacity-100"}`} aria-hidden="true"><div className="text-center text-white"><p className="font-[Cormorant_Garamond] text-4xl tracking-[-0.04em]">Rent<span className="text-[#8eafc0]">Homes</span></p><p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">01 / 01</p></div></div><div ref={cursorRef} data-label="VIEW" className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#dce8ed] text-[9px] font-semibold uppercase tracking-[0.15em] text-[#182531] after:content-[attr(data-label)] lg:flex" aria-hidden="true" />
    <header className="absolute inset-x-0 top-0 z-40"><div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-8 lg:px-12 lg:py-7"><Logo /><nav className="hidden items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 lg:flex"><a href="#top" className="border-b border-white pb-1 text-white">Home</a><a href="#properties" className="transition hover:text-white">Properties</a><a href="#method" className="transition hover:text-white">How it works</a><a href="#locations" className="transition hover:text-white">Locations</a><a href="#philosophy" className="transition hover:text-white">About</a></nav><div className="hidden items-center gap-5 lg:flex"><button onClick={() => toast("Sign in is ready for your account connection.")} className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/75 hover:text-white">Sign in</button><button onClick={() => toast("List a home is ready for your enquiry.")} className="rounded-full border border-white/40 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-[#182531] active:scale-[0.97]">List a home</button></div><button aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white hover:bg-white/10 lg:hidden">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div>{menuOpen && <div ref={menuPanelRef} className="mx-4 rounded-2xl border border-white/15 bg-[#182531]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"><nav className="flex flex-col gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80"><a href="#properties" onClick={() => setMenuOpen(false)}>Properties</a><a href="#method" onClick={() => setMenuOpen(false)}>How it works</a><a href="#locations" onClick={() => setMenuOpen(false)}>Locations</a><a href="#philosophy" onClick={() => setMenuOpen(false)}>About</a><button onClick={() => { setMenuOpen(false); toast("List a home is ready for your enquiry."); }} className="mt-2 rounded-full bg-[#dce8ed] px-4 py-3 text-[#182531]">List a home</button></nav></div>}</header>

    <main>
      <section ref={heroRef} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#142739] pb-8 pt-28 sm:pb-14 lg:pb-20"><img ref={heroImageRef} fetchPriority="high" src={HERO_IMAGE} alt="Warmly lit contemporary villa at blue hour" className="absolute inset-0 h-full w-full object-cover object-center" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,24,36,0.92)_0%,rgba(11,24,36,0.7)_38%,rgba(11,24,36,0.2)_100%)]" /><div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,24,36,0.7)_0%,transparent_48%)]" /><div className="relative mx-auto grid w-full max-w-[1440px] gap-8 px-4 sm:gap-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-12"><div data-hero-copy className="max-w-[660px]"><div data-reveal><SectionLabel light>01 / Discovery</SectionLabel></div><h1 data-reveal className="mt-7 max-w-[620px] font-[Cormorant_Garamond] text-[clamp(3rem,13vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.07em] text-white">Finding your new home is simple.</h1><p data-reveal className="mt-6 max-w-[410px] text-sm leading-7 text-white/65 sm:mt-8">The right place is not only found. It is felt — in the light, the space, and the first quiet moment you imagine living there.</p><a data-reveal href="#philosophy" className="mt-7 inline-flex items-center gap-3 text-[10px] sm:mt-9 font-semibold uppercase tracking-[0.2em] text-white hover:text-[#c4d9e5]">Enter the story <ArrowDown className="h-4 w-4" /></a></div><div data-hero-search data-reveal className="w-full lg:justify-self-end"><p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">Find your kind of living</p><div className="grid w-full overflow-hidden rounded-2xl border border-white/20 bg-white/15 shadow-2xl backdrop-blur-xl sm:grid-cols-[1fr_1fr_1fr_auto]"><label className="flex min-w-0 flex-col gap-2 bg-white/95 px-5 py-4"><span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#80909a]">Location</span><select value={city} onChange={(e) => setCity(e.target.value)} className="bg-transparent text-sm font-medium text-[#182531] outline-none focus-visible:ring-2 focus-visible:ring-[#3d6f9d]"><option>All cities</option><option>Malibu</option><option>Austin</option><option>Como</option></select></label><label className="flex min-w-0 flex-col gap-2 border-t border-[#e0e3df] bg-white/95 px-5 py-4 sm:border-l sm:border-t-0"><span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#80909a]">Property type</span><select value={type} onChange={(e) => setType(e.target.value)} className="bg-transparent text-sm font-medium text-[#182531] outline-none focus-visible:ring-2 focus-visible:ring-[#3d6f9d]"><option>Any property</option><option>Villa</option><option>House</option><option>Cottage</option></select></label><label className="flex min-w-0 flex-col gap-2 border-t border-[#e0e3df] bg-white/95 px-5 py-4 sm:border-l sm:border-t-0"><span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#80909a]">Price</span><select value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent text-sm font-medium text-[#182531] outline-none focus-visible:ring-2 focus-visible:ring-[#3d6f9d]"><option>Any price</option><option>Under $3M</option><option>Premium homes</option></select></label><button onClick={search} className="flex min-h-[58px] items-center justify-center gap-3 bg-[#3d6f9d] px-7 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition hover:bg-[#2f5b84] active:scale-[0.98]"><Search className="h-4 w-4" />Search</button></div></div></div><div className="absolute bottom-5 right-5 hidden items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 lg:flex"><span className="h-px w-12 bg-white/30" />Scroll to discover</div></section>

      <section ref={cinematicRef} id="cinematic-sequence" className="relative min-h-[100svh] overflow-hidden bg-[#101e2a] text-white"><img src={HERO_IMAGE} alt="Architectural home exterior at blue hour" className="absolute inset-0 h-full w-full object-cover object-center opacity-100" /><canvas ref={cinematicCanvasRef} aria-label="A scroll-controlled journey from the home exterior through the interior to a quiet room" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-[#0c1a25]/40" /><div className="absolute inset-0 bg-gradient-to-r from-[#0c1a25]/85 via-[#0c1a25]/25 to-[#0c1a25]/35" /><div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] items-end px-4 py-10 sm:px-8 sm:py-12 lg:items-center lg:px-12 lg:py-16"><div data-mobile-immersion-copy className="max-w-[560px]"><SectionLabel light>02 / Immersion</SectionLabel><h2 className="mt-6 max-w-[470px] font-[Cormorant_Garamond] text-6xl font-medium leading-[0.86] tracking-[-0.07em] sm:text-8xl">Go a little further in.</h2><p className="mt-7 max-w-[355px] text-sm leading-7 text-white/65">From the first view outside to the room you keep imagining. Scroll through the threshold.</p><div data-mobile-immersion-markers className="mt-10 flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55"><span className="h-px w-12 bg-white/35" />Exterior <ArrowRight className="h-3.5 w-3.5" /> Interior <ArrowRight className="h-3.5 w-3.5" /> Room</div></div></div><div className="absolute bottom-8 left-5 right-5 flex items-end justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12"><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">Scroll controls the journey</p><span ref={cinematicProgressRef} className="font-mono text-[10px] text-white/50">001 / 240</span></div></section>

      <section id="philosophy" className="relative isolate overflow-hidden bg-[#eef1ef] px-4 py-20 sm:px-8 sm:py-28 lg:min-h-[78svh] lg:px-12 lg:py-36"><div className="absolute inset-0 opacity-10"><img loading="lazy" decoding="async" src={HERO_IMAGE} alt="" className="h-full w-full object-cover grayscale" /></div><div className="absolute inset-0 bg-[#eef1ef]/80" /><div className="relative mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.45fr_1.55fr] lg:items-center"><div><SectionLabel>02 / Desire</SectionLabel><p className="mt-6 max-w-[210px] text-xs leading-6 text-[#7c898e]">An address is a beginning. The details are what make it yours.</p></div><div className="max-w-[890px]"><h2 className="font-[Cormorant_Garamond] text-[clamp(3.4rem,7.5vw,8rem)] font-medium leading-[0.86] tracking-[-0.07em] text-[#182531]">A home is more than four walls.</h2><p className="mt-10 max-w-[500px] text-xl leading-[1.35] text-[#6b7a80] sm:text-2xl">It is light. Space. Silence. The feeling of arriving.</p></div></div><div className="absolute bottom-10 right-10 hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#9da9aa] lg:block">40° 42' 46.2" N / 74° 00' 21.5" W</div></section>



      <section id="lifestyles" ref={lifestyleRef} className="scroll-mt-10 min-h-[100svh] overflow-hidden bg-[#f5f5f1] py-20 sm:py-32 lg:min-h-screen lg:py-0"><div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:flex lg:min-h-screen lg:items-center lg:px-12"><div className="shrink-0 bg-[#f5f5f1] pb-14 lg:w-[26vw] lg:bg-transparent lg:pb-0"><SectionLabel>03 / Exploration</SectionLabel><h2 className="mt-6 max-w-[310px] font-[Cormorant_Garamond] text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl">Find your kind of living.</h2><p className="mt-6 max-w-[250px] text-sm leading-6 text-[#7a858b]">Different lives ask for different rooms. Move through the possibilities.</p><div className="mt-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3d6f9d]"><MoveRight className="h-4 w-4" /> Drag / scroll</div></div><div ref={lifestyleTrackRef} data-cursor="DRAG" className="flex w-max flex-row items-start gap-8 lg:gap-10">{lifestyleCards.map((card, index) => <article key={card.number} className={`w-[82vw] ${card.width} group shrink-0 ${index % 2 ? "lg:mt-20" : ""}`}>
<div className="relative aspect-[0.9] overflow-hidden bg-[#dbe1df]"><img loading="lazy" decoding="async" src={card.image} alt={`${card.title} architectural lifestyle`} onLoad={() => ScrollTrigger.refresh()} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#122330]/65 via-transparent to-transparent" /><span className="absolute left-5 top-5 font-mono text-[10px] text-white/70">{card.number}</span><div className="absolute bottom-5 left-5 right-5 text-white"><h3 className="font-[Cormorant_Garamond] text-4xl tracking-[-0.05em]">{card.title}</h3><p className="mt-2 max-w-[220px] text-xs leading-5 text-white/70">{card.description}</p></div></div><button onClick={() => toast(`${card.title} is now your selected lifestyle.`)} className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#3d6f9d] hover:gap-3">Explore lifestyle <ArrowUpRight className="h-3.5 w-3.5" /></button></article>)}</div></div></section>

      <section id="properties" className="scroll-mt-10 bg-[#182531] px-4 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><SectionLabel light>04 / Imagination</SectionLabel><h2 className="mt-6 max-w-[690px] font-[Cormorant_Garamond] text-5xl font-medium leading-[0.88] tracking-[-0.065em] sm:text-7xl">Most viewed, for good reason.</h2></div><p className="max-w-[260px] text-sm leading-6 text-white/55">Editorially selected residences. Real places, presented with room to imagine.</p></div><div className="mt-16 grid gap-12 lg:grid-cols-[1.25fr_0.8fr_0.95fr] lg:items-start lg:gap-8">{filteredProperties.map((property, index) => <article key={property.name} data-cursor="VIEW" className={`${index === 1 ? "lg:mt-28" : index === 2 ? "lg:mt-12" : ""} group`}><div className="relative aspect-[0.82] overflow-hidden bg-[#2b3b46]"><img loading="lazy" decoding="async" src={property.image} alt={`${property.name} exterior`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-[#0e1b26]/75 via-transparent to-transparent" /><span className="absolute left-5 top-5 font-mono text-[10px] text-white/70">{property.number} / VIEW</span><button onClick={() => toggleSaved(property.name)} aria-label={`Save ${property.name}`} className={`absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm ${saved.includes(property.name) ? "bg-[#3d6f9d] text-white" : "bg-white/85 text-[#51616d]"}`}><Heart className={`h-4 w-4 ${saved.includes(property.name) ? "fill-current" : ""}`} /></button><div className="absolute bottom-5 left-5 right-5 lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100"><p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/55">{property.type} · {property.city}</p><h3 className="mt-2 font-[Cormorant_Garamond] text-4xl leading-none tracking-[-0.05em]">{property.name}</h3><p className="mt-4 font-[Cormorant_Garamond] text-2xl">{property.price}</p></div></div><button data-cursor="OPEN" onClick={() => toast(`${property.name} selected`, { description: "A full property detail transition can be connected when real listings are available." })} className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a9c4d3] hover:gap-3 hover:text-white">Explore property <ArrowRight className="h-3.5 w-3.5" /></button></article>)}</div>{!filteredProperties.length && <p className="mt-14 border border-white/15 p-8 text-center text-sm text-white/60">No residences match those filters. Reset the search to restore the collection.</p>}</div></section>

      <section ref={dayRef} id="day" className="relative min-h-[100svh] overflow-hidden bg-[#111d27] text-white"><img ref={dayImageRef} src={dayFrames[0].image} alt="Quiet architectural interior transitioning through the day" className="absolute inset-0 h-full w-full object-cover object-center opacity-80" /><img ref={dayNextImageRef} src={dayFrames[0].image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center opacity-0" /><div className="absolute inset-0 bg-[#10202c]/45" /><div className="absolute inset-0 bg-gradient-to-r from-[#0e1a24]/85 via-[#0e1a24]/25 to-[#0e1a24]/40" /><div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] items-center px-4 py-16 sm:px-8 sm:py-20 lg:px-12"><div className="max-w-[630px]"><SectionLabel light>05 / Signature experience</SectionLabel><p className="mt-10 font-mono text-xs tracking-[0.16em] text-white/60"><span ref={dayTimeRef}>{dayFrames[0].time}</span></p><h2 ref={dayTitleRef} className="mt-5 font-[Cormorant_Garamond] text-6xl font-medium leading-[0.85] tracking-[-0.07em] sm:text-8xl">{dayFrames[0].title}</h2><p ref={dayCopyRef} className="mt-7 max-w-[330px] text-sm leading-7 text-white/65">{dayFrames[0].copy}</p></div></div><div className="absolute bottom-10 left-5 right-5 flex items-end justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12"><div><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">A day in your new home</p><p className="mt-2 text-[10px] text-white/45">Scroll controls the timeline</p></div><span className="font-mono text-[10px] text-white/50">01 — 05</span></div></section>

      <section className="relative min-h-[100svh] bg-[#e7ecea] px-4 py-14 sm:px-8 sm:py-16 lg:h-[100svh] lg:min-h-0 lg:px-12 lg:py-10"><div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-[1440px] gap-10 lg:h-[100svh] lg:min-h-0 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-12"><div><SectionLabel>06 / Attention</SectionLabel><h2 className="mt-6 max-w-[470px] font-[Cormorant_Garamond] text-6xl font-medium leading-[0.86] tracking-[-0.07em]">Inside the details.</h2><p className="mt-7 max-w-[350px] text-sm leading-6 text-[#708087]">Architecture becomes personal in the small decisions. Tap a point of view.</p><div className="mt-7 border-t border-[#cbd5d1] lg:mt-8">{detailItems.map((item) => <button key={item.id} onClick={() => setActiveDetail(item.id)} className={`flex w-full items-center justify-between border-b border-[#cbd5d1] py-4 text-left text-[10px] font-semibold uppercase tracking-[0.16em] transition ${activeDetail === item.id ? "text-[#3d6f9d]" : "text-[#829095] hover:text-[#182531]"}`}><span>{item.label}</span><ArrowRight className={`h-3.5 w-3.5 transition-transform ${activeDetail === item.id ? "translate-x-1" : ""}`} /></button>)}</div></div><div className="relative aspect-[1.1] max-h-[68svh] overflow-hidden bg-[#bac7c5] lg:aspect-[1.25] lg:max-h-[70svh]"><img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85" alt="Architectural interior with natural light and considered materials" className={`h-full w-full object-cover transition duration-700 ${activeDetail === "light" ? "scale-[1.04] object-center" : activeDetail === "material" ? "scale-[1.08] object-[62%_40%]" : activeDetail === "space" ? "scale-[1.03] object-[45%_70%]" : "scale-[1.06] object-[82%_58%]"}`} /><div className="absolute inset-0 bg-[#0e2735]/10" />{detailItems.map((item) => <button key={item.id} onClick={() => setActiveDetail(item.id)} aria-label={`Explore ${item.label}`} className={`absolute ${item.position} flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[10px] font-semibold transition ${activeDetail === item.id ? "border-white bg-[#3d6f9d] text-white" : "border-white/70 bg-[#182531]/60 text-white/80 hover:bg-[#3d6f9d]"}`}>{item.label.slice(0, 1)}</button>)}<div className="absolute bottom-5 left-5 right-5 bg-[#f5f5f1]/90 p-5 backdrop-blur-sm"><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#3d6f9d]">{detailItems.find((item) => item.id === activeDetail)?.label}</p><p className="mt-2 max-w-[380px] font-[Cormorant_Garamond] text-2xl leading-tight text-[#182531]">{detailItems.find((item) => item.id === activeDetail)?.copy}</p></div></div></div></section>

      <section id="locations" className="bg-[#172531] px-4 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1440px]"><div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:items-end"><div><SectionLabel light>07 / Place</SectionLabel><h2 className="mt-6 max-w-[460px] font-[Cormorant_Garamond] text-6xl font-medium leading-[0.86] tracking-[-0.07em]">The places we call home.</h2><p className="mt-7 max-w-[320px] text-sm leading-6 text-white/55">A geographic point of view — not a directory. Each place holds a different way of living.</p><div className="mt-10 flex flex-wrap gap-2">{destinations.map((destination, index) => <button key={destination.city} onClick={() => setActiveDestination(index)} className={`border px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition ${index === activeDestination ? "border-[#8eafc0] bg-[#dce8ed] text-[#182531]" : "border-white/20 text-white/55 hover:border-white/60 hover:text-white"}`}>{destination.city}</button>)}</div></div><div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end"><div className="relative aspect-[1.25] overflow-hidden bg-[#2a3b47]"><img src={destinations[activeDestination].image} alt={`${destinations[activeDestination].city} architectural atmosphere`} className="h-full w-full object-cover transition duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24]/75 to-transparent" /><div className="absolute bottom-5 left-5"><p className="font-mono text-[9px] tracking-[0.14em] text-white/55">{destinations[activeDestination].coordinate}</p><h3 className="mt-3 font-[Cormorant_Garamond] text-5xl tracking-[-0.05em]">{destinations[activeDestination].city}</h3></div></div><div className="border-t border-white/20 pt-5"><p className="font-[Cormorant_Garamond] text-3xl leading-tight text-white/90">{destinations[activeDestination].description}</p><button onClick={() => toast(`${destinations[activeDestination].city} selected`, { description: "Connect real availability here when location data is available." })} className="mt-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b8d1dc]">Explore the place <ArrowUpRight className="h-3.5 w-3.5" /></button></div></div></div></div></section>

      <section ref={methodRef} id="method" className="bg-[#f5f5f1] px-4 py-20 text-[#182531] sm:px-8 sm:py-24 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1440px]"><div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]"><div><SectionLabel>08 / Confidence</SectionLabel><h2 className="mt-6 max-w-[380px] font-[Cormorant_Garamond] text-6xl font-medium leading-[0.86] tracking-[-0.07em]">The easiest method to find a house.</h2></div><div><p className="max-w-[430px] text-sm leading-6 text-[#78858a]">A five-part journey designed to make a meaningful decision feel clear.</p><div className="relative mt-16 border-t border-[#ccd5d2] pt-8"><span ref={methodLineRef} className="absolute left-0 top-[-1px] h-px w-full origin-left scale-x-0 bg-[#3d6f9d]" /><div className="grid gap-0 sm:grid-cols-5">{methodSteps.map((step, index) => <button key={step[0]} onClick={() => setActiveMethod(index)} className={`border-l border-[#ccd5d2] px-4 py-3 text-left transition first:border-l-0 sm:min-h-[180px] sm:px-5 ${activeMethod === index ? "bg-[#e6ecea]" : "hover:bg-[#edf0ed]"}`}><span className={`font-mono text-[10px] ${activeMethod === index ? "text-[#3d6f9d]" : "text-[#9aa6a6]"}`}>{step[0]}</span><h3 className={`mt-12 font-[Cormorant_Garamond] text-2xl ${activeMethod === index ? "text-[#182531]" : "text-[#778387]"}`}>{step[1]}</h3><p className="mt-2 text-[11px] leading-5 text-[#899497]">{step[2]}</p></button>)}</div></div></div></div></div></section>

      <section ref={timelineRef} id="timeline" className="bg-[#182531] px-4 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><SectionLabel light>09 / Decision</SectionLabel><h2 className="mt-6 max-w-[620px] font-[Cormorant_Garamond] text-6xl font-medium leading-[0.86] tracking-[-0.07em]">From search to keys.</h2></div><p className="max-w-[280px] text-sm leading-6 text-white/55">A simple line between the first instinct and the moment you arrive.</p></div><div className="relative mt-20"><span className="absolute left-0 right-0 top-4 hidden h-px bg-white/20 sm:block" /><span ref={timelineProgressRef} className="absolute left-0 top-4 hidden h-px w-full origin-left scale-x-0 bg-[#8eafc0] sm:block" /><div className="grid gap-8 sm:grid-cols-5 sm:gap-0">{[["01", "Discover"], ["02", "Save"], ["03", "View"], ["04", "Choose"], ["05", "Keys"]].map(([number, label], index) => <button key={number} onClick={() => toast(`${label}: this journey step is selected.`)} className="group relative border-l border-white/15 pl-5 text-left sm:border-l-0 sm:px-5"><span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-[#182531] font-mono text-[9px] text-white/55 transition group-hover:border-[#8eafc0] group-hover:text-[#8eafc0] sm:mx-auto">{number}</span><span className="mt-5 block font-[Cormorant_Garamond] text-3xl tracking-[-0.04em] text-white/60 transition group-hover:text-white sm:text-center">{label}</span><span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.14em] text-white/35 sm:text-center">{index === 0 ? "See the possibility" : index === 4 ? "Make it yours" : "Keep moving"}</span></button>)}</div></div></div></section>

      <section ref={feelRef} className="relative min-h-[100svh] overflow-hidden bg-[#eef1ef] px-4 py-16 sm:px-8 sm:py-20 lg:h-[100svh] lg:min-h-0 lg:px-12 lg:py-16"><div className="absolute inset-0 opacity-0 transition-opacity duration-700 lg:opacity-25"><img ref={feelImageRef} src={feelImages[0]} alt="" className="h-full w-full object-cover grayscale" /></div><div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1440px] flex-col justify-center lg:h-[100svh] lg:min-h-0"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><SectionLabel>10 / What matters</SectionLabel><h2 className="mt-6 max-w-[750px] font-[Cormorant_Garamond] text-6xl font-medium leading-[0.84] tracking-[-0.07em] sm:text-8xl">What makes a home feel right?</h2></div><p className="max-w-[250px] text-sm leading-6 text-[#7b898e]">Not every answer is visible at first glance.</p></div><div className="mt-12 grid border-t border-[#cdd6d3] sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">{feelWords.map(([word, sub], index) => <button key={word} onClick={() => chooseFeel(index)} className={`group border-b border-[#cdd6d3] px-0 py-6 text-left transition-[background-color,color,opacity,transform] duration-500 ease-out sm:px-7 lg:px-9 lg:py-5 ${activeFeel === index ? "bg-white/30" : "hover:bg-white/15"}`}><span className={`font-mono text-[10px] ${activeFeel === index ? "text-[#3d6f9d]" : "text-[#98a5a7]"}`}>0{index + 1}</span><span className={`mt-8 block font-[Cormorant_Garamond] tracking-[-0.05em] transition sm:text-5xl ${activeFeel === index ? "text-5xl text-[#182531]" : "text-4xl text-[#708087] group-hover:text-[#182531]"}`}>{word}</span><span className={`mt-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#3d6f9d] transition ${activeFeel === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>{sub}</span></button>)}</div></div></section>

      <section className="bg-[#f5f5f1] px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1440px] gap-12 border-y border-[#d5dcd9] py-14 lg:grid-cols-[0.5fr_1.5fr] lg:py-20"><div><SectionLabel>11 / Stories</SectionLabel><p className="mt-6 max-w-[210px] text-xs leading-6 text-[#7b898e]">Stories from people who found home belong here when real stories are available.</p></div><div><p className="max-w-[830px] font-[Cormorant_Garamond] text-4xl leading-[0.95] tracking-[-0.05em] text-[#182531] sm:text-6xl">We leave space for the voices of the people who live in these places — never inventing what has not been said.</p><button onClick={() => toast("Real resident stories can be connected when approved testimonials are available.")} className="mt-10 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3d6f9d]">Add a real story <ArrowRight className="h-3.5 w-3.5" /></button></div></div></section>

      <section className="relative overflow-hidden bg-[#142331] px-4 py-20 text-white sm:px-8 sm:py-28 lg:min-h-[78svh] lg:px-12 lg:py-36"><div className="absolute inset-0 opacity-25"><img src={HERO_IMAGE} alt="" className="h-full w-full object-cover" /></div><div className="absolute inset-0 bg-[#142331]/75" /><div className="relative mx-auto flex max-w-[1440px] flex-col justify-between gap-14 lg:min-h-[48svh] lg:flex-row lg:items-end"><div><SectionLabel light>12 / Final chapter</SectionLabel><h2 className="mt-6 max-w-[900px] font-[Cormorant_Garamond] text-6xl font-medium leading-[0.84] tracking-[-0.07em] sm:text-8xl lg:text-[9rem]">Your next chapter starts with a better address.</h2></div><button data-cursor="OPEN" onClick={start} className="group flex shrink-0 items-center gap-4 rounded-full bg-[#dce8ed] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#182531] transition hover:bg-white active:scale-[0.97]">Find your home <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button></div></section>
    </main>

    <footer className="bg-[#f5f5f1] px-4 py-8 sm:px-8 sm:py-10 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 border-t border-[#d6dcd9] pt-8 md:flex-row md:items-center md:justify-between"><Logo /><p className="text-[10px] uppercase tracking-[0.14em] text-[#899497]">Find a place worth coming home to.</p><div className="flex gap-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7a858b]"><button onClick={() => toast("Privacy information is available on request.")}>Privacy</button><button onClick={() => toast("Terms information is available on request.")}>Terms</button><button onClick={() => toast("hello@rent-homes.example")}>Contact</button></div><p className="text-[10px] uppercase tracking-[0.13em] text-[#a0a9a8]">© 2026 RentHomes</p></div></footer>
  </div>;
}
