# SEO Action Plan — ivalt-landing.com

**Current Health Score: 38/100** → **Target: 80+/100**

---

## Critical (Fix Immediately — Before Deploy)

### 1. Fix Domain Mismatch

**Impact:** Blocks proper indexing, splits link equity
**Effort:** 30 minutes

Standardize on ONE domain. Choose either `ivalt.com` or `www.ivalt.com` and update:

- `src/app/layout.tsx` — `metadataBase` URL
- `src/app/sitemap.ts` — all URL entries
- `src/app/robots.ts` — sitemap reference
- All page-level `canonical` URLs
- All `openGraph.url` values

### 2. Add Metadata to 7 Missing Pages

**Impact:** Every page without metadata shows generic root title in SERPs
**Effort:** 1 hour

Add `export const metadata: Metadata` to:

- `src/app/about/page.tsx` — Title: "About iVALT | Our Mission & Founders"
- `src/app/products/page.tsx` — Title: "iVALT Products | Identity Verification Solutions"
- `src/app/why-ivalt/page.tsx` — Title: "Why Choose iVALT | 5-Factor Authentication"
- `src/app/research/page.tsx` — Title: "iVALT Research | Identity Security Insights"
- `src/app/contact/page.tsx` — Title: "Contact iVALT | Get Started"
- `src/app/privacy-policy/page.tsx` — Title: "Privacy Policy | iVALT"
- `src/app/terms-and-conditions/page.tsx` — Title: "Terms & Conditions | iVALT"

### 3. Update Sitemap — Include All Pages

**Impact:** Google can't find 10+ pages
**Effort:** 30 minutes

Update `src/app/sitemap.ts` to include:

```
/solutions/docuid
/solutions/ondemandid
/solutions/human-bound-authority
/why-ivalt
/products
/research
/openvpn
/privacy-policy
/terms-and-conditions
/recent-updates/zero-trust-security-human-verified-identity-beyond-passwords
/recent-updates/psono-selects-ivalt-5fa
/recent-updates/ondemand-id-providing-5-factors-of-Identity-validation
/recent-updates/ivalt-revolutionizes-document-security-with-launch-of-DocuID
```

Also configure `next-sitemap` or remove the unused dependency.

### 4. Fix Missing h1 Tags (5 pages)

**Impact:** Search engines can't identify page topic
**Effort:** 1 hour

Pages needing h1 added:

- `/about` — Add h1 "About iVALT"
- `/why-ivalt` — Add h1 "Why iVALT"
- `/recent-updates` — Add h1 "Recent Updates"
- `/contact` — Add h1 "Contact Us"
- `/api-request` — Add h1 "Request API Access"

**Also fix duplicate h1s:**

- `/solutions/docuid` — Change second h1 to h2
- `/recent-updates/ondemand-id...` — Change "About iVALT" from h1 to h2

### 5. Fix Broken Internal Link

**Impact:** 404 error, wasted crawl budget
**Effort:** 2 minutes

In `src/components/ui/hero-section.tsx:318`:

```
/human-bound-authority → /solutions/human-bound-authority
```

---

## High Priority (Fix Within 1 Week)

### 6. Implement Structured Data

**Impact:** Rich results, knowledge panel, AI understanding
**Effort:** 3-4 hours

Create a JSON-LD component and add:

1. **Organization schema** (layout.tsx):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "iVALT",
  "url": "https://www.ivalt.com",
  "logo": "https://www.ivalt.com/images/logo.png",
  "description": "Advanced identity verification and biometric security solutions",
  "founder": [
    { "@type": "Person", "name": "Baldev Krishan" },
    { "@type": "Person", "name": "Brian Stout" }
  ],
  "sameAs": ["https://linkedin.com/company/ivalt"]
}
```

2. **WebSite schema** (homepage):

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "iVALT",
  "url": "https://www.ivalt.com"
}
```

3. **SoftwareApplication schema** (solution pages):
   - DocuID, On-Demand ID, Human-Bound Authority

4. **Article schema** (press release pages):
   - headline, datePublished, author, image

5. **BreadcrumbList schema** (all pages with navigation)

### 7. Add Canonical URLs to All Pages

**Impact:** Prevents duplicate content issues
**Effort:** 30 minutes

Add `alternates: { canonical: '...' }` to every page metadata export.

### 8. Optimize Oversized Images

**Impact:** Faster load times, better CWV scores
**Effort:** 2 hours

**Critical (convert to WebP, target <200KB):**

- `public/press-release/images/psono-collaborates-with-ivalt.png` — 4.5MB → ~150KB
- `public/press-release/images/ivalt-revolutionizes-document-security-with-launch-of-DocuID-net.png` — 1.4MB → ~150KB
- `src/assets/hero-image.png` — 2.3MB → ~200KB
- `src/assets/blue-image.png` — 2.0MB → ~200KB

**High (compress, target <200KB):**

- `public/press-release/images/ivalt-launches-ondemand-id-providing-5-factors-of-Identity-validation.png` — 863KB
- `public/images/human-bounded.png` — 712KB

### 9. Fix Empty Alt Text on 3 Press Release Images

**Impact:** Accessibility, image SEO
**Effort:** 5 minutes

- `recent-updates/psono-selects-ivalt-5fa/page.tsx:61` — Add "Psono partners with iVALT for 5-Factor Authentication"
- `recent-updates/ondemand-id-providing-5-factors-of-Identity-validation/page.tsx:64` — Add "iVALT launches OnDemand ID with 5+ factors of identity validation"
- `recent-updates/ivalt-revolutionizes-document-security-with-launch-of-DocuID/page.tsx:65` — Add "iVALT launches DocuID document security solution"

### 10. Create Proper OG Images

**Impact:** Social sharing click-through rates
**Effort:** 1-2 hours (design time)

- Create a branded 1200x630 template with iVALT logo and tagline
- Create page-specific OG images for key pages (homepage, solutions, articles)
- Update metadata to reference new images

---

## Medium Priority (Fix Within 1 Month)

### 11. Add Missing Security Headers

**Impact:** Security score, trust signals
**Effort:** 30 minutes

Update `next.config.ts` headers:

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### 12. Add Analytics & Search Console Verification

**Impact:** Data-driven SEO decisions
**Effort:** 30 minutes

- Install Vercel Analytics or Google Analytics
- Add `google-site-verification` meta tag
- Submit sitemap to Google Search Console

### 13. Implement Breadcrumb Navigation

**Impact:** UX, structured data, SERP appearance
**Effort:** 1-2 hours

Add visible breadcrumbs on:

- Solution sub-pages (`Home > Solutions > DocuID`)
- Recent updates articles (`Home > Recent Updates > Article Title`)
- Legal pages (`Home > Privacy Policy`)

### 14. Remove "Coming Soon" Stubs

**Impact:** Crawl quality, user trust
**Effort:** Varies

Options for `/products` and `/research`:

- **Option A:** Add real content (best)
- **Option B:** Add `noindex` to prevent indexing of stub pages
- **Option C:** Redirect to `/solutions` or homepage

### 15. Fix Heading Hierarchy on Privacy Policy

**Impact:** Accessibility, content structure
**Effort:** 15 minutes

Change h3 tags to h2 in `src/app/privacy-policy/page.tsx`.

### 16. Add FAQ Schema to Contact Page

**Impact:** Note: FAQPage for Google rich results restricted to government/healthcare (Aug 2023). However, FAQ schema still benefits AI/LLM citation.
**Effort:** 30 minutes

---

## Low Priority (Backlog)

### 17. Clean Up Duplicate Image Files

**Effort:** 30 minutes

Remove redundant copies:

- `public/wp-content/uploads/2017/07/logo.png` (legacy path)
- `public/logo-old.png`
- Duplicate logos across directories

### 18. Configure `next-sitemap` Properly

**Effort:** 30 minutes

Create `next-sitemap.config.js` for automatic sitemap generation.

### 19. Add `llms.txt` for AI Crawler Guidance

**Effort:** 15 minutes

Create `/public/llms.txt` with site information for AI crawlers.

### 20. Implement Content Strategy

**Effort:** Ongoing

- Add blog/resources section
- Create case studies
- Add customer testimonials
- Publish technical documentation
- Build FAQ content hub

### 21. Consider PWA / Manifest

**Effort:** 1-2 hours

If mobile app-like experience is desired.

### 22. Bundle Optimization

**Effort:** 1 hour

- Add `optimizePackageImports` for lucide-react, framer-motion
- Consider reducing to one animation library (currently 3: framer-motion, motion, gsap)
- Lazy-load non-critical client components

---

## Implementation Order

| Phase       | Tasks           | Est. Time | Expected Score Impact |
| ----------- | --------------- | --------- | --------------------- |
| **Phase 1** | #1-5 (Critical) | 3 hours   | 38 → 55               |
| **Phase 2** | #6-10 (High)    | 8 hours   | 55 → 72               |
| **Phase 3** | #11-16 (Medium) | 4 hours   | 72 → 80               |
| **Phase 4** | #17-22 (Low)    | Ongoing   | 80 → 90+              |

---

_Generated from local codebase analysis on March 23, 2026. Re-audit recommended after public deployment._
