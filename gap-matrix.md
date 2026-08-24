# RentHomes Master-Prompt Gap Matrix

| Requirement from the attached prompt | Current state | Precision-refactor action |
|---|---|---|
| Full 100svh cinematic hero | Partially present | Keep `100svh`; add an explicit responsive hero timeline for overlay, heading, search, and navigation transitions. |
| Hero pinned scroll phase | Missing | Add a desktop-only ScrollTrigger pin with gentle scale/position/opacity choreography and a normal-flow mobile fallback. |
| Scroll indicator | Present as text/rule | Preserve and animate only the indicator line/opacity on desktop. |
| “A home is more than four walls” pause | Present | Add a restrained reveal and architectural image treatment without overcrowding. |
| Pinned lifestyle horizontal gallery | Present on desktop | Improve dynamic measurement, add desktop-only `scrub: 1` horizontal track motion, and retain vertical mobile cards. |
| Property editorial discovery | Present | Add hover metadata reveal, active selection state, and avoid implying a fake detail route. |
| “A day in your new home” | Present as image transition | Make the no-autoplay, scroll-driven multi-image transition explicit, preload only the next frame, and add a static reduced-motion poster. |
| Canvas/image sequence | Not appropriate with no real sequence | Document the prompt-permitted multi-image cinematic transition rather than fabricate unrelated frames. |
| “Inside the details” | Present | Add active crop/zoom treatment and editorial hotspot state changes, not SaaS tooltip styling. |
| “The places we call home” | Present | Keep destination showcase editorial and avoid availability/statistics claims. |
| “The easiest method…” pinned story | Present as clickable timeline | Add scroll-linked progress and active-step updates on desktop, with clickable/mobile fallback. |
| “From search to keys” timeline | Missing as distinct section | Add a dedicated horizontal/linear five-step timeline separate from the method section. |
| “What makes a home feel right?” | Present | Add dominant active word progression using scroll-linked state and imagery where useful. |
| Stories from people | Present as honest placeholder | Keep it explicitly non-testimonial until approved real stories are provided. |
| Minimal branded loader | Missing | Add a short branded loader that does not artificially delay first paint. |
| Motion ownership | GSAP added, but most motion is still CSS | Add reusable GSAP functions for hero, lifestyle, property, day, detail, method, and final CTA where motion adds narrative value. |
| Motion cleanup | Context cleanup present | Keep `gsap.context()` and add refresh after images/layout settle. |
| Custom cursor | Missing | Add an elegant desktop-only VIEW/OPEN cursor with touch, mobile, and keyboard safeguards, or document an intentional omission if it harms usability. |
| Asset manifest | Present | Expand it to cover all current external URLs and production hosting guidance. |
| Loading/performance | Partial | Add lazy loading, `decoding="async"`, responsive image hints, and avoid eager loading non-hero imagery. |
| Accessibility | Partial | Add explicit focus-visible styles, semantic region labels, more descriptive ARIA labels, and ensure control targets are keyboard usable. |
| QA | Partial | Test reduced motion, mobile layout, hero/search, horizontal gallery, day sequence, hotspots, locations, method, timeline, and clean console/build state. |
