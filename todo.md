# RentHomes Upgrade Checklist

- [x] Audit the existing project structure, routes, dependencies, CSS architecture, assets, typography, colors, and current responsive behavior. The project is React 19 + Vite + Tailwind 4 with one `/` route, a single `Home.tsx` page, no GSAP dependency, generated hero/mark assets, and stable Unsplash fallback imagery.
- [x] Read the complete attached master prompt and extract all concrete content, motion, asset, accessibility, responsive, performance, and QA requirements.
- [x] Preserve the existing RentHomes DNA: dark navy, warm ivory, architectural photography, editorial serif typography, restrained UI, and premium positioning.
- [x] Reframe the page narrative around Discovery → Desire → Exploration → Imagination → Confidence → Decision → Home.
- [x] Expand the page to the required narrative sections, including the cinematic hero, emotional philosophy section, lifestyle gallery, property discovery, day-in-the-home storytelling, details, places, method, process, home-feel statement, non-fabricated stories treatment, final CTA, and minimal footer.
- [x] Add GSAP and ScrollTrigger as the primary scroll/motion engine if compatible with the existing frontend; use Motion/Framer Motion only for UI/state transitions.
- [x] Implement graceful reduced-motion and mobile fallbacks for pinned, horizontal, and scroll-driven sections.
- [x] Use legally usable, consistently art-directed visual assets and avoid fabricated testimonials, ratings, or reviews. Added `asset-manifest.md` and intentionally framed the stories section as a placeholder for approved real stories.
- [x] Add the required interaction states: search/filter, lifestyle navigation, property exploration, save states, metadata reveal, and accessible keyboard/focus behavior.
- [x] Keep page-specific styling Tailwind-first and avoid adding an extra custom CSS stylesheet.
- [x] Verify build health, console/network issues, responsive layouts, motion fallbacks, asset loading, and performance warnings. TypeScript and production builds pass; screenshots cover desktop/mobile; remaining warning is the standard bundle-size advisory.
- [ ] Save one complete upgraded checkpoint and deliver the live project version.
