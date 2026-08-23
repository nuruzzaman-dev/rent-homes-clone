# RentHomes Clone — Reference Ground Truth

## Reference

The Instagram post at https://www.instagram.com/p/DbdlV3TiAtJ/?igsi=Mzl0eWgxbHJlaHIy is the ground-truth visual reference. The accessible post presents a property-rental landing page through design screenshots/carousel images rather than a directly inspectable video. Fidelity to the visible reference takes priority over introducing an unrelated design direction.

## Implementation Constraint

The interface must use Tailwind CSS utility classes in JSX/TSX. Do not add a custom CSS stylesheet or author bespoke CSS selectors for page styling. Existing template infrastructure may remain where required by the scaffold, but all new visual styling must be expressed through Tailwind utilities and inline SVG/icon markup where appropriate.

## Visual Specification

The reference is a light, premium real-estate landing page with a calm editorial feel. It uses a pale warm-gray/white canvas, deep charcoal typography, dark navy-blue hero imagery, white surfaces, thin low-contrast borders, restrained rounded corners, and small blue call-to-action accents. The visual hierarchy is spacious and architectural rather than playful.

The page structure is: a compact top navigation with the RentHomes wordmark and links such as Home, Most Viewed, About Us, and Contact; a large hero section with a dark luxury-villa image, the headline “Finding Your New Home Is Simple,” supporting copy, and a prominent property-search widget; a Most Viewed listings row with image cards; a promotional section titled “The Easiest Method To Find a House”; and an “Our Work In 3 Steps” process section with three concise steps.

The hero search control visibly groups City Street, Typology, Price, and a Search action into one elongated white panel. Property cards use realistic architectural imagery, short names, locations, prices, and a small rounded action affordance. The composition favors a broad left content area with supporting content offset to the right, matching the asymmetrical screenshot layout.

## Color Philosophy

Use the observed reference colors consistently: near-white warm background, white cards, charcoal text, muted gray secondary text, very dark blue-black image overlays, and a cool medium blue for primary buttons and selected controls. Avoid purple gradients, neon treatments, excessive glassmorphism, and saturated decorative colors.

## Typography System

Use a refined serif display face for large headlines paired with a clean sans-serif for navigation, labels, prices, and body copy. Maintain strong hierarchy: oversized but compact hero heading, modest uppercase/letter-spaced eyebrow labels, readable body text, and compact card metadata.

## Interaction Philosophy

Interactions should feel quiet and precise: buttons have restrained hover darkening and a subtle scale-down on press; cards lift slightly on hover; search controls remain clear and keyboard accessible; navigation links use a thin underline or color shift. Motion should be brief and utility-driven, not decorative.

## Brand Essence

RentHomes is a composed property-discovery platform for people who want a simpler path to a considered home. Personality: architectural, calm, assured.

## Wordmark & Logo

Use a simple geometric house-and-orbit mark paired with the RentHomes wordmark. The symbol should be visible in the header and favicon-sized contexts without relying on default text alone.

## Signature Brand Color

A cool architectural blue, approximately `#3D6F9D`, used sparingly for primary actions, selected controls, and small brand accents.

## Acceptance Criteria

The finished page should resemble the reference screenshots in overall composition, color, spacing, card treatment, imagery, typography contrast, and section order. It must be responsive on mobile and desktop, use only Tailwind utility classes for the page styling, and provide working visual interactions for search, navigation, and listing controls. 
