# AdvaTech Africa (ATA) - DOOH Advertising Platform

A next-generation Digital Out-of-Home (DOOH) advertising platform designed to revolutionize outdoor advertising across Africa. Built with modern web technologies and a beautiful, accessible design.

![ATA Logo](attached_assets/ATA-(LOGO)%203_1762443724542.png)

## 🌟 Features

### Marketing Website (MVP Complete)
- **Homepage** - Stunning hero section with African cityscape, How It Works timeline, Why Choose ATA features
- **For Advertisers** - RTB features, targeting capabilities, campaign use cases
- **For Media Owners** - Monetization benefits, simple onboarding process
- **Platform/Technology** - RTB engine explanation, integrations showcase
- **About Us** - Mission, vision, core values, team section
- **Blog/Insights** - Industry articles and DOOH trends
- **Contact** - Functional contact form with backend integration
- **Login** - Dual-tab interface for Advertisers and Media Owners

### Backend API
- Contact form submission endpoint
- Newsletter subscription with duplicate prevention
- In-memory storage (ready for database migration)
- Full Zod validation

### Design System
- **Brand Colors** (derived from logo gradient):
  - Primary (Light): `hsl(270, 60%, 55%)` - Medium lavender with white text
  - Primary (Dark): `hsl(270, 60%, 45%)` - Darker lavender with white text
  - Accent: `hsl(160, 90%, 55%)` - Neon green
  - Secondary: `hsl(175, 70%, 60%)` - Teal
- **Typography**: Poppins (headings), Inter (body text)
- **WCAG AA Compliant** - All colors meet accessibility standards
- **Dark Mode Support** - Full theme switching capability

## 🚀 Running Locally

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn**

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ata-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   SESSION_SECRET=your-secret-key-here
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5000`

The application runs a single Express server that serves both:
- **Frontend**: Vite development server (React + TypeScript)
- **Backend**: Express API routes

## 📁 Project Structure

```
├── client/
│   └── src/
│       ├── components/     # Reusable UI components
│       │   ├── ui/        # Shadcn UI components
│       │   ├── Navigation.tsx
│       │   └── Footer.tsx
│       ├── pages/         # Page components
│       │   ├── Home.tsx
│       │   ├── ForAdvertisers.tsx
│       │   ├── ForMediaOwners.tsx
│       │   ├── Platform.tsx
│       │   ├── About.tsx
│       │   ├── Blog.tsx
│       │   ├── Contact.tsx
│       │   └── Login.tsx
│       ├── lib/
│       │   └── queryClient.ts  # React Query setup
│       ├── App.tsx        # Main app with routing
│       └── index.css      # Global styles & design tokens
├── server/
│   ├── routes.ts          # API endpoint definitions
│   ├── storage.ts         # In-memory storage implementation
│   ├── vite.ts           # Vite server integration
│   └── index.ts          # Express server setup
├── shared/
│   └── schema.ts         # Shared data models & validation
├── attached_assets/       # Images and media files
├── design_guidelines.md   # Complete design system documentation
├── replit.md             # Project overview and architecture
└── package.json
```

## 🔧 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Wouter** - Lightweight routing
- **TanStack Query** - Server state management
- **React Hook Form** + Zod - Form handling & validation
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Beautiful component library
- **Lucide Icons** - Icon system
- **Vite** - Build tool

### Backend
- **Express.js** - Web server
- **TypeScript** - Type safety
- **Zod** - Runtime validation
- **Drizzle ORM** - Type-safe database schema (configured)

### Development Tools
- **ESBuild** - Fast bundling
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

## 📡 API Endpoints

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "company": "string (optional)",
  "role": "string",
  "message": "string"
}
```

### Newsletter Subscription
```
POST /api/newsletter
Content-Type: application/json

{
  "email": "string"
}
```

### Get All Contacts (Development)
```
GET /api/contacts
```

### Get All Newsletter Subscribers (Development)
```
GET /api/newsletters
```

## 🎨 Design Guidelines

Refer to `design_guidelines.md` for comprehensive design system documentation including:
- Complete color palette with accessibility notes
- Typography hierarchy
- Component patterns
- Layout guidelines
- Dark mode implementation
- Animation principles

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SESSION_SECRET` | Secret key for session management | Yes |
| `NODE_ENV` | Environment (development/production) | Yes |
| `DATABASE_URL` | PostgreSQL connection string | No (future) |

## 🧪 Testing

The project uses automated end-to-end testing with Playwright:

```bash
# Run tests (when implemented)
npm test
```

## 📦 Building for Production

```bash
# Build the application
npm run build

# The built files will be in the dist/ directory
```

## 🚢 Deployment on Replit

This project is optimized for deployment on Replit:

1. **Automatic Deployment** - Simply click "Deploy" in your Replit workspace
2. **Environment Variables** - Set `SESSION_SECRET` in the Secrets pane
3. **Custom Domains** - Available on paid Replit plans
4. **Always-On** - Keeps your app running 24/7

For more information, visit [Replit Deployments Documentation](https://docs.replit.com/hosting/deployments/about-deployments)

## 🗺️ Roadmap

### Phase 1: MVP (✅ Complete)
- [x] Marketing website with all pages
- [x] Contact form integration
- [x] Newsletter subscription
- [x] Responsive design
- [x] Dark mode support
- [x] Logo integration & brand colors

### Phase 2: Core Platform Features (In Progress)
- [ ] User authentication system
- [ ] Advertiser dashboard
- [ ] Media owner dashboard
- [ ] Campaign management
- [ ] Creative upload system
- [ ] Analytics & reporting

### Phase 3: Advanced Features
- [ ] Real-time bidding simulation
- [ ] Email service integration
- [ ] Admin panel
- [ ] Database migration from in-memory to PostgreSQL
- [ ] Payment processing
- [ ] Advanced analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential.

## 📧 Contact

For questions or support, please use the contact form on our website or reach out to the development team.

## 🙏 Acknowledgments

- Design inspired by modern SaaS platforms (Stripe, Linear, Vercel)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts: [Poppins](https://fonts.google.com/specimen/Poppins) & [Inter](https://fonts.google.com/specimen/Inter)

---

**Built with ❤️ for Africa's advertising future**
