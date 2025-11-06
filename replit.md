# AdvaTech Africa (ATA) - DOOH Advertising Platform

## Project Overview

AdvaTech Africa (ATA) is a next-generation Digital Out-of-Home (DOOH) advertising platform designed to make outdoor advertising accessible, automated, and affordable across Africa. The platform connects advertisers with digital screen owners through an intelligent Real-Time Bidding (RTB) system.

## Current Status

**MVP Complete** - All core features implemented and functional
- Multi-page marketing website with 8 pages
- Contact form submission system
- Newsletter subscription system
- Responsive design with futuristic tech aesthetic
- Backend API with in-memory storage

## Architecture

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS + Shadcn UI components
- **Fonts**: Poppins (headings), Inter (body text)
- **Color Scheme**: 
  - Primary: Electric Purple (#7B3FE4 / HSL 265 68% 56%)
  - Background (Dark): Midnight Blue (#141414 / HSL 0 0% 8%)
  - Accent: Neon Cyan (#00E5FF / HSL 190 100% 50%)

### Backend
- **Framework**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage)
- **Validation**: Zod schemas
- **API Endpoints**:
  - `POST /api/contact` - Submit contact form
  - `POST /api/newsletter` - Subscribe to newsletter
  - `GET /api/contacts` - Get all contact submissions
  - `GET /api/newsletters` - Get all newsletter subscriptions

### Data Models
- **Contact**: name, email, company (optional), role, message
- **Newsletter**: email (unique)

## Pages

1. **Home** (`/`) - Hero section, How It Works, Why Choose ATA, Trusted By, CTAs
2. **For Advertisers** (`/advertisers`) - Features, use cases, pricing benefits
3. **For Media Owners** (`/media-owners`) - Benefits, how it works, earning potential
4. **Platform** (`/platform`) - Technology stack, RTB engine, integrations
5. **About** (`/about`) - Mission, vision, core values, team
6. **Blog** (`/blog`) - Industry insights and articles
7. **Contact** (`/contact`) - Contact form with validation
8. **Login** (`/login`) - Dual login (Advertiser/Media Owner)

## Key Features

### Completed
- ✅ Responsive navigation with mobile menu
- ✅ Multi-page routing system
- ✅ Contact form with backend integration
- ✅ Newsletter subscription with duplicate prevention
- ✅ Beautiful loading states and error handling
- ✅ Footer with social links and newsletter signup
- ✅ Gradient backgrounds and tech-inspired design
- ✅ All pages with proper SEO metadata

### Future Enhancements
- Functional advertiser dashboard with campaign management
- Media owner dashboard with earnings tracking
- Real-time bidding simulation
- Email service integration for notifications
- User authentication system
- Admin panel for content management

## Development

### Running the Project
```bash
npm run dev
```

The application runs on a single port with:
- Frontend: Vite development server
- Backend: Express API server

### File Structure
```
client/
  src/
    components/
      ui/ - Shadcn UI components
      Navigation.tsx - Main navigation header
      Footer.tsx - Footer with newsletter
    pages/
      Home.tsx
      ForAdvertisers.tsx
      ForMediaOwners.tsx
      Platform.tsx
      About.tsx
      Blog.tsx
      Contact.tsx
      Login.tsx
    lib/
      queryClient.ts - React Query setup
    App.tsx - Main app with routing
    index.css - Global styles and design tokens

server/
  routes.ts - API endpoint definitions
  storage.ts - In-memory storage implementation

shared/
  schema.ts - Data models and validation schemas
```

## Design System

### Typography
- Headings: Poppins (font-heading)
- Body: Inter (font-sans)
- Hierarchy: 6 levels from hero (3.5-4.5rem) to small (0.875rem)

### Spacing
- Small: 4-6px
- Medium: 12-16px
- Large: 20-32px
- Sections: 80-128px (py-20 to py-32)

### Components
- Cards with subtle borders and hover elevation
- Buttons with primary, outline, and ghost variants
- Forms with inline validation
- Grid layouts (2, 3, 4 columns responsive)
- Gradient backgrounds for hero sections

## User Flows

### Advertiser Journey
1. Land on homepage → Learn about platform
2. Navigate to "For Advertisers" page → See features
3. Click "Start Advertising" → Contact form
4. Submit inquiry → Confirmation toast
5. Future: Login → Dashboard → Create campaign

### Media Owner Journey
1. Land on homepage → Learn about platform
2. Navigate to "For Media Owners" page → See benefits
3. Click "Register Your Screen" → Contact form
4. Submit inquiry → Confirmation toast
5. Future: Login → Dashboard → Monitor earnings

### Newsletter Subscription
1. Any page → Scroll to footer
2. Enter email → Click subscribe
3. Backend validates → Prevents duplicates
4. Success toast with confirmation

## Recent Changes (Jan 2025)

- Implemented complete frontend with all 8 pages
- Set up backend API with contact and newsletter endpoints
- Integrated forms with backend using React Query
- Added proper error handling and loading states
- Configured design tokens matching ATA brand colors
- Created responsive navigation and footer components

## Tech Stack Details

**Frontend:**
- React 18 with TypeScript
- Wouter (routing)
- React Hook Form + Zod (forms/validation)
- TanStack Query (data fetching)
- Tailwind CSS + Shadcn UI
- Lucide Icons + React Icons

**Backend:**
- Express.js with TypeScript
- Drizzle ORM (schema definitions)
- Zod (runtime validation)
- In-memory storage (development)

**Development Tools:**
- Vite (build tool)
- TypeScript (type safety)
- ESBuild (bundling)
