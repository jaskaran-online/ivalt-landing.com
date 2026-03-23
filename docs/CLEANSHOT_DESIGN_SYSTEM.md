# CleanShot Design System

A comprehensive design system inspired by CleanShot X's clean, modern, and professional visual identity.

## Brand Identity

### Core Values

- **Simplicity**: Clean, uncluttered interfaces that focus on functionality
- **Precision**: Pixel-perfect design with attention to detail
- **Performance**: Fast, native experience with smooth interactions
- **Professionalism**: Serious tool for professionals and power users

### Brand Personality

- Minimalist yet powerful
- Professional but approachable
- Clean and efficient
- Technology-focused

## Color Palette

### Primary Colors

- **Primary Blue**: `#007AFF` - Main brand color, used for primary actions
- **Primary Dark**: `#0056CC` - Hover states, pressed buttons
- **Primary Light**: `#E6F3FF` - Background tints, light accents

### Neutral Colors

- **Black**: `#000000` - Primary text, icons
- **Dark Gray**: `#1C1C1E` - Secondary text, dark backgrounds
- **Medium Gray**: `#8E8E93` - Tertiary text, inactive states
- **Light Gray**: `#F2F2F7` - Background surfaces, dividers
- **White**: `#FFFFFF` - Primary background, cards

### Accent Colors

- **Success Green**: `#34C759` - Success states, confirmations
- **Warning Orange**: `#FF9500` - Warnings, attention states
- **Error Red**: `#FF3B30` - Errors, destructive actions
- **Info Purple**: `#AF52DE` - Information, highlights

### Semantic Colors

- **Screenshot Blue**: `#5AC8FA` - Screenshot-related features
- **Recording Red**: `#FF2D92` - Recording-related features
- **Annotation Yellow**: `#FFCC02` - Annotation tools

## Typography

### Font Family

**Primary**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

- Native system fonts for optimal performance and consistency
- Falls back to system defaults on each platform

### Font Scale

- **Display Large**: 48px / 3rem - Hero headings
- **Display Medium**: 36px / 2.25rem - Section headings
- **Display Small**: 30px / 1.875rem - Subsection headings
- **Heading 1**: 24px / 1.5rem - Card titles, prominent text
- **Heading 2**: 20px / 1.25rem - Secondary headings
- **Heading 3**: 18px / 1.125rem - Tertiary headings
- **Body Large**: 16px / 1rem - Primary body text
- **Body Medium**: 14px / 0.875rem - Secondary body text
- **Body Small**: 12px / 0.75rem - Captions, metadata
- **Caption**: 11px / 0.6875rem - Fine print, labels

### Font Weights

- **Light**: 300 - Rare usage, large display text
- **Regular**: 400 - Body text, standard usage
- **Medium**: 500 - Emphasized text, button labels
- **Semibold**: 600 - Headings, important information
- **Bold**: 700 - Strong emphasis, brand text

### Line Height

- **Tight**: 1.2 - Display headings
- **Normal**: 1.5 - Body text, standard usage
- **Relaxed**: 1.7 - Long-form content

## Spacing System

### Base Unit: 8px

All spacing follows an 8-pixel grid system for consistency and alignment.

### Spacing Scale

- **xs**: 4px (0.25rem) - Tight spacing, inline elements
- **sm**: 8px (0.5rem) - Small gaps, close relationships
- **md**: 16px (1rem) - Standard spacing, paragraph gaps
- **lg**: 24px (1.5rem) - Section spacing, card padding
- **xl**: 32px (2rem) - Large sections, page margins
- **2xl**: 48px (3rem) - Major sections, hero spacing
- **3xl**: 64px (4rem) - Page sections, major breaks
- **4xl**: 96px (6rem) - Hero sections, landing areas

## Layout Grid

### Container Widths

- **Mobile**: 100% (min 320px)
- **Tablet**: 768px max-width
- **Desktop**: 1200px max-width
- **Wide**: 1400px max-width

### Grid System

- **Columns**: 12-column grid
- **Gutter**: 24px between columns
- **Margins**: 24px on mobile, 48px on desktop

## Components

### Buttons

#### Primary Button

- Background: Primary Blue `#007AFF`
- Text: White
- Padding: 12px 24px
- Border radius: 8px
- Font: Medium 16px
- Hover: Primary Dark `#0056CC`

#### Secondary Button

- Background: Light Gray `#F2F2F7`
- Text: Black `#000000`
- Border: 1px solid Medium Gray `#8E8E93`
- Padding: 12px 24px
- Border radius: 8px
- Font: Medium 16px

#### Icon Button

- Size: 44x44px minimum touch target
- Icon: 20x20px
- Background: Transparent
- Hover: Light Gray `#F2F2F7`
- Border radius: 8px

### Cards

- Background: White `#FFFFFF`
- Border: 1px solid Light Gray `#F2F2F7`
- Border radius: 12px
- Padding: 24px
- Shadow: 0 2px 8px rgba(0,0,0,0.1)

### Form Elements

#### Input Fields

- Background: White `#FFFFFF`
- Border: 1px solid Medium Gray `#8E8E93`
- Border radius: 8px
- Padding: 12px 16px
- Font: Regular 16px
- Focus: Primary Blue border

#### Toggle Switches

- Track: Light Gray `#F2F2F7`
- Thumb: White with shadow
- Active: Primary Blue `#007AFF`
- Size: 44x24px

### Navigation

- Background: White with blur effect
- Border: 1px solid Light Gray `#F2F2F7`
- Height: 60px
- Logo: Left aligned
- Navigation: Center aligned
- CTA Button: Right aligned

## Iconography

### Icon System

- **Style**: Outlined, minimal, geometric
- **Weight**: 2px stroke weight
- **Size**: 16px, 20px, 24px standard sizes
- **Grid**: Based on 24x24px grid system
- **Corner radius**: 2px for rectangular elements

### Icon Categories

- **Actions**: Play, pause, record, screenshot
- **Navigation**: Arrow, chevron, menu, close
- **Communication**: Share, upload, download, link
- **Status**: Check, warning, error, info

## Motion & Animation

### Principles

- **Purposeful**: Every animation serves a functional purpose
- **Subtle**: Smooth, non-distracting movements
- **Fast**: Quick transitions that don't impede workflow
- **Natural**: Easing that feels organic

### Timing

- **Micro-interactions**: 150ms - Button hovers, state changes
- **Transitions**: 250ms - Page transitions, modal appearances
- **Complex animations**: 350ms - Multi-step processes

### Easing

- **Standard**: `cubic-bezier(0.4, 0.0, 0.2, 1)` - General use
- **Decelerate**: `cubic-bezier(0.0, 0.0, 0.2, 1)` - Entering elements
- **Accelerate**: `cubic-bezier(0.4, 0.0, 1, 1)` - Exiting elements

## Accessibility

### Contrast Ratios

- **AA Standard**: 4.5:1 for normal text
- **AA Large**: 3:1 for large text (18px+)
- **AAA Standard**: 7:1 for enhanced accessibility

### Focus States

- **Outline**: 2px solid Primary Blue `#007AFF`
- **Offset**: 2px from element
- **Border radius**: Matches component radius

### Interactive Elements

- **Minimum touch target**: 44x44px
- **Spacing**: 8px minimum between interactive elements
- **Labels**: All interactive elements have accessible labels

## Usage Guidelines

### Do's

- Use consistent spacing from the 8px grid system
- Maintain high contrast ratios for readability
- Keep interfaces clean and uncluttered
- Use system fonts for optimal performance
- Apply subtle shadows and borders for depth

### Don'ts

- Don't use colors outside the defined palette
- Don't break the grid system with arbitrary spacing
- Don't use multiple font families
- Don't over-animate or distract from functionality
- Don't compromise accessibility for aesthetics

## Implementation Notes

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-primary: #007aff;
  --color-primary-dark: #0056cc;
  --color-primary-light: #e6f3ff;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;

  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-body: 1rem;
  --line-height-normal: 1.5;
}
```

### Responsive Breakpoints

```css
/* Mobile first approach */
@media (min-width: 768px) {
  /* Tablet */
}
@media (min-width: 1024px) {
  /* Desktop */
}
@media (min-width: 1440px) {
  /* Wide */
}
```

This design system captures CleanShot's clean, professional aesthetic while providing a comprehensive foundation for consistent design and development across all touchpoints.
