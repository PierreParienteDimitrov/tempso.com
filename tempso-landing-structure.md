# Tempso Landing Page — Structure & Layout (Next.js + Tailwind)

This document describes the **section structure**, **layout**, and **content hierarchy** for the Tempso landing page, implemented in **Next.js + Tailwind CSS**.

It is meant as a **blueprint**, not as code. You can use it to:
- Plan your sections and content for `app/page.tsx`
- Define which components to create under `components/`
- Align Figma and implementation work


---

## 1. Tech & Design Assumptions

- **Framework**: Next.js 13+ with the **App Router**
- **Styling**: Tailwind CSS
- **Design goals**:
  - Clean, modern, opinionated but minimal
  - Strong typography hierarchy
  - Clear section separation
  - Good vertical rhythm
  - Fully responsive from **mobile-first** up to large desktop


---

## 2. Suggested File & Component Structure

This is a logical structure for React components and layout, not actual code.

```txt
app/
  layout.tsx
  page.tsx

components/
  layout/
    Container.tsx      # centers content, sets max-width & horizontal padding
    PageSection.tsx    # handles vertical spacing & background variants

  sections/
    HeroSection.tsx
    ProblemSection.tsx
    SolutionSection.tsx
    ScreensSection.tsx
    MissionSection.tsx
    DevSection.tsx
    ComingSoonSection.tsx
    AboutSection.tsx
    Footer.tsx
```

**Idea**: Keep the page layout simple initially by composing these sections in `app/page.tsx`, then refine as needed.


---

## 3. Layout Primitives (Conceptual)

### 3.1 Container

- Purpose: constrain content to a readable width and center it.
- Behavior:
  - `max-width` around `max-w-6xl`
  - Horizontal padding on small and large screens (`px-4 sm:px-6 lg:px-8`)
  - Centered with `mx-auto`

### 3.2 PageSection

- Purpose: standardize **vertical spacing** and **background color** per section.
- Props/knobs (conceptual):
  - `id`: for anchor navigation (`#hero`, `#mission`, etc.)
  - `background`: `"default" | "muted" | "dark"`
    - `default` → white
    - `muted` → light gray / subtle tint
    - `dark` → dark slate with light text
- Vertical padding:
  - Mobile: ~`py-16`
  - Larger screens: `sm:py-20`, `lg:py-28`


---

## 4. Global Page Structure (`app/page.tsx`)

The high-level structure of the page, in order:

1. `HeroSection`
2. `ProblemSection`
3. `SolutionSection`
4. `ScreensSection`
5. `MissionSection`
6. `DevSection`
7. `ComingSoonSection`
8. `AboutSection`
9. `Footer`

Conceptually, it looks like:

```txt
<main>
  [Dark hero]
  [Light problem section]
  [Muted solution section]
  [Light screens/gallery]
  [Muted mission section]
  [Light dev/open-source section]
  [Muted coming-soon section]
  [Light about section]
  [Dark footer]
</main>
```

This alternation gives a sense of **rhythm** and visual separation.


---

## 5. Section-by-Section Layout & Content

Below are the sections with:
- Purpose
- Content structure
- Layout notes
- Tailwind-style layout hints (no code)


### 5.1 Hero Section — “Classical music, finally done right.”

**Purpose**
- Communicate the main value proposition immediately.
- Position Tempso as both:
  - A **product** (modern classical music app)
  - An **open-source mission** (encyclopedia / open data).

**Content**
- Tagline / pill: “Open classical music project”
- Main headline: “Classical music, finally done right.”
- Supporting copy (1–2 short paragraphs):
  - Explain Tempso as an open-source classical-music encyclopedia + modern app.
- Primary CTAs:
  - “Download App” (later: platform-specific badges)
  - “Web App · Coming Soon” (secondary button)
  - Text link: “Explore the Open Project →”
- Micro-copy: “Loved by musicians, students, and curious listeners worldwide.”

**Layout**
- Background: **dark** (`background="dark"`), gradient/glow
- Two-column layout on desktop, stacked on mobile:
  - Left column: text and CTAs
  - Right column: app mockup / device visual
- Right column:
  - A tall phone mockup (9:16 aspect ratio)
  - Optionally floating labels like “Symphony No. 3”, “Compare recordings”

**Responsive behavior**
- Mobile: centered text and CTAs, mockup below text.
- Desktop: left-aligned text, mockup to the right with some breathing room.


---

### 5.2 Problem Section — “Classical music deserves better metadata.”

**Purpose**
- Explain **why** Tempso needs to exist.
- Highlight the pain points users already feel in existing streaming apps.

**Content**
- Section title: “Classical music deserves better metadata.”
- Short intro paragraph:
  - Streaming apps flatten symphonies into playlists, mix up composers and performers, etc.
- Additional supporting text:
  - Talk about how this breaks search, discovery, and study.
- Supporting box:
  - Title: “What’s broken today:”
  - Bulleted list, e.g.:
    - Composers and performers are mixed up.
    - Movements appear as unrelated tracks.
    - Searching for a work often returns noise.
    - No view of eras, genres, or instrumentation.

**Layout**
- Background: **default** (`background="default"`) → white.
- Two-column layout on desktop (`grid` with 2 columns):
  - Left: heading + paragraph(s)
  - Right: card-style box with bullet points.
- Visual tone: simple, serious, explanatory.


---

### 5.3 Solution Section — “The modern way to explore the repertoire.”

**Purpose**
- Show how Tempso solves the problems.
- Introduce 3 key pillars of the product.

**Content**
- Section title: “The modern way to explore the repertoire.”
- Short paragraph describing the overall approach.
- Three feature blocks/cards:
  1. **Explore all composers**
     - Browse by era, nationality, style, influence.
  2. **Understand every composition**
     - Proper work structure: work → part → movement, with metadata.
  3. **Listen your way**
     - Uses your existing streaming subscription; Tempso is the interface.

**Layout**
- Background: **muted** (`background="muted"`) → light gray / subtle tint.
- Intro text at the top (max-width ~`max-w-3xl`).
- Below: 3 cards in a responsive grid:
  - Mobile: stack the cards.
  - Desktop: 3 columns (`md:grid-cols-3`).
- Each card:
  - Small icon or circular placeholder
  - Title (h3)
  - Short description


---

### 5.4 Screens Section — “Beautiful, structured, and built for discovery.”

**Purpose**
- Visually showcase the interface.
- Provide context via captions.

**Content**
- Section title: “Beautiful, structured, and built for discovery.”
- Short descriptive paragraph about how Tempso feels to use.
- A set of 4–6 screen blocks:
  - E.g. composer profile, work structure, recording comparison, era browsing.

Each screen block should have:
- Placeholder for screenshot (or actual image later)
- Label (e.g. “Composer profile”)
- Short caption (e.g. “Every composer, organized.”)

**Layout**
- Background: **default** (`background="default"`).
- Text at top, then a horizontally scrollable row of cards on mobile.
- On larger screens, cards can sit in a flex row that wraps or remains scrollable.
- Each card:
  - Rounded box
  - Top: tall rectangle for screenshot
  - Bottom: label + caption


---

### 5.5 Mission Section — “The open, community-powered classical music database.”

**Purpose**
- Communicate the **mission** and long-term vision.
- Position Tempso as an open, community-driven encyclopedia and knowledge graph.

**Content**
- Section title: “The open, community-powered classical music database.”
- 1–2 paragraphs explaining the mission.
- Bullet list (e.g.):
  - All composers — from well-known to overlooked voices.
  - All compositions — with proper structure and context.
  - All recordings — with performers, dates, and ensembles.
- CTA button: “Join the Open Project on GitHub →”

**Right side content (visual)**
- A “knowledge graph” concept:
  - Placeholder for diagram showing nodes and relationships:
    - Composer → Work → Movement → Recording → Instrumentation

**Layout**
- Background: **muted** (`background="muted"`).
- Two-column layout:
  - Left: text and CTA.
  - Right: card with “Knowledge graph” title and a diagram placeholder.


---

### 5.6 Dev / Open Source Section — “Open source. Open data. Open contribution.”

**Purpose**
- Speak directly to developers and contributors.
- Highlight open-source nature, API, schema, and contribution options.

**Content**
- Section title: “Open source. Open data. Open contribution.”
- Short paragraph describing public repos, schema, and community.
- Bullet list of dev-focused features:
  - Open-source repos for web, backend, metadata models.
  - JSON exports and API access (in development).
  - Contribution guides and issue tracking.
- CTAs:
  - Primary: “View GitHub Repos”
  - Secondary: “Join Discord”

**Secondary content (visual)**
- Example of an API response or schema snippet, conceptually.
  - Shown as a code block (read-only visual).

**Layout**
- Background: **default** (`background="default"`).
- Two columns:
  - Left: text and CTAs.
  - Right: “code card” with example JSON.


---

### 5.7 Coming Soon Section — “What’s next for Tempso.”

**Purpose**
- Announce upcoming web app and new mobile app.
- Collect emails for early access.

**Content**
- Section title: “What’s next for Tempso.”
- Short descriptive paragraph.
- Two sub-blocks:
  1. **Tempso Web**
     - Description of desktop experience.
  2. **Next-generation mobile app**
     - Description of redesigned app.

- Email form:
  - Email input
  - CTA button: “Notify me”
  - Microcopy: “No spam. We’ll email you only when it’s ready.”

- Visual placeholders:
  - One block for web teaser screenshot.
  - One block for new mobile app teaser.

**Layout**
- Background: **muted** (`background="muted"`).
- Two-column layout:
  - Left: text + email form.
  - Right: stacked teaser cards (web + mobile).


---

### 5.8 About Section — “Built by musicians, designers, developers — and you.”

**Purpose**
- Humanize the project.
- Explain origins and who is behind Tempso without being overly personal.

**Content**
- Section title: “Built by musicians, designers, developers — and you.”
- 1–2 paragraphs:
  - Origin as a passion project.
  - Emphasis on open-source, contributions from musicologists, students, devs, etc.
- Reinforce the line: “Anyone can join. Everyone can contribute.”

**Layout**
- Background: **default** (`background="default"`).
- Single-column layout.
- Center or left-align the text with generous spacing.


---

### 5.9 Footer

**Purpose**
- Provide navigation to key pages and resources.
- Close the page with a clear, minimal baseline.

**Content**
- Four logical columns:

  **Tempso**
  - About
  - Vision
  - Open Source
  - Roadmap

  **Product**
  - iOS App
  - Android App
  - Web App (coming soon)

  **Community**
  - GitHub
  - Discord
  - X / Twitter
  - Contribute Data

  **Legal**
  - Privacy Policy
  - Terms

- Bottom line:
  - Copyright notice and short tagline:
    - “© 2025 Tempso. Built as an open classical music project.”

**Layout**
- Background: **dark** (`bg-slate-950` with light text).
- Top: 3–4 columns in a grid.
- Bottom: border-top and a small text row.


---

## 6. Implementation Notes

- Replace all “placeholder” mentions with real images/screenshots as the product evolves.
- You can progressively enhance this structure with:
  - Scroll-based animations (e.g. Framer Motion)
  - Smooth scrolling to section anchors
  - Dark/light mode toggle later.

This document is intentionally **code-agnostic**. Use it as a shared blueprint between design and engineering for the new Tempso landing page.
