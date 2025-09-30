# Tyaakov.dev - Next.js Portfolio & Course Platform

## Overview
This is a Next.js 13.5.1 application for Tyaakov.dev, a Portuguese-language platform offering programming courses and developer resources. The site features a modern dark theme with interactive elements including terminal animations, statistics charts, testimonials, and contact forms.

## Project Architecture

### Technology Stack
- **Framework**: Next.js 13.5.1 (App Router)
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Radix UI component library
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Database**: Supabase (configured but not actively used in current implementation)

### Project Structure
```
/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage component
│   ├── learn/              # Learn module pages
│   │   ├── page.tsx        # Learn listing page (Server Component)
│   │   └── [slug]/         # Dynamic content detail routes
│   │       └── page.tsx    # Individual content pages
│   ├── shop/               # Skills Shop pages
│   │   └── page.tsx        # Product storefront (Client Component)
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # Shadcn/Radix UI components
│   ├── layout/             # Layout components
│   │   └── AppLayout.tsx       # Reusable sidebar + main content layout
│   ├── learn/              # Learn module components
│   │   └── ContentCard.tsx     # Reusable content card
│   └── shop/               # Skills Shop components
│       ├── ProductCard.tsx     # Product card with hover effects
│       └── ProductSaleModal.tsx # Modal dialog for product details
├── hooks/
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   └── utils.ts            # Utility functions
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

### Key Features

#### Homepage (/)
- **Hero Section**: Dynamic terminal animation showing developer journey
- **Statistics Dashboard**: Interactive charts showing student growth and metrics
- **Social Proof**: Testimonial cards with star ratings
- **Benefits Section**: Feature highlights with icons
- **Project Showcase**: Demo cards for portfolio projects
- **Timeline**: 90-day transformation program breakdown
- **Urgency/Scarcity**: Limited spots messaging
- **Contact Form**: Frictionless lead capture
- **Responsive Design**: Mobile-first approach

#### Learn Module (/learn)
- **Sidebar Navigation**: Collapsible category menu with "Todos" option
  - Engenharia de Prompt
  - Automação com IA
  - Modelos Open Source
  - Segurança em IA
- **Search Functionality**: Real-time search bar filtering content by title/description
- **Sorting Options**: Dropdown with "Mais Recentes" and "Mais Populares" sorting
- **Content Library**: Organized catalog of tutorials and courses
- **Content Cards**: Reusable cards with images, category badges, titles, descriptions
- **Combined Filtering**: Sidebar categories + search + sorting work together
- **Server Component**: Main page uses SSR for optimal SEO
- **Placeholder Detail Pages**: Dynamic routes ready for content expansion

#### Skills Shop (/shop)
- **Sidebar Navigation**: Collapsible topic menu with "Todos os Produtos" option
  - E-books
  - Cursos Online
  - Workshops
  - Consultoria
  - Pacotes
- **Topic-Based Filtering**: Products categorized by keywords and filtered by selected topic
- **Search Functionality**: Real-time search bar filtering products by name/description
- **Sorting Options**: Dropdown with "Mais Vendidos", "Novidades", "Menor Preço", "Maior Preço"
- **Product Storefront**: Steam-inspired grid layout showcasing premium infoproducts
- **Interactive Product Cards**: Hover effects reveal short descriptions
- **Modal-Based Product Details**: Click any product to open a full sales page modal
- **Product Information**: Complete details including long descriptions, benefits list, pricing
- **Call-to-Action**: Purchase buttons with guarantee messaging
- **Combined Filtering**: Sidebar topics + search + sorting work together
- **Mock Product Data**: 6 example products covering courses, consultancy, and packages
- **Responsive Grid**: 1-3 columns adapting to screen size

## Development Setup

### Running Locally
The application is configured to run on port 5000 with host 0.0.0.0 to work with Replit's proxy:
```bash
npm run dev -- -p 5000 -H 0.0.0.0
```

### Important Configuration
- **Cache Control**: Configured in next.config.js to prevent caching issues in Replit's iframe
- **Images**: Unoptimized for Replit compatibility
- **ESLint**: Disabled during builds for faster compilation

## Deployment

### Production Build
The application is configured for autoscale deployment:
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Deployment Type**: Autoscale (stateless)

## Recent Changes
- 2025-09-30: Advanced Navigation Features implementation completed
  - Created reusable AppLayout component with sidebar and main content structure
  - Refactored /learn page with sidebar navigation, search bar, and sorting dropdown
  - Refactored /shop page with sidebar navigation, search bar, and sorting dropdown
  - Implemented working category/topic filtering on both pages
  - Added functional sorting logic (recent/popular for Learn, bestseller/newest/price for Shop)
  - All filters (sidebar, search, sorting) work together seamlessly
  - Preserved existing modal functionality on shop page
  - Passed architect review for functionality and code quality

- 2025-09-30: Skills Shop Module implementation completed
  - Created `/shop` route with Client Component architecture for state management
  - Built ProductCard component with hover effects and click interactions
  - Designed ProductSaleModal component for full product detail pages
  - Implemented 6 mock products with complete information (courses, consultancy, packages)
  - Modal opens on card click showing full sales page with benefits and CTA
  - Responsive grid layout (1-3 columns) following design system
  - Passed architect review for code quality and component structure

- 2025-09-30: GitHub Import Setup completed
  - Installed all npm dependencies from package.json
  - Verified Next.js 13.5.1 configuration works with Replit proxy (using -H 0.0.0.0 flag)
  - Server workflow configured and running on port 5000
  - Tested both homepage (/) and /learn pages - both loading correctly
  - Configured autoscale deployment with build and start commands
  - Project fully functional and ready for development

- 2025-09-30: Learn Module implementation completed
  - Created `/learn` route with Server Component architecture
  - Built FilterableGrid client component for category filtering
  - Designed reusable ContentCard component following design system
  - Added dynamic `[slug]` routes with placeholder detail pages
  - Implemented 9 mock content items across 4 categories
  - Fixed all accessibility issues (no nested interactive elements)
  - Passed architect review for code quality and best practices

- 2025-09-30: Initial Replit setup completed
  - Configured Next.js for Replit proxy compatibility
  - Added cache control headers
  - Set up development workflow on port 5000
  - Configured autoscale deployment settings

## User Preferences
None specified yet.

## Notes
- The site uses Portuguese language throughout
- Color scheme: Dark theme with orange (#EE4F27) as primary accent
- TypeScript type errors in recharts components are non-blocking (version compatibility issues)
- Supabase client is imported but not actively used in current implementation
