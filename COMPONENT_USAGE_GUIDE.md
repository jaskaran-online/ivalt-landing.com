# Component Usage Guide

## 404 Not Found Page

The 404 page is automatically used by Next.js when a route is not found. It's located at `src/app/not-found.tsx`.

### Features
- **Brand styling** with teal/navy color scheme
- **Large 404 display** with gradient accent bar
- **Action buttons** for navigation (Go Home, Go Back)
- **Help section** with search and contact links
- **Popular pages** quick navigation
- **Responsive design** for all devices

### Automatic Usage
The 404 page is automatically displayed when:
- User navigates to a non-existent route
- A page throws a `notFound()` error
- Manual redirect to 404

### Manual Usage
```tsx
import { notFound } from 'next/navigation'

// In any page or component
if (!data) {
  notFound()
}
```

## Coming Soon Component

A flexible, reusable component for pages/features under development.

### Basic Usage

```tsx
import ComingSoon from "@/components/ComingSoon";

export default function ComingSoonPage() {
  return <ComingSoon />;
}
```

### Advanced Usage with Countdown

```tsx
import ComingSoon from "@/components/ComingSoon";

export default function ProductLaunch() {
  // Set launch date (30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <ComingSoon
      title="New Product Launch"
      subtitle="Revolutionary biometric authentication"
      description="We're building the next generation of secure identity verification. Join our waitlist to be the first to experience the future of authentication."
      launchDate={launchDate}
      showCountdown={true}
      showEmailSignup={true}
    />
  );
}
```

### Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Coming Soon" | Main heading text |
| `subtitle` | string | "Something amazing is on the way" | Subheading text |
| `description` | string | Default description | Body text explaining what's coming |
| `launchDate` | Date | undefined | Target launch date for countdown |
| `showCountdown` | boolean | true | Whether to show countdown timer |
| `showEmailSignup` | boolean | true | Whether to show email signup form |
| `className` | string | "" | Additional CSS classes |

### Usage Examples

#### Simple Coming Soon
```tsx
<ComingSoon 
  title="Feature Under Development"
  showCountdown={false}
/>
```

#### Product Launch with Countdown
```tsx
<ComingSoon
  title="Universal Biometric ID® v2.0"
  subtitle="Next-gen security is almost here"
  description="Enhanced biometric recognition with AI-powered fraud detection. Pre-register now for early access."
  launchDate={new Date('2024-06-01')}
/>
```

#### Service Maintenance
```tsx
<ComingSoon
  title="Scheduled Maintenance"
  subtitle="We'll be back shortly"
  description="We're performing scheduled maintenance to improve your experience. Service will resume in a few hours."
  showCountdown={false}
  showEmailSignup={false}
/>
```

#### Event Registration
```tsx
<ComingSoon
  title="iVALT Security Summit 2024"
  subtitle="Join industry leaders in San Francisco"
  description="Connect with cybersecurity experts, learn about the latest threats, and discover cutting-edge solutions."
  launchDate={new Date('2024-09-15')}
/>
```

### Customization Options

#### Custom Styling
```tsx
<ComingSoon
  className="min-h-[80vh]" // Custom height
  title="Custom Page"
/>
```

#### Without Email Signup
```tsx
<ComingSoon
  showEmailSignup={false}
  title="Internal Tool"
  description="This feature is available for internal use only."
/>
```

#### Countdown Only
```tsx
<ComingSoon
  showEmailSignup={false}
  launchDate={new Date('2024-12-25')}
  title="Holiday Special"
  subtitle="Something special for the holidays"
/>
```

## Page Integration Examples

### Product Page Coming Soon
```tsx
// app/products/new-feature/page.tsx
import ComingSoon from "@/components/ComingSoon";

export default function NewFeaturePage() {
  return (
    <ComingSoon
      title="DocuID™ Enterprise"
      subtitle="Advanced document verification"
      description="AI-powered document authentication with real-time fraud detection for enterprise customers."
      launchDate={new Date('2024-07-01')}
    />
  );
}
```

### Conditional Rendering
```tsx
// Show coming soon until feature is ready
export default function FeaturePage() {
  const isFeatureReady = false; // Your feature flag logic

  if (!isFeatureReady) {
    return (
      <ComingSoon
        title="Feature In Development"
        showCountdown={false}
      />
    );
  }

  return <YourActualFeature />;
}
```

### API Integration
```tsx
"use client";

import { useState } from "react";
import ComingSoon from "@/components/ComingSoon";

export default function BetaSignup() {
  const [launchDate, setLaunchDate] = useState<Date | undefined>();

  // Fetch launch date from API
  useEffect(() => {
    fetch('/api/launch-date')
      .then(res => res.json())
      .then(data => setLaunchDate(new Date(data.date)));
  }, []);

  return (
    <ComingSoon
      title="Beta Program"
      launchDate={launchDate}
    />
  );
}
```

## Styling & Theming

Both components use your established design system:

- **Colors**: Teal primary, navy primary, light teal, dark navy
- **Typography**: Custom typography components with proper hierarchy
- **Components**: Shadcn UI components (Button, Input)
- **Responsive**: Mobile-first design approach
- **Accessibility**: Proper semantic HTML and ARIA labels

## Best Practices

1. **SEO**: Add proper meta tags for coming soon pages
2. **Analytics**: Track email signups and user engagement
3. **Performance**: Components are optimized for fast loading
4. **Accessibility**: All interactive elements are keyboard accessible
5. **Mobile**: Test on various screen sizes for optimal UX 