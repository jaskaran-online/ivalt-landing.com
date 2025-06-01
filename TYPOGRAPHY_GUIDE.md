# Typography Components Guide

## Overview

A comprehensive typography system with brand color integration, responsive sizing, and flexible variants.

## Components

### Main Typography Component

```tsx
import { Typography } from "@/components/ui/typography";

<Typography 
  variant="h1" 
  color="teal-primary" 
  weight="bold"
  className="mb-4"
>
  Your Text Here
</Typography>
```

### Shortcut Components

```tsx
import { 
  Heading1, 
  Heading2, 
  Heading3, 
  BodyText, 
  SmallText, 
  Caption 
} from "@/components/ui/typography";
```

## Variants

### Text Sizes

| Variant | Desktop | Tablet | Mobile | Use Case |
|---------|---------|--------|--------|----------|
| `h1` | 6xl (60px) | 5xl (48px) | 4xl (36px) | Main page titles |
| `h2` | 5xl (48px) | 4xl (36px) | 3xl (30px) | Section headers |
| `h3` | 4xl (36px) | 3xl (30px) | 2xl (24px) | Subsection headers |
| `h4` | 3xl (30px) | 2xl (24px) | xl (20px) | Component titles |
| `h5` | 2xl (24px) | xl (20px) | lg (18px) | Small headers |
| `h6` | xl (20px) | lg (18px) | base (16px) | Micro headers |
| `body1` | base (16px) | base (16px) | base (16px) | Main body text |
| `body2` | sm (14px) | sm (14px) | sm (14px) | Secondary text |
| `caption` | xs (12px) | xs (12px) | xs (12px) | Captions, labels |
| `overline` | xs (12px) | xs (12px) | xs (12px) | Overline text |

### Color Variants

```tsx
// Brand Colors
<Typography color="teal-primary">Teal Primary (#30B68E)</Typography>
<Typography color="navy-primary">Navy Primary (#1E4884)</Typography>
<Typography color="light-teal">Light Teal (#4DD8AD)</Typography>
<Typography color="dark-navy">Dark Navy (#0F3366)</Typography>

// System Colors
<Typography color="default">Default foreground</Typography>
<Typography color="muted">Muted text</Typography>
<Typography color="accent">Accent color</Typography>
```

### Weight Variants

```tsx
<Typography weight="light">Light text (300)</Typography>
<Typography weight="normal">Normal text (400)</Typography>
<Typography weight="medium">Medium text (500)</Typography>
<Typography weight="semibold">Semibold text (600)</Typography>
<Typography weight="bold">Bold text (700)</Typography>
```

## Usage Examples

### Page Headers

```tsx
// Hero section
<Heading1 color="navy-primary" className="mb-6">
  Transform Your Business with AI
</Heading1>
<BodyText color="muted" className="text-lg max-w-2xl">
  Discover how our cutting-edge solutions can revolutionize your workflow
</BodyText>

// Section header
<Heading2 color="teal-primary" className="mb-4">
  Our Services
</Heading2>
```

### Cards and Components

```tsx
<div className="bg-white p-6 rounded-lg border">
  <Heading4 color="navy-primary" className="mb-3">
    Feature Title
  </Heading4>
  <BodyText className="mb-4">
    Description of the feature and its benefits for users.
  </BodyText>
  <Caption color="muted">
    Last updated: January 2024
  </Caption>
</div>
```

### Navigation and UI

```tsx
// Navigation items
<Typography variant="body2" weight="medium" color="navy-primary">
  Products
</Typography>

// Buttons
<button className="bg-teal-primary text-white px-6 py-3 rounded-lg">
  <Typography variant="body2" weight="semibold" color="white">
    Get Started
  </Typography>
</button>
```

### Content Sections

```tsx
<section className="py-16">
  <Overline color="teal-primary" className="mb-2">
    About Us
  </Overline>
  <Heading2 color="navy-primary" className="mb-6">
    Who We Are
  </Heading2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <BodyText className="mb-4">
        We are a team of passionate developers and designers 
        creating innovative solutions.
      </BodyText>
      <SmallText color="muted">
        Founded in 2020, we've helped over 100 companies.
      </SmallText>
    </div>
  </div>
</section>
```

### Forms and Labels

```tsx
<div className="space-y-4">
  <div>
    <Typography variant="body2" weight="medium" className="mb-2">
      Email Address
    </Typography>
    <input 
      type="email" 
      className="w-full p-3 border rounded-lg"
      placeholder="your@email.com"
    />
    <Caption color="muted" className="mt-1">
      We'll never share your email with anyone else.
    </Caption>
  </div>
</div>
```

## Brand Color Combinations

### Primary Brand Theme
```tsx
<Heading1 color="teal-primary">Main Title</Heading1>
<Heading2 color="navy-primary">Section Title</Heading2>
<BodyText color="default">Body content</BodyText>
<Caption color="muted">Supporting text</Caption>
```

### Accent Theme
```tsx
<Heading1 color="navy-primary">Main Title</Heading1>
<Heading2 color="light-teal">Section Title</Heading2>
<BodyText color="default">Body content</BodyText>
<SmallText color="dark-navy">Call to action text</SmallText>
```

## Responsive Behavior

All typography components are responsive by default:

- **Mobile (< 768px)**: Smaller text sizes for better readability
- **Tablet (768px - 1024px)**: Medium text sizes
- **Desktop (> 1024px)**: Full text sizes

## Custom Styling

```tsx
// Override with custom classes
<Typography 
  variant="h2" 
  color="teal-primary"
  className="text-center underline decoration-2 decoration-navy-primary"
>
  Custom Styled Header
</Typography>

// Use as different HTML element
<Typography 
  variant="h3" 
  as="span" 
  color="navy-primary"
>
  Span with H3 styling
</Typography>
```

## Best Practices

1. **Hierarchy**: Use heading levels semantically (h1 → h2 → h3)
2. **Consistency**: Stick to the defined color palette
3. **Contrast**: Ensure sufficient contrast for accessibility
4. **Responsive**: Test on different screen sizes
5. **Performance**: Use shortcut components for common patterns

## Accessibility

- Semantic HTML elements are used by default
- Proper heading hierarchy is maintained
- Color contrast meets WCAG guidelines
- Font sizes are scalable and readable 