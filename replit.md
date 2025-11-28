# 101 Receitas de Massas Italianas - Landing Page

## Overview

This is a single-page marketing landing page for an Italian pasta recipes e-book. The application is built as a static sales page designed to convert visitors into customers by showcasing the product's value proposition, benefits, recipes, bonuses, testimonials, and a pricing section. The page is optimized for both mobile and desktop viewing with smooth scrolling navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite as the build tool and development server.

**Component Structure**: The application follows a component-based architecture with a single main App component that composes multiple section components in a vertical layout:
- TopBanner - Fixed promotional banner
- HeroSection - Main header with product image and CTA
- BenefitsSection - Key selling points
- WhyEssentialSection - Product differentiators with rotating images
- RecipesShowcase - Sample recipes display
- BonusSection - Bonus materials included with purchase
- OffersSection - Pricing packages
- WhyDifferentSection - Additional features and guarantee
- TestimonialsSection - Customer reviews
- FAQSection - Accordion-style frequently asked questions
- Footer - Brand footer

**Styling Approach**: Utility-first CSS using Tailwind CSS with custom theme extensions for brand colors (red/brand, green/accent, gray/dark). Custom gradient utilities and animations are defined in the index.css file. The design uses a modern card-based layout with shadows, gradients, and hover effects.

**State Management**: Minimal local state using React hooks (useState) for interactive components like FAQ accordions and image carousels. No global state management is needed due to the static nature of the content.

**Responsive Design**: Mobile-first approach with responsive breakpoints (sm, md, lg) defined through Tailwind classes. The layout adapts from single-column on mobile to multi-column on desktop where appropriate.

**Typography**: Uses Inter font family loaded from Google Fonts, with smooth font rendering optimizations.

**Interactions**: 
- Smooth scroll behavior for navigation between sections
- Animated transitions on hover states for buttons and cards
- Auto-rotating image carousel in WhyEssentialSection
- Collapsible FAQ items
- Gradient animations on text and buttons

### Build System

**Development Server**: Vite configured to run on host 0.0.0.0, port 5000 to allow external access (configured for Replit environment).

**TypeScript Configuration**: Strict mode enabled with separate configs for app code (tsconfig.app.json) and build tools (tsconfig.node.json).

**Code Quality**: ESLint configured with TypeScript support, React hooks rules, and React Refresh plugin for fast refresh during development.

**Optimization**: Lucide-react icons are excluded from Vite's dependency optimization to prevent bundling issues.

### Design System

**Color Palette**:
- Brand colors (red tones): Primary call-to-action elements
- Accent colors (green tones): Success states, check marks, secondary CTAs
- Dark colors (gray scale): Text hierarchy and backgrounds

**Component Patterns**:
- `.btn-gradient` - Animated gradient buttons with hover effects
- `.gradient-text` - Animated gradient text for emphasis
- `.card-modern` - Consistent card styling with shadows and borders
- `.section-padding` - Standardized section spacing

**Animation Strategy**: Subtle animations using CSS transitions and keyframes for professional polish without overwhelming users.

## External Dependencies

### NPM Packages

**Core Framework**:
- `react` (^18.3.1) - UI library
- `react-dom` (^18.3.1) - React DOM rendering

**UI Components**:
- `lucide-react` (^0.344.0) - Icon library for consistent iconography throughout the application

**Development Tools**:
- `vite` (^5.4.2) - Build tool and dev server
- `@vitejs/plugin-react` (^4.3.1) - React support for Vite
- `typescript` (^5.5.3) - Type safety
- `typescript-eslint` (^8.3.0) - TypeScript linting

**Styling**:
- `tailwindcss` (^3.4.1) - Utility-first CSS framework
- `autoprefixer` (^10.4.18) - CSS vendor prefixing
- `postcss` (^8.4.35) - CSS processing

**Code Quality**:
- `eslint` (^9.9.1) - JavaScript/TypeScript linting
- `eslint-plugin-react-hooks` - React hooks linting rules
- `eslint-plugin-react-refresh` - Fast refresh linting rules

### External Services

**Fonts**: Google Fonts CDN for Inter font family

**Images**: Pexels image CDN for stock photography (recipe images, bonus content images, testimonial avatars from Unsplash)

**No Backend**: This is a purely static frontend application with no server-side API, database, or authentication system. Payment processing and email delivery would be handled by external services (not included in this codebase).