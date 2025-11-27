# 101 Receitas de Massas - E-book Landing Page

## Overview

This is a single-page marketing website (landing page) for an Italian pasta recipes e-book product. The application is built as a static React website designed to convert visitors into customers through persuasive copywriting, social proof, and clear call-to-action elements. The page is optimized for Brazilian Portuguese-speaking audiences and focuses on affordability, practicality, and authentic Italian cooking.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 5.4.2 for fast development and optimized production builds
- **Styling:** Tailwind CSS 3.4.1 with custom utility classes and theme extensions
- **Icons:** Lucide React for consistent iconography
- **Language:** TypeScript with strict type checking enabled

**Component Structure:**
The application follows a component-based architecture with a single-page layout composed of modular sections:

1. **App Component** - Root component that orchestrates all page sections in sequential order
2. **Section Components** - Self-contained, reusable components for each page section:
   - `TopBanner` - Fixed promotional banner with dynamic date
   - `HeroSection` - Primary value proposition and main CTA
   - `BenefitsSection` - List of product benefits with checkmarks
   - `WhyEssentialSection` - Image carousel with value proposition
   - `RecipesShowcase` - Grid of recipe previews
   - `BonusSection` - Display of included bonus materials
   - `OffersSection` - Pricing tiers and package options
   - `WhyDifferentSection` - Differentiation points and guarantee
   - `TestimonialsSection` - Social proof with mock testimonials
   - `FAQSection` - Collapsible frequently asked questions
   - `Footer` - Brand footer with copyright

**Design Patterns:**
- **Presentational Components:** All components are purely presentational with minimal state
- **Prop-based Customization:** Components accept configuration through props where needed
- **Responsive Design:** Mobile-first approach with Tailwind breakpoints (md, lg)
- **Smooth Scrolling:** Implemented via native browser behavior for CTA buttons
- **Animation:** Custom CSS keyframe animations for fade-in effects

**State Management:**
- Minimal local state using React hooks (useState)
- `FAQSection` manages accordion open/close state
- `WhyEssentialSection` manages image carousel rotation with useEffect timer
- No global state management needed (no Redux, Context, etc.)

**Styling Architecture:**
- Custom Tailwind theme with CRO-optimized color palette:
  - `cta` (#347433 dark green) - ONLY for purchase/CTA buttons (single CTA color rule)
  - `gold` (#FFC107 yellow) - Price displays (R$19), "Mais Popular" badge, guarantee border
  - `accent` (#FF6F3C orange) - Benefit checkmarks, secondary visual accents
  - `urgency` (#B22222 deep red) - Top banner, strikethrough prices, recipe showcase header
  - `neutral` (gray scale) - Typography, backgrounds, testimonials (keeps focus on CTAs)
- CRO Best Practices Applied:
  - Single CTA color rule: Only green buttons convert, training user eye
  - F-pattern reading: CTAs positioned after benefits, price, testimonials
  - Isolation effect: White/neutral backgrounds around CTAs for maximum contrast
  - Value perception: Gold for R$19 price creates premium feeling
  - Urgency hierarchy: Red for scarcity, never for buttons (avoids "stop" signal)
- Custom animations defined in index.css
- Responsive utilities for mobile-optimized spacing

**Build Configuration:**
- Vite configured for React with Fast Refresh
- Development server on port 5000 with network access
- Lucide React excluded from optimization for better tree-shaking
- TypeScript strict mode enabled for type safety

**Performance Considerations:**
- Lazy loading images with native `loading="lazy"` attribute
- Optimized image sources from Pexels CDN
- Component-level code splitting via ES modules
- Minimal bundle size with no heavy dependencies

### User Interaction Flow

1. User lands on page with fixed promotional banner
2. Hero section presents main value proposition with image and pricing
3. User scrolls through benefits, recipes, and bonuses
4. Multiple CTAs throughout page scroll to pricing section
5. Testimonials and FAQs address objections
6. Final CTA in offers section for conversion

### Accessibility & UX

- Semantic HTML structure
- Keyboard-navigable interactive elements
- ARIA-compliant accordion pattern in FAQ
- High contrast text for readability
- Touch-friendly button sizes for mobile
- Smooth scroll behavior for navigation

## External Dependencies

### Package Dependencies

**Production Dependencies:**
- `react` (^18.3.1) - Core React library
- `react-dom` (^18.3.1) - React DOM rendering
- `lucide-react` (^0.344.0) - Icon library for UI elements

**Development Dependencies:**
- `vite` (^5.4.2) - Build tool and dev server
- `@vitejs/plugin-react` (^4.3.1) - Vite plugin for React Fast Refresh
- `typescript` (^5.5.3) - TypeScript compiler
- `typescript-eslint` (^8.3.0) - TypeScript ESLint integration
- `tailwindcss` (^3.4.1) - Utility-first CSS framework
- `autoprefixer` (^10.4.18) - PostCSS plugin for vendor prefixes
- `postcss` (^8.4.35) - CSS transformation tool
- `eslint` (^9.9.1) - JavaScript/TypeScript linter
- `eslint-plugin-react-hooks` - React Hooks linting rules
- `eslint-plugin-react-refresh` - React Fast Refresh linting rules

### External Services

**Content Delivery:**
- **Pexels CDN** - Image hosting for recipe photos and visual assets
  - Used for recipe showcase images
  - Used for bonus section preview images
  - Optimized URLs with compression and sizing parameters

**No Backend Services:**
- This is a static frontend application with no server-side logic
- No database integration (potential future integration point for user data)
- No authentication system (potential future feature for gated content)
- No payment processing integration (assumed external checkout flow)
- No analytics or tracking configured (potential future enhancement)

### Asset Management

- Static assets served from public directory
- Primary product image: `/Testo del paragrafo-2 copy.jpg`
- Favicon: Inline SVG chef hat icon
- All recipe and bonus images loaded from external CDN

### Development Tools

- ESLint with TypeScript support for code quality
- React Hooks linting for best practices
- React Refresh for hot module replacement
- Vite dev server with network access enabled