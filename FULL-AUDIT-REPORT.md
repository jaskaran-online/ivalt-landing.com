# SEO Audit Report — ivalt-landing.com

**Date:** March 23, 2026
**Business Type:** SaaS (Identity Verification & Biometric Security)
**Framework:** Next.js 16.2.1 (App Router, Turbopack)
**Deployment:** Not yet publicly deployed (local analysis)

---

## Executive Summary

### SEO Health Score: 38/100

| Category                 | Weight   | Score  | Weighted      |
| ------------------------ | -------- | ------ | ------------- |
| Technical SEO            | 22%      | 35/100 | 7.7           |
| Content Quality          | 23%      | 50/100 | 11.5          |
| On-Page SEO              | 20%      | 30/100 | 6.0           |
| Schema / Structured Data | 10%      | 0/100  | 0.0           |
| Performance (CWV)        | 10%      | 60/100 | 6.0           |
| AI Search Readiness      | 10%      | 40/100 | 4.0           |
| Images                   | 5%       | 30/100 | 1.5           |
| **Total**                | **100%** |        | **36.7 → 38** |

### Top 5 Critical Issues

1. **Zero structured data** — No JSON-LD/Schema.org markup anywhere on the site
2. **Domain mismatch** — `metadataBase` uses `ivalt.com`, sitemap/robots use `www.ivalt.com`
3. **7 pages missing metadata** — No title, description, OG tags on key pages
4. **Incomplete sitemap** — 10+ pages missing from sitemap (only 6 of ~18 URLs listed)
5. **5 pages missing h1 tags** — Critical heading hierarchy broken

### Top 5 Quick Wins

1. Add metadata to all pages (1-hour fix, immediate impact)
2. Fix domain inconsistency (30-minute fix)
3. Update sitemap to include all pages (30-minute fix)
4. Fix heading hierarchy issues (1-hour fix)
5. Optimize oversized images (2-hour fix, 7MB+ of images to compress)

---

## Technical SEO (35/100)

### Robots.txt ✅ Configured

- **File:** `src/app/robots.ts`
- Allows all crawlers, disallows `/private/`
- References sitemap at `https://www.ivalt.com/sitemap.xml`
- ⚠️ Uses `www.ivalt.com` while `metadataBase` is `ivalt.com`

### Sitemap ❌ Incomplete

**File:** `src/app/sitemap.ts`

Only 6 URLs included:
| URL | Priority | ChangeFreq |
|-----|----------|------------|
| `/` | 1.0 | yearly |
| `/about` | 0.8 | monthly |
| `/solutions` | 0.5 | weekly |
| `/contact` | 0.7 | monthly |
| `/recent-updates` | 0.6 | weekly |
| `/api-request` | 0.7 | monthly |

**Missing from sitemap (12 pages):**

- `/products`
- `/why-ivalt`
- `/research`
- `/privacy-policy`
- `/terms-and-conditions`
- `/openvpn`
- `/solutions/docuid`
- `/solutions/ondemandid`
- `/solutions/human-bound-authority`
- `/recent-updates/zero-trust-security-human-verified-identity-beyond-passwords`
- `/recent-updates/psono-selects-ivalt-5fa`
- `/recent-updates/ondemand-id-providing-5-factors-of-Identity-validation`
- `/recent-updates/ivalt-revolutionizes-document-security-with-launch-of-DocuID`

**Note:** `next-sitemap` package is installed but not configured (no `next-sitemap.config.js`).

### Domain Configuration ❌ Critical Mismatch

| Component                       | Domain Used     |
| ------------------------------- | --------------- |
| `metadataBase` (layout.tsx)     | `ivalt.com`     |
| Sitemap URLs                    | `www.ivalt.com` |
| Robots.txt sitemap ref          | `www.ivalt.com` |
| Canonical URLs (recent-updates) | `ivalt.com`     |
| OG url (layout.tsx)             | `www.ivalt.com` |

**Impact:** Search engines may treat these as separate sites, diluting authority.

### Canonical URLs ⚠️ Partial

Only 6 of ~18 pages have canonical URLs defined:

- `/recent-updates` and its 4 article pages
- `/api-request`

**Missing canonicals:** Homepage, about, solutions, products, why-ivalt, contact, research, openvpn, privacy-policy, terms-and-conditions, all solution sub-pages.

### Security Headers ⚠️ Partial

**Configured:**

- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`

**Missing:**

- `Content-Security-Policy`
- `Strict-Transport-Security` (HSTS)
- `Referrer-Policy`
- `Permissions-Policy`

### Middleware ❌ Not Implemented

No `middleware.ts` exists. No edge-level redirects, rewrites, or security header injection.

### Analytics ❌ None

No Google Analytics, GTM, Plausible, or Vercel Analytics installed. No conversion tracking.

### Search Console Verification ❌ None

No `google-site-verification`, `bing-site-verification`, or similar meta tags.

### Manifest/PWA ❌ None

No `manifest.json` or `site.webmanifest`. Not PWA-ready.

### Hreflang ❌ Not Implemented

No hreflang tags. Site is English-only (`<html lang="en">`).

### Configuration Issues

- `typescript.ignoreBuildErrors: true` — Hides potential issues
- `next-sitemap` installed but unused
- No `optimizePackageImports` configured for bundle optimization

---

## On-Page SEO (30/100)

### Metadata Coverage

| Page                               | Title | Description | OG           | Twitter      | Canonical |
| ---------------------------------- | ----- | ----------- | ------------ | ------------ | --------- |
| `/` (homepage)                     | ✅    | ✅          | ✅ Inherited | ✅ Inherited | ❌        |
| `/about`                           | ❌    | ❌          | ❌ Inherited | ❌ Inherited | ❌        |
| `/products`                        | ❌    | ❌          | ❌ Inherited | ❌ Inherited | ❌        |
| `/solutions`                       | ✅    | ✅          | ✅           | ❌           | ❌        |
| `/solutions/human-bound-authority` | ✅    | ✅          | ✅           | ✅           | ❌        |
| `/solutions/ondemandid`            | ✅    | ✅          | ✅           | ✅           | ❌        |
| `/solutions/docuid`                | ✅    | ✅          | ✅           | ✅           | ❌        |
| `/why-ivalt`                       | ❌    | ❌          | ❌ Inherited | ❌ Inherited | ❌        |
| `/recent-updates`                  | ✅    | ✅          | ✅           | ❌           | ✅        |
| `/recent-updates/zero-trust...`    | ✅    | ✅          | ✅           | ✅           | ✅        |
| `/recent-updates/psono...`         | ✅    | ✅          | ✅           | ✅           | ✅        |
| `/recent-updates/ondemand-id...`   | ✅    | ✅          | ✅           | ✅           | ✅        |
| `/recent-updates/ivalt...DocuID`   | ✅    | ✅          | ✅           | ✅           | ✅        |
| `/research`                        | ❌    | ❌          | ❌ Inherited | ❌ Inherited | ❌        |
| `/contact`                         | ❌    | ❌          | ❌ Inherited | ❌ Inherited | ❌        |
| `/api-request`                     | ✅    | ✅          | ✅           | ❌           | ✅        |
| `/openvpn`                         | ✅    | ✅          | ✅           | ✅           | ❌        |
| `/privacy-policy`                  | ❌    | ❌          | ❌ Inherited | ❌ Inherited | ❌        |
| `/terms-and-conditions`            | ❌    | ❌          | ❌ Inherited | ❌ Inherited | ❌        |

**7 pages have NO dedicated metadata** — they all display the root default: "iVALT | Advanced Identity Verification & Biometric Security"

### Heading Structure

#### Pages Missing h1 Tags (5 pages):

1. `/about` — Uses SectionTitle (h2) only
2. `/why-ivalt` — Uses SectionTitle (h2) only
3. `/recent-updates` — Uses SectionTitle (h2) only
4. `/contact` — Uses SectionTitle (h2) only
5. `/api-request` — Uses SectionTitle (h2) only

#### Pages With Duplicate h1 Tags (2 pages):

1. `/solutions/docuid` — Two h1s (title + futureTitle)
2. `/recent-updates/ondemand-id...` — Two h1s (title + "About iVALT")

#### Heading Hierarchy Issues:

- `/privacy-policy` — Jumps from h1 directly to h3 (no h2)
- `/openvpn` — h1 is just "Integration" (not descriptive)
- Multiple pages use SectionTitle component which always renders h2

### Internal Linking

**Positive:**

- Footer contains links to all main sections
- Hero section links to solutions pages
- Recent updates widget provides internal links

**Issues:**

- Hero links to `/human-bound-authority` (missing `/solutions/` prefix — broken link?)
- No breadcrumb navigation on any page
- No related content linking on article pages
- Limited cross-linking between solution pages

### Open Graph Image

- Uses `/images/logo.png` (195 KB)
- Metadata claims 1200x630 but this is a logo, not a proper OG graphic
- Best practice: Create dedicated 1200x630 images with branding and page-specific text
- No page-specific OG images (all pages inherit the same logo)

---

## Content Quality (50/100)

### Strengths

- Clear value proposition on homepage
- Press release articles are substantive (300+ words each)
- Solutions pages have structured feature lists
- CyberThreatsSection provides valuable industry context

### Weaknesses

#### Thin Content Pages:

- `/products` — "Coming Soon" placeholder (launch date June 1, 2024 — already passed)
- `/research` — "Coming Soon" placeholder
- `/why-ivalt` — Mostly component-based with limited crawlable text
- `/privacy-policy` — Client component (may affect server rendering)
- `/terms-and-conditions` — Client component

#### Content Gaps:

- No blog/resources section beyond press releases
- No case studies or customer testimonials
- No FAQ content (FAQ section on contact page is minimal)
- No technical documentation or integration guides
- Product pages are stubs

#### E-E-A-T Signals:

- **Experience:** Limited — no case studies, testimonials, or usage data
- **Expertise:** Present — founders listed on about page, patent information
- **Authoritativeness:** Moderate — press releases, partnerships (OpenVPN, Psono)
- **Trustworthiness:** Moderate — privacy policy, terms, contact info present

**Missing E-E-A-T elements:**

- No author bios on article pages
- No customer logos or trust badges
- No third-party certifications displayed
- No social proof metrics (users, enterprises, etc.)

---

## Schema / Structured Data (0/100)

### Implementation: NONE

**Zero structured data found anywhere on the site.** No JSON-LD, no Schema.org, no microdata.

### Recommended Schema Types:

| Schema Type         | Priority | Pages                       |
| ------------------- | -------- | --------------------------- |
| Organization        | Critical | Homepage, About             |
| WebSite             | Critical | Homepage                    |
| WebPage             | High     | All pages                   |
| SoftwareApplication | High     | Solution pages              |
| Article             | High     | Press release pages         |
| BreadcrumbList      | High     | All pages                   |
| FAQPage             | Medium   | Contact page                |
| Product             | Medium   | Solution pages              |
| HowTo               | Low      | N/A (deprecated for Google) |

---

## Performance (CWV) (60/100)

### Positive Signals:

- Using Next.js 16 with Turbopack for development
- Font optimization via `next/font/google` (Poppins with specific weights)
- Image optimization via Next.js Image component
- Server Components used by default (good for initial load)

### Concerns:

- Heavy animation libraries: `framer-motion`, `motion`, `gsap` (3 animation packages)
- Multiple client components on homepage (10+ sections)
- No bundle analysis or optimization configured
- No CDN/caching headers configured
- `reCAPTCHA v3` loads on every page (via RecaptchaProvider in layout)

### Image Performance Issues:

| File                                                                                                    | Size       | Issue    |
| ------------------------------------------------------------------------------------------------------- | ---------- | -------- |
| `public/press-release/images/psono-collaborates-with-ivalt.png`                                         | **4.5 MB** | Critical |
| `public/press-release/images/ivalt-revolutionizes-document-security-with-launch-of-DocuID-net.png`      | **1.4 MB** | Critical |
| `src/assets/hero-image.png`                                                                             | **2.3 MB** | Critical |
| `src/assets/blue-image.png`                                                                             | **2.0 MB** | Critical |
| `public/press-release/images/ivalt-launches-ondemand-id-providing-5-factors-of-Identity-validation.png` | **863 KB** | High     |
| `public/images/human-bounded.png`                                                                       | **712 KB** | High     |

**Total oversized images: ~11.7 MB** — Should be compressed to <200KB each.

---

## AI Search Readiness (40/100)

### AI Crawler Accessibility:

- No `llms.txt` file found
- No `robots.txt` rules for AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
- Site is not publicly deployed — not yet crawlable

### Citability Assessment:

- Clear product descriptions (good for AI extraction)
- Structured feature lists (good for comparison queries)
- Missing: FAQ format content, direct answer patterns
- Missing: Structured data that helps AI understand entities

### Brand Mention Signals:

- Press releases provide third-party mentions (Psono, OpenVPN)
- No structured brand information for AI consumption
- No knowledge graph optimization

---

## Images (30/100)

### Empty Alt Text (3 critical instances):

1. `recent-updates/psono-selects-ivalt-5fa/page.tsx:61` — Empty alt on press release image
2. `recent-updates/ondemand-id-providing-5-factors-of-Identity-validation/page.tsx:64` — Empty alt
3. `recent-updates/ivalt-revolutionizes-document-security-with-launch-of-DocuID/page.tsx:65` — Empty alt

### Favicon:

- Layout references `/favicon.ico` but file exists at `src/app/favicon.ico` (Next.js App Router convention — ✅ correct)

### OG Image:

- Plain logo used instead of designed 1200x630 graphic
- No page-specific OG images

### Image Formats:

- All images are PNG or JPEG
- No WebP or AVIF usage (Next.js auto-converts but originals are large)
- Press release images should be converted to WebP

### Duplicate Images:

- Logo exists in 7+ locations across the project
- `/public/wp-content/uploads/2017/07/logo.png` — Legacy path, likely unused

---

## Page-by-Page Summary

| Page                               | SEO Score | Priority Issues                                        |
| ---------------------------------- | --------- | ------------------------------------------------------ |
| `/` (homepage)                     | 65/100    | No canonical, no structured data, broken internal link |
| `/about`                           | 25/100    | No metadata, no h1, no structured data                 |
| `/products`                        | 10/100    | No metadata, Coming Soon stub, no h1                   |
| `/solutions`                       | 55/100    | No Twitter card, no canonical                          |
| `/solutions/human-bound-authority` | 60/100    | No canonical, no structured data                       |
| `/solutions/ondemandid`            | 60/100    | No canonical, no structured data                       |
| `/solutions/docuid`                | 50/100    | Duplicate h1, no canonical, no structured data         |
| `/why-ivalt`                       | 20/100    | No metadata, no h1, no structured data                 |
| `/recent-updates`                  | 55/100    | No h1, no Twitter card                                 |
| `/recent-updates/*` (articles)     | 70/100    | No structured data, missing Article schema             |
| `/research`                        | 10/100    | No metadata, Coming Soon stub                          |
| `/contact`                         | 25/100    | No metadata, no h1, FAQ section lacks schema           |
| `/api-request`                     | 50/100    | No h1, no Twitter card                                 |
| `/openvpn`                         | 55/100    | Generic h1, no canonical, no structured data           |
| `/privacy-policy`                  | 20/100    | No metadata, heading hierarchy broken                  |
| `/terms-and-conditions`            | 20/100    | No metadata, minimal content                           |

---

## Competitive Context (SaaS / Identity Verification)

The site is positioned in the cybersecurity / identity verification space. Key competitors typically have:

- Comprehensive resource centers / blogs
- Customer case studies and testimonials
- Technical documentation / API references
- Structured data on all pages
- Multiple content formats (video, whitepapers, webinars)

iVALT has strong product differentiation (5FA, biometric, DocuID) but the website doesn't fully communicate this advantage for search engines.

---

_Report generated from local codebase analysis. Full live testing (CWV, crawl errors, indexation) requires public deployment._
