# Verification Notes

## Visual pass

The desktop and mobile full-page captures show the intended reference-matched composition: dark architectural hero image with left-aligned serif headline and white search panel, light editorial sections, three listing cards, a pale promotional block, a three-step process row, and a dark closing call-to-action. The mobile capture confirms the hero search fields stack vertically, the navigation collapses behind a menu control, listing cards stack, and the editorial sections remain readable without horizontal overflow.

## Interaction pass

The live preview exposed the expected navigation links, three select controls, the Search button, listing save buttons, listing view actions, and footer actions. Selecting Austin reduced the visible listing collection to Jackson House, confirming filter state and derived results update. The Search action is wired to scroll to the listing section and show a result message.

## Asset note

The generated hero image and brand mark are referenced through project-lifecycle storage URLs. The supporting generated card assets returned failed placeholders in the first visual pass, so the cards use stable Unsplash editorial property imagery instead; this preserves the intended architectural visual language and avoids shipping broken image states.

## Build pass

`pnpm check` and `pnpm build` completed successfully. Vite reported only the standard large-chunk advisory and an informational baseline-browser-mapping freshness warning.

## Cinematic upgrade pass

The attached master prompt was audited against the existing project. The upgrade adds GSAP 3 with ScrollTrigger, a reduced-motion-aware entrance sequence, a desktop-only pinned lifestyle gallery with dynamic track measurement, a scroll-controlled art-directed day-in-home sequence, interactive detail hotspots, editorial destination switching, a five-step method timeline, a typography-driven home-feel section, and an explicitly non-fabricated resident-stories placeholder. Mobile uses vertical lifestyle cards and simplified scrolling instead of inheriting the desktop horizontal behavior. The current development preview renders the expanded narrative on desktop and mobile, while TypeScript and production build checks pass.

The public domain still shows the previous checkpoint until this upgraded state is saved as the next checkpoint.

## Final QA findings

The refreshed preview exposes the full narrative content in the expected order and renders on desktop and mobile without the earlier clipped lifestyle-track issue. The Malibu search flow reduced the property section to one matching residence and displayed the shortlist toast. The Locations section switched from New York to Copenhagen and updated its image, coordinates, heading, and description. A subsequent browser-console check returned no console output, indicating no active runtime errors in the tested state. A transient HMR reload warning occurred during dependency optimization and disappeared after the server refresh; the final TypeScript and production builds pass.

## Precision refactor QA — 2026-08-24

The attached master prompt was re-read line by line and the implementation was compared against its required sequence and interaction hierarchy. The refactor now includes the correct Discovery → Desire → Exploration → Imagination → Signature experience → Details → Place → Confidence → Decision → What matters → Stories → Final chapter flow; a desktop-only custom cursor with VIEW/OPEN/DRAG states; mobile menu choreography; hero and method pinning; dynamic horizontal travel calculation; progressive preparation of the curated day stills; detail crop/zoom state changes; active feel-word typography and background imagery; focus-visible search controls; and an expanded per-asset manifest.

Final `pnpm check` and `pnpm build` pass. Desktop and mobile full-page screenshots were captured after the last code changes. The final browser console is clean with no runtime output or ScrollTrigger warnings. The build still emits the standard advisory that the minified JavaScript chunk exceeds 500 kB; this is documented as a performance follow-up for code splitting, not a build failure. The day-in-home section remains an explicitly labeled five-still cinematic transition rather than a fabricated continuous 60–100 frame sequence because no true sequence assets were supplied.

## Section 10 pinned scrub update — 2026-08-24

Section 10 / What matters was refactored into a desktop-only pinned composition. The section now remains fixed for an intentional scrub distance while the six feel states advance from Space through Location, the active typography changes, the image source changes, and image opacity/crop transitions are choreographed on state boundaries. Clicked feel-word controls use the same image transition helper and stay synchronized with the active state. Mobile and reduced-motion paths remain non-pinned and readable. TypeScript and production build checks pass, updated desktop/mobile full-page captures were taken, and the browser console is clean.

## Signature experience timing update — 2026-08-24

The 05 / Signature experience was refined to stay within a `100svh` visual presentation rather than using the previous `140svh` section. Desktop scroll still drives the timeline through a compact pinned travel distance, but each state now has a longer hold zone. Transition boundaries use two stacked images for a layered crossfade, while time, title, and copy fade out, update, and return with staggered motion. The next frame is prepared progressively. Mobile and reduced-motion paths remain non-pinned and readable. TypeScript and production builds pass, updated desktop/mobile screenshots were captured, and the browser console is clean. The build retains only the existing large-chunk advisory.

## Section 10 compact 100vh update — 2026-08-24

Section 10 / What matters now uses a `100svh` desktop presentation with a pinned `+900px` scrub travel rather than an expanding content block. The six feel states retain deliberate hold windows, while typography and image opacity/crop transitions are eased to feel continuous instead of abrupt. Click selection remains synchronized with the active image state. Mobile and reduced-motion paths stay non-pinned and readable. Final typecheck and production build pass; desktop/mobile captures were taken after the JSX fix; the browser console is clean. The build continues to show only the standard large-chunk advisory.

## Smooth scroll refinement — 2026-08-24

The Signature experience and What matters now use more internal scroll breathing room while preserving their `100svh` visible compositions. Signature scrub travel increased to 1400px with a 1.65 scrub lag; What matters uses 1400px with a 1.75 scrub lag. What matters image transitions now ease through a slower opacity/scale crossfade, and click selection uses a slower crossfade as well. Desktop and mobile screenshots were captured after the update, typecheck and production build pass, and the browser console is clean. The build retains only the standard large-chunk advisory.

## Signature experience slower smoothness pass — 2026-08-24

The Signature experience now has stronger per-state breathing room: five states are distributed across 1800px of pinned scrub travel, with `2.05` seconds of scrub smoothing and gentle state snapping after scroll pauses. State selection uses rounded thresholds so the five moments land deliberately, while layered image crossfades and staggered copy transitions remain calm. The visible composition stays `100svh`; only the internal scroll travel is longer. Mobile and reduced-motion paths remain non-pinned. Typecheck and production build pass, desktop/mobile screenshots were captured, and the browser console is clean. The standard large-chunk advisory remains the only build note.

## Attention section 100vh refinement — 2026-08-24

Section 06 / Attention now presents as a compact `100svh` composition on desktop, with a responsive min-height fallback on smaller screens. The detail selector list, active hotspot, image crop/scale treatment, and caption remain intact while the tighter layout prevents unnecessary vertical expansion. Desktop and mobile full-page captures were taken after the refactor. Typecheck and production build pass, and the browser console is clean; the only build note is the standard large-chunk advisory.

## New exterior-to-interior cinematic sequence — 2026-08-24

Added a new `02 / Immersion` section immediately below `02 / Desire`, preserving all existing sections after it. The section uses 240 uploaded WebP frames generated from one coherent 8-second exterior-to-interior architectural source clip. Desktop renders through one canvas with GSAP ScrollTrigger pinning and 2.4-second scrub smoothing; the frame counter updates from 001 / 240. The journey is framed as Exterior → Interior → Room. Mobile and reduced-motion paths use the hero poster and avoid forced sequence loading. Typecheck and production build pass, desktop/mobile captures were taken, and the browser console is clean. The standard large-chunk advisory remains the only build note.

## Cinematic handoff fix — 2026-08-24

Adjusted the exterior-to-interior ScrollTrigger handoff so the scrub settles to frame 240, explicitly draws the final frame on leave, and releases the pinned section with a subtle fade/translate entrance for 03 / Exploration. The scrub catch-up was reduced from 2.4 to 1.65 to prevent the end from feeling stuck while retaining smooth motion. Browser verification reached `240 / 240` and exposed the following Exploration content; the browser console remained clean. Typecheck and production build pass. The visible 100vh composition, canvas renderer, poster fallback, and reduced-motion behavior remain unchanged.

## Cinematic section order change — 2026-08-24

Moved `02 / Immersion` directly below the hero. `02 / Desire` now follows the cinematic sequence, and the existing Exploration, property, Signature, Attention, Place, Confidence, Decision, What matters, stories, CTA, and footer sections remain in their prior order and styling. Desktop and mobile full-page captures confirm the revised composition. Browser content extraction confirms the order Hero → Immersion → Desire → Exploration, and the console is clean. Typecheck and production build pass; the standard large-chunk advisory remains the only build note.

## Mobile-first responsive pass — 2026-08-24

Refined only base/mobile and tablet utility values while preserving existing `lg:` desktop composition and desktop GSAP behavior. The phone layout now uses safer horizontal padding, a readable fluid hero heading, stacked full-width search fields, compact viewport spacing, touch-sized menu controls, and non-canvas cinematic poster behavior. Tablet capture confirms the intermediate layout remains legible and the desktop capture remains visually consistent. Typecheck and production build pass; the browser console is clean. The only build note is the existing large-chunk advisory.

## Mobile animation fix — 2026-08-24

Root cause: the main effect defined `desktopMotion` as `(min-width: 1024px) and (prefers-reduced-motion: no-preference)`, and the cinematic canvas, pinned day timeline, pinned method, and pinned What matters timelines were intentionally guarded by that condition. On phones and tablets, only the initial reveal animation and a few non-pinned progress effects could run, so the mobile experience appeared static. Added a separate `mobileMotion` path that provides lightweight section reveal animations and subtle poster/image scale-in for the cinematic and day sections, while keeping desktop pinning, custom cursor, and canvas sequence loading unchanged. Typecheck/build pass, phone and desktop captures pass, and browser console is clean.

## Mobile Immersion animation fix — 2026-08-24

Root cause: mobile intentionally skipped the desktop canvas branch, and the previous mobile fallback only had a generic section reveal, so the 02 / Immersion poster and internal content had no dedicated, visible animation choreography. Added explicit mobile targets for the poster, copy, and Exterior → Interior → Room markers, with a non-pinned scrubbed reveal and poster scale/opacity transition. The desktop 240-frame canvas branch remains unchanged. The mobile Immersion anchor was inspected in the preview, the poster and copy rendered correctly, and the browser console was clean. Typecheck and production build pass.

## Mobile pinned Immersion correction — 2026-08-24

The previous mobile Immersion fix used a non-pinned scrub reveal, unlike 05 / Signature, so it did not match the requested interaction pattern. Replaced that mobile path with a dedicated pinned GSAP timeline: 100svh poster composition, `top top` pinning, 1200px internal travel, 1.45 scrub smoothing, poster scale/opacity, copy reveal, and marker reveal. The desktop 240-frame canvas branch was not changed. The mobile Immersion anchor renders correctly in preview and the browser console is clean; typecheck/build pass.

## Full mobile Immersion sequence — 2026-08-24

Enabled the same complete 240-frame canvas renderer on mobile instead of the poster-only fallback. Mobile uses the existing ordered frame manifest, progressively warms frames in small batches, renders at the mobile canvas dimensions, pins for 1500px of internal travel, and maps scroll progress across 001 / 240. Verified in the preview by scrolling from the Immersion anchor to `240 / 240`; the final frame displayed and the section remained able to continue into 02 / Desire. Browser console remained clean and typecheck/build pass. Desktop branch and design were preserved.

## Mobile 03 / Exploration animation fix — 2026-08-24

Root cause: Exploration only had a desktop-only pinned horizontal ScrollTrigger; the mobile branch applied only the generic section reveal, so the lifestyle cards had no dedicated scroll choreography. Added a mobile-only scrubbed reveal for every lifestyle card using opacity, vertical movement, and scale, while retaining the existing desktop horizontal pin unchanged. Added `scroll-mt-10` for reliable anchor positioning and refresh ScrollTrigger measurements whenever a lazy-loaded lifestyle image completes, preventing section-height shifts from disrupting mobile scroll positions. Typecheck and production build pass; desktop and mobile full-page previews were inspected; the browser console remained clean.

## Complete mobile 03 / Exploration animation — 2026-08-24

The earlier mobile card reveal was too subtle and did not create a complete scroll-led story. Replaced it with a dedicated mobile pinned vertical scrub timeline: the section holds a 100svh presentation, the lifestyle track moves through all five cards during a longer internal scroll distance, the first and last cards are explicitly settled at the boundaries, and each card receives a synchronized opacity/scale transition. The intro copy stays layered above the moving cards, the existing desktop horizontal pin remains unchanged, and the section continues normally into 04 / Imagination after the final card. TypeScript and production build pass, phone/tablet/desktop previews were inspected, and the browser console remains clean.

## Restore desktop and mobile horizontal Exploration — 2026-08-24

The previous mobile vertical pin was removed because it did not match the requested interaction. Mobile 03 / Exploration now uses a pinned horizontal track that translates from right to left through the five lifestyle cards across a longer internal scroll distance. The desktop branch remains the original horizontal pinned gallery with its prior `lg:` layout geometry, card widths, spacing, and travel calculation; the mobile-only branch is isolated behind the existing breakpoint condition. Anchor spacing, lazy-image refresh, and section handoff remain intact. Typecheck/build pass, responsive previews were inspected, and the browser console is clean.

## Responsive mobile 03 / Exploration viewport — 2026-08-24

Refined the mobile Exploration composition so the copy remains within the viewport at the top of the pinned section and the active lifestyle image uses a responsive `78vw` card width with a viewport-safe bottom track. Mobile keeps the requested right-to-left horizontal pin and continues into 04 / Imagination. Desktop keeps its original `lg:` geometry, spacing, card widths, and horizontal pin. Typecheck and production build pass; phone and desktop full-page previews were captured; the Exploration anchor was inspected; and the browser console remained clean.

## Requested mobile Exploration behavior — 2026-08-24

Implemented the requested mobile interaction: the section opens with the label, heading, supporting copy, and a responsive lifestyle image visible within the phone viewport; while scrolling down, the section pins and the image track moves right to left along the bottom of the viewport; scrolling upward reverses the track naturally; and the copy layer returns to full visibility at the timeline boundaries. The desktop `desktopMotion` branch and `lg:` layout behavior remain unchanged. Typecheck and production build pass, mobile and desktop previews were inspected, and the browser console is clean.

## Mobile Exploration image-height refinement — 2026-08-24

Shortened the mobile Exploration lifestyle image frame by changing only the base mobile aspect ratio to `1.24`, producing a wider and shorter image that fits the phone viewport more comfortably. The original desktop `lg:aspect-[0.9]` crop remains explicitly preserved. The pinned right-to-left track, responsive card width, label layer, and handoff into 04 / Imagination remain unchanged. Typecheck/build pass, mobile and desktop previews were inspected, the anchor was checked, and the browser console is clean.

## Mobile Exploration full-width image sizing — 2026-08-24

Changed the lifestyle card width utilities so mobile cards use the full available phone width: `calc(100vw - 2rem)` on phones and `calc(100vw - 4rem)` at the small breakpoint, matching the section’s horizontal breathing room. Each card retains its responsive mobile aspect ratio, while the original desktop `lg:w-[...]` width utilities and `lg:aspect-[0.9]` image crop remain unchanged. The pinned right-to-left mobile track and section handoff were preserved. Typecheck/build pass, mobile and desktop previews were inspected, the anchor was checked, and the browser console is clean.
