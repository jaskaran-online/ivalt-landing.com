# Brand Colors Usage Guide

## Color Palette

| Color              | Hex Code  | CSS Variable          | Tailwind Class |
| ------------------ | --------- | --------------------- | -------------- |
| Teal Primary       | `#30B68E` | `var(--teal-primary)` | `teal-primary` |
| Navy Primary       | `#1E4884` | `var(--navy-primary)` | `navy-primary` |
| Light Teal         | `#4DD8AD` | `var(--light-teal)`   | `light-teal`   |
| Dark Navy          | `#0F3366` | `var(--dark-navy)`    | `dark-navy`    |
| Background Primary | `#FAF9F7` | `var(--bg-primary)`   | `bg-primary`   |

## Usage in CSS

### CSS Custom Properties

```css
.my-element {
  background-color: var(--teal-primary);
  color: var(--navy-primary);
  border-color: var(--light-teal);
  background-color: var(--bg-primary);
}
```

### Direct Hex Values

```css
.my-element {
  background-color: #30b68e;
  color: #1e4884;
  border-color: #4dd8ad;
  background-color: #faf9f7;
}
```

## Usage in Tailwind Classes

### Background Colors

```html
<div class="bg-teal-primary">Teal background</div>
<div class="bg-navy-primary">Navy background</div>
<div class="bg-light-teal">Light teal background</div>
<div class="bg-dark-navy">Dark navy background</div>
<div class="bg-primary">Primary background</div>
```

### Text Colors

```html
<p class="text-teal-primary">Teal text</p>
<p class="text-navy-primary">Navy text</p>
<p class="text-light-teal">Light teal text</p>
<p class="text-dark-navy">Dark navy text</p>
```

### Border Colors

```html
<div class="border border-teal-primary">Teal border</div>
<div class="border border-navy-primary">Navy border</div>
<div class="border border-light-teal">Light teal border</div>
<div class="border border-dark-navy">Dark navy border</div>
```

### Hover States

```html
<button class="bg-teal-primary hover:bg-navy-primary">Hover to change color</button>
```

## Usage in React/TypeScript

### Inline Styles

```tsx
const MyComponent = () => (
  <div style={{ backgroundColor: 'var(--teal-primary)' }}>Brand colored element</div>
);
```

### With Tailwind Classes

```tsx
const MyComponent = () => (
  <div className="bg-teal-primary text-white p-4 rounded-lg">Brand styled component</div>
);
```

## Common Color Combinations

### Primary CTA Button

```html
<button class="bg-teal-primary hover:bg-navy-primary text-white">Call to Action</button>
```

### Secondary Button

```html
<button class="bg-light-teal hover:bg-teal-primary text-dark-navy">Secondary Action</button>
```

### Card with Brand Accent

```html
<div class="bg-white border-l-4 border-teal-primary p-6">
  <h3 class="text-navy-primary">Card Title</h3>
  <p class="text-gray-600">Card content</p>
</div>
```

### Primary Background Layout

```html
<div class="bg-primary min-h-screen">
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-navy-primary text-2xl font-bold">Page Title</h1>
    <p class="text-gray-700">Content with primary background</p>
  </div>
</div>
```

## Dark Mode Support

The colors will automatically work in dark mode as they use fixed hex values. If you need dark mode variants, you can extend the CSS:

```css
.dark {
  --teal-primary: #4dd8ad; /* Lighter teal for dark mode */
  --navy-primary: #5a8bc4; /* Lighter navy for dark mode */
  --bg-primary: #1a1a1a; /* Dark background for dark mode */
}
```
