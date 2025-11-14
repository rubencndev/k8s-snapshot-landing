# K8s Snapshot Landing Page Design Guidelines

## Design Approach
**Reference-Based with Technical Credibility**: Drawing from Stripe's trust-building patterns, Linear's technical aesthetic, and Vercel's developer-focused design. Focus on clarity, professionalism, and demonstrating technical sophistication without complexity.

## Typography
- **Primary Font**: Inter (Google Fonts) - clean, technical, highly legible
- **Hierarchy**: 
  - Hero headline: text-5xl/text-6xl, font-bold
  - Section headlines: text-3xl/text-4xl, font-semibold
  - Feature titles: text-xl, font-semibold
  - Body: text-base/text-lg, font-normal
  - Technical callouts: font-mono for code references

## Layout System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm (e.g., p-8, gap-12, my-20)
- Container: max-w-7xl with px-6
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 between major elements, gap-4 within components

## Component Library

### Hero Section
- Full-width background image showing Kubernetes dashboard/cluster visualization with blur overlay
- Centered content: headline + subheadline + dual CTA (primary + secondary)
- Trust indicator below CTAs: "Trusted by 500+ DevOps teams" with company logos strip
- CTAs use backdrop-blur-xl with semi-transparent backgrounds

### Zero Access Required Section (NEW - Priority)
- Two-column layout: left side feature explanation, right side visual trust diagram
- Security badge/shield icon (Heroicons: shield-check)
- Headline: "Zero Access Required" (text-3xl)
- 3-4 bullet points with checkmark icons explaining: no credentials stored, read-only analysis, ephemeral access, SOC2 compliant
- Right column: Diagram showing K8s cluster → snapshot → analysis flow with security barriers illustrated
- Background: subtle gradient from bg-slate-50 to white
- Include customer quote from security-conscious company

### Features Grid
- Three-column grid (single column mobile)
- Each card: Icon (top), title, 2-sentence description, "Learn more" link
- Features: Automated Diagnostics, Historical Analysis, Team Collaboration, Compliance Ready
- Icons: Heroicons outline style
- Cards with subtle border, hover lift effect

### How It Works
- Timeline/step layout (horizontal on desktop, vertical mobile)
- 4 steps with numbers, icons, titles, descriptions
- Connect steps with dotted lines
- Each step card elevated with shadow

### Trust Section
- Customer logos grid (4 columns desktop, 2 mobile)
- Testimonial carousel: single large testimonial card with photo, quote, name, title, company
- Security badges: SOC2, GDPR, ISO certifications displayed as trust badges

### Pricing Tiers (if applicable)
- Three-column comparison cards
- Clear feature differentiation
- Highlight recommended tier with border accent

### Footer
- Three-column layout: Product links, Resources, Company
- Newsletter signup: inline form with email input + subscribe button
- Social links (GitHub, Twitter, LinkedIn)
- Bottom bar: Copyright, Privacy Policy, Terms

## Images
1. **Hero Background**: Large hero image (100% width, ~60vh height) - Kubernetes cluster dashboard screenshot or abstract tech visualization showing nodes/pods. Apply dark overlay (bg-black/40) for text readability
2. **Zero Access Diagram**: Custom diagram/illustration showing security architecture - cluster icon → snapshot process → isolated analysis environment with security shield symbols between each stage
3. **Customer Logos**: 8-12 recognizable tech company logos in grayscale, arranged in responsive grid
4. **Testimonial Photos**: Headshots of 3-4 DevOps/Engineering leaders (circular crop, 80px diameter)
5. **Feature Icons**: Use Heroicons exclusively - no custom images needed

## Key Design Principles
- **Technical Credibility**: Use subtle technical patterns (grid backgrounds, monospace accents) without overwhelming
- **Trust Building**: Prominent security indicators, customer proof, compliance badges throughout
- **Clarity Over Creativity**: Clean layouts, generous whitespace, clear hierarchy
- **Professional Restraint**: Minimal animations - only subtle hover states and smooth scrolls