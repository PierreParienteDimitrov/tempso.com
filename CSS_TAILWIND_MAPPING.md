# tempso.webflow.css → Tailwind migration mapping

This is a detailed audit and mapping of the Webflow-generated `css/tempso.webflow.css` into Tailwind strategies (utility conversion, preserve as scoped CSS, or keep existing class). It highlights categories, examples, and recommended next steps.

Summary recommendation
- Prefer Tailwind utilities for layout, spacing, typography tokens and simple state rules. This reduces CSS size and improves maintainability.
- Keep a small set of preserve/CSS-module rules for complex visual treatments (gradients, background images, Webflow timeline transforms, slider-specific selectors, complex selectors using multiple child combinators).
- During migration keep the current classes working (import the compiled file or a trimmed subset) while you incrementally replace pieces with Tailwind. Use Tailwind safelist for any dynamic classes you need to ensure are not purged.

How to use this mapping
1. Add Tailwind theme tokens based on `:root` variables (fonts, colors).
2. Convert structural container and grid classes first (container, ._4-col-grid, .w-layout-grid, etc.).
3. Convert header, hero, CTA and footer to Tailwind components; keep complex backgrounds/gradients in a small CSS module.
4. Triage all `.w-` Webflow runtime classes and decide whether to keep them until JS interactions are reimplemented.

Tokens and theme (from :root)
- CSS variables found:
  - --headings: Manrope, sans-serif -> Tailwind: add fontFamily.manrope
  - --paragraphs: Inter, sans-serif -> Tailwind: add fontFamily.inter
  - --gradient-01: #111932, --gradient-02: #070b18 -> Tailwind: extend colors.gradient-01 / gradient-02 or add a gradient utility.
  - --royal-blue: #0266ff -> Tailwind: extend colors.brand.royal

Add to tailwind.config.js (example):

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'royal': '#0266ff',
        'gradient-01': '#111932',
        'gradient-02': '#070b18'
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  }
}
```

Mapping (selector → strategy)
Note: I list representative selectors and the recommended Tailwind replacement or preservation strategy. This is not every selector; treat it as the canonical mapping approach and template for automated conversion.

- body
  - CSS: sets font-family, color, background-color, font-size, line-height
  - Strategy: set via global CSS (globals.css) and Tailwind theme defaults.
  - Tailwind: in globals.css set `@layer base { body { @apply font-manrope bg-black text-white; } }` and in tailwind.config set font sizes/line heights if they differ.

- h1, h2, h3, h4, h5, h6, p
  - CSS: large, precise typographic scale (h1:101px, etc.) and paragraph sizes
  - Strategy: map to Tailwind utilities (e.g., `text-[101px]` or custom fontSize tokens in tailwind.config) and use semantic headings in components.
  - Recommendation: define `theme.extend.fontSize` for the large headings and use `prose` or utility classes for paragraphs.

- .container
  - CSS: max-width:1200px; margin auto; padding; position
  - Strategy: use Tailwind container or create `.container` via `@apply mx-auto max-w-[1200px] px-8` in a small global layer. Replace uses with `<div className="container">` or Tailwind utilities `mx-auto max-w-[1200px] px-8`.

- Layout utilities (.w-layout-hflex, .w-layout-grid)
  - CSS: display:flex/grid with gaps
  - Strategy: replace with Tailwind classes: `.w-layout-hflex` ⇒ `flex flex-row items-start` (apply directly to JSX), `.w-layout-grid` ⇒ `grid grid-cols-2 gap-4`.
  - Recommendation: search/replace patterns; for dynamic gap sizes add utility classes or create components.

- Grid helpers (._4-col-grid, ._6-col-grid, ._8-col-grid)
  - Strategy: Replace with `grid grid-cols-4 gap-8` (or responsive variants). Map the numeric grids to `grid-cols-*` utilities.

- Buttons (.button, .button.navbar-button, .button.outline, .button.with-arrow)
  - CSS: border-radius, padding, background, hover, background-image for arrow
  - Strategy: convert to Tailwind utility classes for radius, padding, bg, text and keep `background-image` variants in a small CSS module if needed for the arrow asset (or embed as an inline SVG).
  - Example mapping:
    - `.button` → `font-inter text-black bg-white rounded-full px-6 py-2 shadow-md`
    - `.button.navbar-button` → `bg-black text-white border border-white/100 rounded-full px-7 py-1`
    - `.button.with-arrow` → keep as component with `@apply` and a small `.with-arrow { background-image: url('/images/Arrow-Button.svg'); background-position: 86%; padding-right: 36px; }`

- Navbar (.navbar, .nav-links, .nav-link)
  - CSS: backdrop-filter, height, sticky top, alignment, link underline animation
  - Strategy: replicate with Tailwind: `sticky top-0 h-16 backdrop-blur-md bg-transparent` and nav link classes `text-white text-sm pb-1 border-b-3 border-transparent hover:border-white transition-all`.
  - Keep `.w--current` state logic; you can map `w--current` → add `className="border-b-3 border-white"` when active in React router.

- Hero (.hero-text-wrapper, .animate-text-01, .hero-section-phone-holder, .hero-section-phone-screenshot-image)
  - CSS: heavy inline transforms and Webflow-generated animation classes
  - Strategy: reimplement animations using Framer Motion or CSS animations. Keep structural layout converted to Tailwind (flex/grid/spacing). Move transform/opacity timeline logic into React components using motion variants.
  - Keep the classes temporarily to avoid breaking layout, but plan to remove them as you implement motion variants.

- CTA (.cta-container, .cta-heading, .cta-bg, .cta-phone-holder)
  - Strategy: layout → Tailwind (`bg-[#0d0e12] rounded-lg p-8 flex justify-between`), backgrounds like `.cta-bg` that use large images should remain in a small CSS file with `background-image` or moved to `style={{backgroundImage: 'url(...)'}}` in React.

- Footer (.footer-wrapper, .footer-brand, .footer-link)
  - Strategy: convert layout and typography to Tailwind utilities. Keep minor color hover rules via utilities `hover:text-white`.

- Forms (.text-field, .submit-button)
  - CSS: custom box-shadow, border, focus outline
  - Strategy: use Tailwind form plugins or `@apply` to build a small form components file. Example: `.text-field` → `bg-[#070709] border-2 border-[#262626] rounded-md h-13 px-4 text-white focus:border-white`.
  - Complex box-shadow effects keep in a small scoped CSS module for fidelity.

- Slider / Carousel (.w-slider, .w-slide, .w-slider-arrow-left)
  - CSS: many Webflow-specific handlers and data attributes; JS-driven
  - Strategy: replace with a React slider (e.g., Swiper or a custom Framer Motion slider). Keep the visual styles in a CSS module until the component is replaced.

- Utility classes for spacing (.padding classes, .white-text, .center-text, .hide)
  - Strategy: replace with Tailwind (`text-white`, `text-center`, `hidden`, `px-4`, `py-6`) across components.

- Webflow commerce & runtime classes (.w-commerce-*, .w-nav, .w--current, .w-layout-*)
  - CSS: large set of classes used by Webflow e-commerce and interactions
  - Strategy: keep these classes for the short term while you reimplement behaviors. Add them to Tailwind safelist if they are referenced dynamically by JS during runtime (so purge doesn't remove them). Over time replace with React components and Tailwind utilities.

When to keep original classes instead of converting to Tailwind
- Keep classes when:
  - Styles are tightly coupled to Webflow JS behaviors or data attributes (sliders, timelines, w- commerce interactions).
  - Background images, multiple layered background icons or complex gradients are used — move to a small CSS module and reference class in JSX.
  - Many nested global selectors would require creating many Tailwind combinations; prefer converting major components and keeping the rest until you have time to refactor.

When to convert to Tailwind immediately
- Convert early: layout containers, grid systems, spacing utilities, simple buttons, text color, headings, paragraphs, and small component wrappers. These yield the biggest size and maintenance wins.

Tailwind safelist suggestions
- Add a safelist in `tailwind.config.js` for Webflow classes used by JS or applied dynamically, for example:
```js
module.exports = {
  // ...
  safelist: [
    'w-nav', 'w--current', 'w-slider', 'w-slide', 'w-layout-grid',
    /^w-commerce-/, // keep commerce classes while migrating
  ]
}
```

Migration plan (recommended)
1. Add tokens to tailwind.config (fonts, colors). Import Google Fonts into _app or via next/font.
2. Replace containers & grids in codebase: convert `.container`, `.w-layout-grid`, `._4-col-grid` to Tailwind utilities.
3. Convert header, hero, CTA, footer structure to React components and Tailwind classes — keep complex visuals in CSS modules.
4. Add Framer Motion to replace Webflow animations; remove inline transform styles and `.animate-*` classes when variants are implemented.
5. Gradually remove `tempso.webflow.css` file, preserving only the small CSS modules needed.

Risks & gotchas
- Webflow adds a lot of global classes and relies on exact HTML structure. A full replace in one pass will be time consuming and brittle. Incremental migration (component-by-component) is safer.
- The auto-generated classes often have logic attached to them (e.g., `w--current`) which you must reimplement in React to avoid losing behavior.
- Large background images and WebP srcset usage are fine; later we can switch to Next/Image for optimization.

Next actions I can take for you
1. Produce a line-by-line mapping file for all selectors in `tempso.webflow.css` (long but doable). This will be a CSV or structured Markdown mapping every selector to a suggested Tailwind replacement or `preserve` instruction. (I can run this and produce the file.)
2. Start converting the header and hero to Tailwind-based components and remove their Webflow CSS. I will implement animations with Framer Motion for the hero.
3. Create a small CSS module with preserved rules (gradients/background images/complex box shadows) and configure Tailwind safelist.

If you want a full, exhaustive mapping (each selector), tell me and I'll generate a complete list and a CSV export. For now I produced the conceptual mapping and concrete examples so we can start with the highest-value conversions (container, navbar, hero, CTA, footer, forms).
