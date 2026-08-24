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

## Re-audit and precision-refactor gaps

- [x] Compare every required section in the attached prompt against the rendered page and mark any content, labels, hierarchy, or section-order mismatch.
- [x] Verify the hero implements 100svh, initial-load choreography, pinned scroll behavior, compressed search UI, changing overlay, and a visible scroll indicator.
- [x] Verify the lifestyle gallery is truly vertically driven horizontal scrolling on desktop with dynamic measurements, and a simplified vertical composition on mobile.
- [x] Verify the property discovery treatment includes editorial spreads, hover metadata reveal, active/inactive hierarchy, and meaningful selection behavior without fake navigation.
- [x] Verify the day-in-home section is a scroll-controlled timeline with no autoplay, progressive image preparation, device-aware fallback, and reduced-motion static/fade behavior.
- [x] Verify the details section has editorial hotspots with active crop/zoom/caption behavior rather than generic tooltip styling.
- [x] Verify the locations section is explicitly editorial when no real availability data exists and does not imply fabricated statistics.
- [x] Verify the method section behaves as a pinned continuous composition with active-step changes, progress movement, image/state transitions, and responsive fallback.
- [x] Verify the search UI provides focused-field affordances, smooth active states, and premium non-Bootstrap treatment.
- [x] Verify a minimal branded loader exists without an artificial delay or generic spinner.
- [x] Verify custom cursor behavior is implemented desktop-only with mobile/touch/reduced-motion disablement.
- [x] Verify the asset manifest covers every external image URL, license assumption, usage note, and production-hosting caveat.
- [x] Verify exact attached copy, narrative sequence, reduced-motion behavior, semantic structure, focus states, alt text, and no fake testimonial/statistical claims.
- [x] Re-run visual, interaction, console, network, performance, and production-build QA after refactoring. Desktop/mobile screenshots pass, the browser console is clean, interactions were exercised, and the only build note is the standard large-chunk advisory.
- [ ] Save and publish a new checkpoint only after all required gaps are closed or explicitly documented as unavailable due to missing real assets/data.

## Section 10 pinned scrub interaction

- [x] Add a dedicated pinned Section 10 desktop composition with a scrubbed six-step timeline.
- [x] Keep the headline and framing fixed while the active word, supporting copy, image source, crop, and progress indicator transition with scroll.
- [x] Add an intentional section travel distance and prevent nested or conflicting ScrollTriggers.
- [x] Keep click selection synchronized with the scrubbed state without breaking scroll control.
- [x] Provide a mobile and reduced-motion fallback that remains readable and does not pin or force horizontal movement.
- [x] Re-run typecheck, production build, desktop/mobile screenshots, and browser-console QA.
- [ ] Save the updated checkpoint after verification.

## Signature experience compact cinematic timing

- [x] Keep the Signature experience presentation within 100vh on desktop and mobile viewport composition.
- [x] Replace instant frame swaps with layered incoming/outgoing image crossfades.
- [x] Add hold zones so each time-of-day state remains stable before transitioning.
- [x] Stagger time, title, and copy transitions with calm editorial timing.
- [x] Keep the scroll-controlled interaction smooth without adding extra section height.
- [x] Provide a reduced-motion fallback with no forced scrub transitions.
- [x] Re-run typecheck, production build, responsive screenshots, and browser-console QA.
- [ ] Save the updated checkpoint after verification.

## Section 10 compact 100vh refinement

- [x] Keep What matters visually contained within a 100vh viewport presentation on desktop and mobile.
- [x] Replace abrupt active-state changes with smooth scrubbed transitions for typography, supporting copy, image opacity, and crop.
- [x] Keep a deliberate hold window for each of the six feel states while the section is pinned on desktop.
- [x] Keep click selection synchronized with the smoother scrubbed state.
- [x] Preserve non-pinned mobile and reduced-motion fallbacks.
- [x] Re-run typecheck, build, responsive screenshots, and browser-console QA.
- [ ] Save the updated checkpoint after verification.
