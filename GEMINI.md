# Natured Tea — Project Development Rules

## Project Identity

Natured Tea is a premium international tea brand.

Core tea categories:

- Green Tea
- Yellow Tea
- White Tea
- Oolong Tea
- Black Tea

The website is intended for international customers and international wholesale/export buyers.

## Product Truth

Never invent:

- tea origins
- certifications
- health claims
- processing methods
- grades
- MOQ
- export markets
- pricing
- product specifications
- manufacturing claims

When factual information has not yet been supplied, use a clearly marked placeholder or ask the project owner.

Never present an AI-generated assumption as a fact.

## Brand Experience

The website should feel:

- premium
- natural
- sophisticated
- international
- cinematic
- editorial
- organic
- modern
- trustworthy

Avoid generic AI website aesthetics.

Avoid excessive gradients.
Avoid unnecessary glassmorphism.
Avoid excessive rounded cards.
Avoid generic template layouts.
Avoid excessive animation.

Use generous whitespace, strong typography, natural textures, editorial composition and sophisticated motion.

## Photography

Use authentic-looking natural photography and high-quality stock imagery where appropriate.

Photography should not have an obvious AI-generated appearance.

Use AI generation when it provides a clear creative advantage.

Actual product packaging must remain visually accurate.

Do not generate fictional packaging that could be mistaken for the real product.

## Video

AI-generated video may be used for:

- cinematic brand storytelling
- tea environments
- campaign visuals
- atmospheric scenes
- social content

Videos must support the brand rather than distract from usability.

Optimize video for web delivery.

Use appropriate poster images and lazy loading.

## 3D

Use:

- Three.js
- React Three Fiber
- Drei
- GSAP

3D is a storytelling layer, not the entire website.

The signature 3D journey is:

Green Tea
→ Yellow Tea
→ White Tea
→ Oolong Tea
→ Black Tea

Each tea has a distinct visual environment.

Green Tea:
Fresh leaves, plantation, morning light, mist.

Yellow Tea:
Golden sunlight, warm atmosphere, golden tea liquor.

White Tea:
Delicate buds, pale environment, soft atmosphere.

Oolong:
Mountain environment, deeper greens, sophisticated lighting.

Black Tea:
Rich amber tea liquor, warm dramatic lighting, subtle steam.

3D must be:

- responsive
- performant
- progressively loaded
- mobile-aware
- accessible
- compatible with reduced-motion preferences

Never sacrifice usability for 3D effects.

## Performance

Performance is a core requirement.

Use:

- code splitting
- lazy loading
- optimized images
- WebP/AVIF where appropriate
- optimized GLB/GLTF models
- compressed textures
- responsive rendering
- mobile quality reduction
- efficient animation loops
- limited particle counts
- appropriate preload strategy

Protect Core Web Vitals.

## SEO

SEO must be implemented from the beginning.

Use:

- semantic HTML
- clean URLs
- metadata
- canonical URLs
- sitemap.xml
- robots.txt
- descriptive image alt text
- Open Graph
- structured data
- Organization schema
- Product schema where factual
- Breadcrumb schema
- Article schema
- appropriate FAQ schema
- internal linking
- strong Core Web Vitals

Do not keyword stuff.

## AEO

The website must be structured for answer engines.

Create clear factual sections for:

- What is each tea?
- How is each tea different?
- How is it brewed?
- What does it taste like?
- Where does it come from?
- What formats are available?
- Wholesale/export questions

Use concise answers followed by useful detail.

## GEO

The website must be easy for generative search and AI systems to understand.

Maintain:

- consistent entity names
- consistent product terminology
- first-party information
- structured information
- clear relationships between Natured Tea, products and tea categories
- authoritative educational content
- factual consistency across pages

Never manufacture authority.

## International SEO

The architecture should support future international expansion.

Prepare for:

- country-specific pages
- language expansion
- international shipping information
- international product availability
- wholesale/export pages

Do not create country-specific claims until verified.

## B2C

The website should eventually support:

- product catalogue
- product pages
- variants
- pack sizes
- cart
- checkout
- shipping
- orders

## B2B

Create a strong Export & Wholesale pathway.

Potential capabilities:

- bulk tea
- wholesale
- international distribution
- private label
- custom packaging
- export enquiries

Use a dedicated enquiry flow.

## Content

The website should support AI-assisted creation of:

- product descriptions
- educational articles
- tea guides
- SEO content
- AEO content
- GEO-friendly content
- campaign content

All factual content must be verified.

## Code Architecture

Use:

- React
- Vite
- TypeScript
- Three.js
- React Three Fiber
- Drei
- GSAP
- Lenis
- Tailwind CSS

Use reusable components.

Separate:

- UI
- 3D
- product data
- content
- business logic
- SEO metadata

Do not hardcode product information into visual components.

## Development Process

Work in small, verifiable phases.

Before major changes:

- inspect existing code
- understand dependencies
- preserve working functionality

After major changes:

- run tests
- run build
- inspect browser output
- check responsive behavior
- check console errors

Do not make unrelated changes.

## Git

Commit meaningful milestones.

Use clear commit messages.

Never commit:

- API keys
- passwords
- secrets
- .env files
- private credentials

Always keep sensitive configuration in environment variables.

## Browser QA

Use the available browser testing capability to verify:

- desktop
- tablet
- mobile
- navigation
- interactions
- 3D loading
- responsive layout
- console errors
- broken images
- accessibility basics

## Decision Making

When requirements are ambiguous:

Do not silently invent business facts.

Use sensible technical defaults for implementation but clearly identify assumptions.

## Current Stage

The project is currently in the architecture/setup stage.

Do not build the full website unless explicitly instructed.

Create only the files requested by the current development task.
