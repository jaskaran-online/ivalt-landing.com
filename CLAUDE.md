# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

iVALT Landing Site - Next.js 15 React application for identity verification company showcasing DocuID, OnDemandID, and Universal biometric solutions.

**Tech Stack**: Next.js 15 with App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Shadcn/ui

## Development Commands

```bash
# Development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

**Note**: Package manager is PNPM (not npm/yarn). Always use `pnpm` commands.

## Architecture

### App Router Structure
- **File-based routing** in `src/app/` with TypeScript pages
- **Layout hierarchy**: Root layout (`layout.tsx`) includes Header/Footer globally
- **Press releases**: Nested layout with dynamic routes in `press-release/[slug]/`

### Component Organization
```
src/components/
├── Header.tsx, Footer.tsx, ContactForm.tsx  # Global components
├── home/                                    # Homepage sections
├── solutions/                               # Solution-specific components  
├── why-ivalt/                              # Why iVALT page components
└── ui/                                     # Shadcn/ui components + custom typography system
```

### Key Patterns
- **Domain-driven folders**: Components grouped by page/feature area
- **Custom typography system**: `src/components/ui/typography.tsx` with responsive components (`Heading1`, `BodyText`, etc.)
- **Brand color integration**: CSS custom properties in `globals.css` (teal-primary: #30B68E, navy-primary: #1E4884)
- **Form handling**: React Hook Form + Zod validation (see `ContactForm.tsx`)

## Styling System

**Tailwind CSS v4** with custom brand colors and typography scale. Components use:
- Brand colors: `bg-teal-primary`, `text-navy-primary`, `bg-light-teal`, `bg-dark-navy`
- Typography components instead of raw Tailwind classes
- Responsive design with mobile-first approach

## Configuration

- **Next.js config**: `next.config.ts` with image domains, build settings, ESLint/TypeScript ignored during builds
- **Shadcn/ui**: New York style, Lucide icons (`components.json`)
- **Path mapping**: `@/` alias for clean imports
- **Package manager**: PNPM (lock file present)
- **Font**: Poppins (Google Fonts) with weights 300-700

## Business Context

Identity verification solutions company with three main products:
- **DocuID**: Document verification
- **OnDemandID**: On-demand identity verification  
- **Universal**: Biometric identity solutions

Components reference these business domains in naming and content structure.

## Development Notes

- Uses latest React 19 with concurrent features
- Turbopack for fast development builds
- Full TypeScript integration with strict typing
- Mobile-centric design approach matching company positioning
- Comprehensive existing documentation in `COMPONENT_USAGE_GUIDE.md`, `BRAND_COLORS.md`, `TYPOGRAPHY_GUIDE.md`

## Important Development Patterns

### Typography Usage
Always use typography components instead of raw Tailwind classes:
```tsx
// ✅ Correct
<Heading1>Title</Heading1>
<BodyText>Content</BodyText>

// ❌ Avoid
<h1 className="text-4xl font-bold">Title</h1>
```

### Brand Colors
Use brand color utilities from `globals.css`:
```tsx
// ✅ Correct - using brand colors
<div className="bg-teal-primary text-white">
<div className="text-navy-primary">

// ❌ Avoid - custom hex values
<div className="bg-[#30B68E]">
```

### Form Handling
All forms use React Hook Form + Zod validation pattern (see `ContactForm.tsx` reference).