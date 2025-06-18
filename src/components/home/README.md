# Homepage Components

This directory contains modular components for the homepage, making it easier to maintain and reuse code.

## Structure

```
src/components/home/
├── index.ts                    # Exports all components
├── HeroSection.tsx            # Hero/banner section
├── IdentityCrisisSection.tsx  # Problem statement section
├── PlatformOverviewSection.tsx # Platform features section
├── KeyApplicationsSection.tsx  # Three main applications
├── VisionSection.tsx          # Future applications section
├── MarketOpportunitySection.tsx # Market and competitive advantages
└── README.md                  # This file
```

## Usage

```tsx
import {
  HeroSection,
  IdentityCrisisSection,
  PlatformOverviewSection,
  KeyApplicationsSection,
  VisionSection,
  MarketOpportunitySection
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IdentityCrisisSection />
      <PlatformOverviewSection />
      <KeyApplicationsSection />
      <VisionSection />
      <MarketOpportunitySection />
    </>
  );
}
```

## Component Features

### HeroSection
- Main landing section with title, subtitle, and CTAs
- Responsive design with mobile-first approach
- Fade-in animations

### IdentityCrisisSection  
- Problem statement with statistics
- Two-column layout with risks and solution
- Color-coded content (red for problems, teal for solutions)

### PlatformOverviewSection
- Two-column layout for human vs IoT/AI authentication
- Feature lists with icons
- Highlighted result statements

### KeyApplicationsSection
- Three application cards with consistent layout
- Reusable `ApplicationCard` component
- Configurable icons, features, and delays

### VisionSection
- Future applications showcase
- Platform extensibility messaging
- Grid layout with feature cards

### MarketOpportunitySection
- Competitive advantages with border-left styling
- "Why Now?" section with gradient background
- Reusable card components for advantages

## Design System

- **Colors**: Uses `teal-primary` and `primary` color variables
- **Typography**: Consistent heading hierarchy
- **Spacing**: Standard padding/margin using Tailwind classes
- **Animation**: FadeInOnScroll components with staggered delays
- **Layout**: Responsive grid system with consistent max-width containers

## Reusable Components

The modular structure includes several reusable sub-components:

- `ApplicationCard` (within KeyApplicationsSection)
- `CompetitiveAdvantageCard` (within MarketOpportunitySection)
- `WhyNowItem` (within MarketOpportunitySection)

## Data Management

Content is centralized in `/src/lib/constants/homepage.ts` for easy management and localization.

## Benefits

1. **Maintainability**: Each section is isolated and easier to modify
2. **Reusability**: Components can be reused across different pages
3. **Testing**: Individual components can be tested in isolation
4. **Performance**: Potential for code splitting if needed
5. **Collaboration**: Multiple developers can work on different sections simultaneously 