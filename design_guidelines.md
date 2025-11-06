# ATA (AdvaTech Africa) Design Guidelines

## Design Approach

**Hybrid Approach**: Drawing inspiration from modern SaaS platforms (Stripe's restraint, Linear's typography, Vercel's spatial dynamics) combined with futuristic tech aesthetics appropriate for a DOOH advertising platform.

## Typography System

**Font Stack**: Poppins (headings) and Inter (body text)

**Hierarchy**:
- Hero Headlines: 3.5rem - 4.5rem, font-weight: 700, letter-spacing: -0.02em
- Page Headlines: 2.5rem - 3rem, font-weight: 700
- Section Headers: 1.875rem - 2.25rem, font-weight: 600
- Subheadings: 1.25rem - 1.5rem, font-weight: 500
- Body Text: 1rem - 1.125rem, font-weight: 400, line-height: 1.7
- Small Text/Labels: 0.875rem, font-weight: 500

## Layout & Spacing System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 consistently
- Component padding: p-6 to p-8
- Section spacing: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Card gaps: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8 for content flow

**Container Strategy**:
- Max-width containers: max-w-7xl for full sections
- Content width: max-w-6xl for text-heavy areas
- Reading width: max-w-3xl for long-form content

## Component Library

### Navigation
- Fixed header with backdrop blur
- Logo left-aligned, dual CTAs right-aligned: "Start Advertising" (primary) + "Join as Screen Owner" (secondary)
- Mobile: Hamburger menu revealing full-screen overlay

### Hero Section (Homepage)
- Large hero image: Vibrant African cityscape at night with illuminated digital billboards
- Image treatment: Subtle gradient overlay for text readability
- Height: 85vh to 90vh
- Content: Centered headline + subheadline + dual CTAs
- CTA buttons with blurred backgrounds for visibility over image

### Feature Grids
- 3-column grid on desktop (lg:grid-cols-3), 2-column on tablet (md:grid-cols-2), single column mobile
- Each card: Icon (top), headline, description, optional link
- Cards with subtle border treatment and hover elevation

### How It Works Timeline
- Horizontal 3-step process with connecting lines
- Each step: Large number indicator, headline, description
- Responsive: Stacks vertically on mobile with vertical connector

### Statistics/Trust Section
- 4-column grid for partner logos or metrics
- Equal-height containers with centered content
- Grayscale logos with hover state revealing full treatment

### Content Sections (For Advertisers/Media Owners)
- Alternating two-column layouts (image left/right)
- Benefits list with checkmark icons
- Feature cards in 2-column grid showcasing platform capabilities

### Dashboard Preview Cards
- Split layout: Left sidebar preview + main content area preview
- Use subtle shadow and border to indicate clickable components
- Show mock data visualizations (charts, tables) as static representations

### Blog/Insights
- Masonry-style or 3-column card grid
- Each article card: Featured image, category tag, headline, excerpt, read time
- Hover state with slight elevation

### Contact Form
- Two-column layout: Form (left) + contact info/map placeholder (right)
- Form fields: Full-width inputs with clear labels above
- Dropdown for role selection with custom styling
- Large textarea for message
- Submit button: Full-width on mobile, auto-width desktop

### Footer
- Multi-column layout: Company info, Quick Links, For Advertisers, For Media Owners, Social
- Newsletter signup: Inline form with email input + subscribe button
- Copyright and legal links at bottom

## Images Strategy

**Hero Section**: Large, impactful image of vibrant African cityscape at night with digital billboards - full-width, 85-90vh height

**Section Images**: 
- Platform/Technology page: Abstract tech visualizations, network diagrams, data flow illustrations
- For Advertisers: Dashboard screenshots, campaign analytics mockups
- For Media Owners: Screen network maps, revenue dashboard previews
- About Us: Team photos (if available), office/workspace imagery

**Image Treatment**: All images use subtle overlays when text appears on top; maintain aspect ratios; use lazy loading

## Unique Design Elements

**Tech-Inspired Accents**:
- Geometric grid patterns as subtle background elements
- Connecting node lines between related components
- Gradient mesh backgrounds in hero sections (not flat)
- Data visualization elements (charts, graphs) as decorative accents

**Animation Principles** (minimal):
- Scroll-triggered fade-ins for section content
- Subtle hover elevations on cards
- Number counters for statistics
- NO distracting auto-playing animations

## Page-Specific Layouts

**Homepage**: Hero (90vh) → Trust logos → How It Works → Why Choose ATA (4-column grid) → Dual CTA section

**For Advertisers**: Hero (70vh) → Key Features (3-column) → Use Cases (2-column) → Analytics Preview → CTA

**For Media Owners**: Hero (70vh) → Benefits (3-column) → How It Works (3-step) → Earnings Preview → CTA

**Platform/Technology**: Header → RTB Engine explainer → Architecture diagram section → Integrations (logo grid) → CTA

**About Us**: Mission/Vision statement → Core Values (4-column grid) → Team section (bio cards) → CTA

**Contact**: Header → Two-column (form + info) → Map embed placeholder → Social links

## Accessibility & Forms

- All form inputs: Consistent height (h-12), rounded corners (rounded-lg), clear focus states
- Label spacing: mb-2 from input
- Button heights: h-12 to h-14 for primary actions
- Touch targets: minimum 44x44px for mobile
- Contrast ratios maintained through proper spacing and borders (not relying on color alone)