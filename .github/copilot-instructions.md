# SuroweZdrowie - Copilot Instructions

## Project Overview
**SuroweZdrowie** is a Next.js 16 e-commerce web application selling health foods and organic products (seeds, oils, superfoods). The app emphasizes Polish language support with a premium, minimal design using Tailwind CSS v4 and Framer Motion animations.

## Architecture

### Tech Stack
- **Framework**: Next.js 16.1.3 (App Router)
- **UI**: React 19.2.3 with TypeScript
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Animations**: Framer Motion 12.26.2
- **Font**: Geist (Google Fonts) for sans/mono variants
- **Build**: ESLint 9, no external build tools

### Page Structure
- **Entry point**: [app/page.tsx](app/page.tsx) - Home page composed of 5 main sections
- **Layout**: [app/layout.tsx](app/layout.tsx) - Root layout with Geist fonts and metadata
- **Styling**: [app/globals.css](app/globals.css) - Tailwind 4 theme with custom scrollbar, background colors (`#F5F5F0` - beige/cream)

### Component Architecture
All components are client-side (`"use client"`) for interactivity. Location: `app/components/`

**Core Components**:
- **Header.tsx**: Fixed navigation bar with scroll detection (`scrolled` state changes styling on scroll > 50px). Links to: home, products, about, contact. Cart icon with count badge, theme toggle button
- **HeroHeader.tsx**: Parallax scroll animations using Framer Motion (`useScroll`, `useTransform`). Gradient overlays, opacity/scale transforms on scroll
- **ProductGrid.tsx**: Maps over product arrays (seeds, oils, superfoods) as hardcoded data. No API calls—all products are static
- **ProductCard.tsx**: Reusable card component with props: `name`, `type`, `price`, `image`, `emoji` (default 🌾). Green CTA button (#9ACD32 / `#8BC020` on hover)
- **AboutSection.tsx**: Static content section
- **Footer.tsx**: Static footer

**Key Patterns**:
- Use `"use client"` directive for components with hooks or interactivity
- Tailwind class patterns: `hover:`, `transition-`, `group`, `fixed`, `z-50` for layering
- Color scheme: greens (#9ACD32, green-400, green-500, green-600, green-900), grays, whites on cream/beige background
- Icons: SVG inline in components (no icon library)

## Development Workflow

### Commands
```bash
npm run dev      # Start dev server at localhost:3000 (with hot reload)
npm run build    # Production build (Next.js compilation)
npm start        # Run production server
npm run lint     # Run ESLint
```

### Key Conventions
1. **No external API**: Products are hardcoded in components (see ProductGrid line 5-35 for seed/oil/superfood arrays)
2. **Polish UI text**: Navigate labels, button labels are in Polish ("Produkty", "O nas", "Kontakt", "Ajouter" [sic])
3. **Emoji placeholders**: Components use emojis instead of real product images (e.g., 🌾, 🫒, 🥑)
4. **Container patterns**: Use `container mx-auto px-8` for consistent horizontal padding
5. **Color prefixes**: All Tailwind colors use space (e.g., `green-400` not `green400`)

## Testing & Debugging
- No test suite configured; ESLint is the only linter
- Hot reload on file save during `npm run dev`
- Check browser DevTools for React component hierarchy (Next.js has built-in support)
- Watch terminal for TypeScript errors (tsconfig is strict mode)

## Integration Points & External Dependencies

### Framer Motion Usage
Used in [HeroHeader.tsx](app/components/HeroHeader.tsx) for parallax scroll effects:
- `useScroll()` with target ref + offset arrays
- `useTransform()` to map scroll progress to CSS transforms (scale, translateY, opacity)
- `motion.div` wrapper for animated elements

### Tailwind CSS v4
Imported via `@tailwindcss/postcss` in `globals.css`. Supports:
- Arbitrary values (e.g., `from-green-900 via-green-700 to-green-900` gradients)
- `@theme inline` for custom CSS variables
- All standard utilities + pseudo-selectors

### Next.js Next/Image
Components use `Image` from `next/image` (e.g., ProductCard template has `image` prop, though currently unused)

## File Modification Notes
- **Add new product categories**: Edit ProductGrid.tsx array definitions (lines 5–~100)
- **Change color scheme**: Update Tailwind classes (green-* → other colors) and globals.css variables (--background, --foreground)
- **Add routing**: Create new folders in `app/` (e.g., `app/produkty/page.tsx`). Links in Header already reference `/produkty`, `/o-nas`, `/kontakt`
- **Update header links**: Modify Header.tsx navigation block (line 50–60)

## Special Notes
- **tsconfig.json paths**: Uses `@/*` alias pointing to root (`./*`), though rarely used in current codebase
- **Next.js config**: next.config.ts is minimal; no image optimization or custom redirects
- **Strict TypeScript**: `strict: true` in tsconfig—all types must be explicit
