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

## Smooth scroll refinement

- [x] Increase internal scroll breathing room while keeping Signature and What matters visibly at 100vh.
- [x] Add stronger hold zones and smoother scrub lag to both cinematic sections.
- [x] Use calmer crossfade and copy-transition timing at state boundaries.
- [x] Keep reduced-motion and mobile behavior stable.
- [x] Re-run typecheck, production build, screenshots, and browser-console QA.
- [ ] Save the smoother-scroll checkpoint.

## Signature experience slower smoothness pass

- [x] Give each of the five Signature states stronger hold zones without changing the visible 100vh section height.
- [x] Slow the scrub response enough that fast wheel and trackpad gestures feel settled rather than rushed.
- [x] Add gentle state snapping or threshold easing only if it improves calmness without causing jumps.
- [x] Preserve layered crossfade, staggered copy transition, mobile fallback, and reduced-motion behavior.
- [x] Re-run typecheck, production build, responsive screenshots, and browser-console QA.
- [ ] Save the updated Signature checkpoint.

## Attention section 100vh refinement

- [x] Keep 06 / Attention within a 100vh visual presentation on desktop and mobile.
- [x] Preserve the editorial hotspot list, active crop/zoom state, and caption transition.
- [x] Fit the image and controls into the compact viewport without clipping or reducing accessibility.
- [x] Preserve mobile and reduced-motion fallbacks.
- [x] Re-run typecheck, production build, responsive screenshots, and browser-console QA.
- [ ] Save the updated Attention checkpoint.

## New exterior-to-interior cinematic sequence

- [x] Add a new section immediately below 02 / Desire without changing the existing section order after it.
- [x] Create one coherent architectural journey: exterior approach → threshold/entry → main interior → room detail.
- [x] Generate or prepare 200+ consistently framed frames with stable lighting, camera direction, perspective, and crop.
- [x] Use a pinned 100vh desktop presentation with scroll progress mapped to sequence frames.
- [x] Use canvas or an equivalent efficient renderer instead of mounting 200+ visible image elements.
- [x] Preload the first frames and progressively prepare the remaining frames with a poster fallback.
- [x] Add restrained captions and progress treatment without competing with the existing RentHomes design.
- [x] Provide mobile and reduced-motion fallbacks that avoid forced pinning or excessive frame loading.
- [x] Document the new sequence assets, source assumptions, dimensions, and licensing in the asset manifest.
- [x] Re-run typecheck, production build, responsive screenshots, interaction tests, and browser-console QA.
- [ ] Save the new cinematic-section checkpoint.

## Cinematic sequence handoff fix

- [x] Ensure the final frame is drawn and held before the pinned trigger reaches its end.
- [x] Ensure ScrollTrigger releases the canvas section and continues into 03 / Exploration without a dead-end.
- [x] Add a subtle handoff fade/overlap so the next section enters naturally after the sequence.
- [x] Preserve the 100vh composition, mobile poster fallback, and reduced-motion behavior.
- [x] Verify the final-frame-to-next-section scroll flow in a browser, then run build and console QA.
- [ ] Save the transition-fix checkpoint.

## Cinematic section order change

- [x] Move 02 / Immersion directly below the hero section.
- [x] Keep 02 / Desire immediately after the cinematic section and preserve all later sections in their current order.
- [x] Preserve the cinematic canvas, pin release, frame counter, mobile poster fallback, and reduced-motion behavior.
- [x] Verify navigation anchors and page flow after the reorder.
- [x] Re-run typecheck, production build, screenshots, and browser-console QA.
- [ ] Save the reordered-section checkpoint.

## Mobile-first responsive pass

- [x] Audit phone and tablet layouts against the approved desktop baseline without altering desktop composition.
- [x] Improve mobile hero text scale, safe-area spacing, search stacking, and navigation touch targets.
- [x] Ensure the 240-frame cinematic section uses a stable poster fallback on mobile and preserves desktop canvas animation.
- [x] Ensure all cards, galleries, timelines, hotspots, selectors, and CTA controls fit narrow widths without clipping or horizontal overflow.
- [x] Preserve desktop-only pinning, custom cursor, and GSAP animation behavior at desktop breakpoints.
- [x] Add or refine touch-friendly focus/active states and reduced-motion behavior.
- [x] Verify representative phone, tablet, and desktop screenshots plus browser-console/build health.
- [ ] Save the responsive checkpoint.

## Mobile animation debugging

- [x] Identify why mobile motion is gated, skipped, hidden, or not visibly progressing.
- [x] Check reduced-motion detection, desktop breakpoint conditions, mobile poster/canvas fallbacks, and GSAP lifecycle cleanup.
- [x] Restore appropriate mobile entrance and scroll-driven animations without enabling desktop-only pinning or 240-frame canvas loading on phones.
- [x] Verify phone and tablet motion behavior, reduced-motion behavior, and unchanged desktop animation behavior.
- [x] Re-run typecheck, production build, screenshots, and browser-console QA.
- [ ] Save the mobile animation fix checkpoint.

## Mobile Immersion animation fix

- [x] Identify why the mobile 02 / Immersion poster and content reveal is not visibly animating.
- [x] Add a dedicated mobile Immersion entrance with poster scale/opacity and staggered copy/marker reveal.
- [x] Keep the mobile treatment non-pinned and avoid loading the 240-frame canvas sequence on phones.
- [x] Preserve desktop canvas scrubbing, pinning, and handoff behavior exactly.
- [x] Verify the section on phone and desktop, then run typecheck/build/console QA.
- [ ] Save the Immersion animation checkpoint.

## Mobile pinned Immersion correction

- [x] Compare the working 05 / Signature pin trigger with the current mobile 02 / Immersion path.
- [x] Add a mobile pinned scrub timeline for the Immersion poster and content instead of relying only on a reveal.
- [x] Keep the mobile section at 100vh, with a stable poster image and restrained text/marker transitions.
- [x] Ensure the pin releases smoothly into 02 / Desire without a dead end.
- [x] Preserve desktop 240-frame canvas behavior and desktop design unchanged.
- [x] Verify on mobile and desktop, then run typecheck/build/console QA.
- [ ] Save the pinned Immersion checkpoint.

## Full mobile Immersion frame sequence

- [x] Confirm the complete ordered 240-frame manifest is available to the frontend.
- [x] Render the full sequence on mobile with the same canvas approach used by desktop, using a mobile-safe canvas resolution.
- [x] Preload the first frame immediately and progressively load the remaining frames without mounting 240 visible image elements.
- [x] Map mobile scroll progress across the complete 001 / 240 range and keep the final frame settled before release into 02 / Desire.
- [x] Preserve a poster/reduced-motion fallback for devices that cannot animate the full sequence.
- [x] Verify mobile frame progression, loading behavior, pin release, desktop preservation, build health, and console status.
- [ ] Save the full mobile sequence checkpoint.

## Mobile 03 / Exploration animation fix
- [x] Inspect the existing Exploration desktop and mobile ScrollTrigger branches and reproduce the mobile scroll failure.
- [x] Add a mobile-safe Exploration animation path with stable section travel, visible card transitions, and no scroll dead-end.
- [x] Preserve desktop Exploration layout and animation behavior.
- [x] Verify mobile/tablet/desktop rendering, scroll progression, build health, and browser console status.
- [x] Save the verified Exploration fix checkpoint.

## Complete mobile 03 / Exploration animation
- [x] Reproduce the reported mobile Exploration behavior at the section anchor and through the full card sequence.
- [x] Replace the partial mobile reveal with a complete scroll-driven card progression and stable section flow.
- [x] Preserve desktop horizontal pinning and visual composition.
- [x] Validate phone/tablet/desktop scroll behavior, build health, and console output.
- [x] Save the completed Exploration checkpoint.

## Restore desktop and mobile horizontal Exploration
- [x] Confirm the last mobile pinned refactor changed the base section classes and isolate those changes to mobile only.
- [x] Restore the desktop Exploration section geometry and horizontal pin exactly.
- [x] Implement mobile pinned right-to-left horizontal card travel with stable width and handoff.
- [x] Verify mobile/tablet/desktop screenshots, scroll behavior, build health, and console output.
- [x] Save the corrected Exploration checkpoint.

## Responsive mobile 03 / Exploration viewport
- [x] Reproduce the mobile copy and image overflow at the Exploration anchor.
- [x] Fit the Exploration copy and current horizontal image card inside the mobile viewport without changing desktop geometry.
- [x] Preserve pinned right-to-left travel and reliable section handoff.
- [x] Verify phone/tablet/desktop previews, build health, and console output.
- [x] Save the responsive Exploration checkpoint.

## Implement requested mobile Exploration behavior
- [x] Audit the current mobile opening composition and boundary states.
- [x] Implement responsive text-plus-image opening view with bottom-pinned horizontal travel and reverse-on-scroll behavior.
- [x] Restore the text label at the top and bottom boundaries of the mobile timeline.
- [x] Preserve desktop Exploration code and visual behavior.
- [x] Self-check mobile states, desktop preservation, build health, and console output.
- [x] Save the implementation checkpoint.
