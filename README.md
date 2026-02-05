# 🚗 Luxury Car Rental

> A modern, feature-rich car rental application built with Next.js 15 and React 19

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Highlights](#key-highlights)
- [Development](#development)

## 🎯 Overview

A polished, production-ready car rental platform designed for excellent user experience, clean architecture, and maintainability. This application goes beyond the basics with thoughtful implementation details that make everyday use smooth and enjoyable.

## ✨ Features

### 🗓️ Smart Booking Calendar
- **Native-feeling calendar** powered by DayPicker v9
- Monday-start weeks with custom weekday labels (SUN…SAT)
- Locale-aware date formatting and guarded input behavior
- Robust popover with keyboard navigation (opens on focus/click, closes on outside click and Escape)
- Focus trap for accessibility

### 🔍 Advanced Search & Filtering
- Real-time car search with multiple filters
- Mileage preset buttons (2000, 4000, 6000 km)
- Price range filtering
- Brand and model selection
- Persistent filter state

### ❤️ Favorites System
- Add/remove cars from favorites
- Lightweight state management with Zustand
- Persistent across sessions

### 🎨 Modern UI/UX
- Clean, composable component system
- Responsive design for all devices
- Sprite-based icons (no heavy icon libraries)
- Smooth animations and micro-interactions
- Reusable \`Section\` and \`Container\` primitives

### ♿ Accessibility First
- Semantic HTML with proper landmarks
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Visual cues for interactive states

## 🛠️ Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### State Management & Data Fetching
- **[TanStack Query](https://tanstack.com/query)** - Server state management, caching, and data synchronization
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight client state (favorites)
- **[Axios](https://axios-http.com/)** - HTTP client

### UI & Styling
- **[React Day Picker v9](https://react-day-picker.js.org/)** - Date selection
- **[date-fns](https://date-fns.org/)** - Date utilities
- **CSS Modules** - Scoped styling with design tokens
- **SVG Sprites** - Optimized icons

### Developer Experience
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Turbopack](https://turbo.build/)** - Fast bundler

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Fedkon96/auto.git
cd auto
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📁 Project Structure

\`\`\`
auto/
├── app/                    # Next.js App Router pages
│   ├── catalog/           # Car catalog page and dynamic routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Calendar/          # Date picker component
│   ├── CarsList/          # Car listing and cards
│   ├── Container/         # Layout container
│   ├── Header/            # Site header
│   ├── Icon/              # SVG icon component
│   ├── Search/            # Search and filter components
│   ├── Section/           # Section wrapper
│   └── TanStackProvider/  # Query provider setup
├── lib/                   # Utilities and shared logic
│   ├── store/             # Zustand stores
│   ├── api.ts             # API client
│   ├── filter.ts          # Filter utilities
│   ├── format.ts          # Formatting helpers
│   └── Providers.tsx      # App-level providers
├── public/                # Static assets
│   ├── icons.svg          # SVG sprite
│   └── img/               # Images
├── types/                 # TypeScript type definitions
└── tsconfig.json          # TypeScript configuration
\`\`\`

## 💡 Key Highlights

### Clean Architecture
- **Separation of concerns** - Clear server/client component split
- **Reusable components** - DRY principle with scoped styles (CSS Modules)
- **Type safety** - Fully typed with TypeScript
- **Feature-based organization** - Easy to navigate and maintain

### Performance Optimizations
- **Lean bundle** - Removed heavy dependencies (react-icons, react-calendar)
- **TanStack Query** - Smart caching and request deduplication
- **SVG sprites** - Optimized icon delivery
- **CSS Modules** - No global style conflicts
- **Turbopack** - Fast development builds

### Developer Experience
- **Modern patterns** - Next.js 15 App Router with proper async handling
- **Actions-based forms** - Clean booking flow without complex client handlers
- **Design tokens** - CSS variables in \`:root\` for consistent theming
- **Minimal global CSS** - Components own their styles

### Delightful Details
- One-tap reset with subtle spin animation
- Smart price and mileage formatting
- Address shortening for compact cards
- Calendar icon color changes on hover/focus
- Smooth transitions and interactions

## 🔧 Development

### Available Scripts

- \`npm run dev\` - Start development server with Turbopack
- \`npm run build\` - Build for production with Turbopack
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint

### Code Style

This project uses:
- **ESLint** for code quality
- **Prettier** for code formatting
- **TypeScript** for type checking

## 📝 License

This project is private and not licensed for public use.

---

Made with ❤️ using Next.js and React
