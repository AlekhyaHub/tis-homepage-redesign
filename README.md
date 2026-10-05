# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo
- **Live URL:** YOUR-LIVE-URL
- **Repository:** https://github.com/AlekhyaHub/tis-homepage-redesign

## 🛠️ Tech Stack
- **Framework:** React 19 with Vite
- **Styling:** Tailwind CSS v4 (brand colors and fonts defined as theme tokens)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## ✨ Standout Features Implemented
1. **Animated Dark/Light Theme Switcher:** A custom `useTheme` hook toggles the `dark` class on `<html>`, saves the choice in `localStorage`, and falls back to the system preference on first visit. The switch knob is animated with Framer Motion (`layout` + spring) and exposes `role="switch"` and `aria-checked` for accessibility.
2. **Scroll Progress Bar:** A fixed gold bar at the top of the viewport driven by Framer Motion's `useScroll` and `useSpring`. It animates `scaleX` (a GPU-friendly transform), so it stays smooth without triggering layout.

## 📦 Getting Started Locally

1. **Clone the repository:**
```bash
   git clone https://github.com/AlekhyaHub/tis-homepage-redesign.git
   cd tis-homepage-redesign
```
2. **Install dependencies:**
```bash
   npm install
```
3. **Run the development server:**
```bash
   npm run dev
```
4. Open http://localhost:5173 in your browser.

Other scripts: `npm run build` (production build) and `npm run lint` (ESLint).

## 🧱 Component Architecture Overview
- `components/ui/` - Reusable primitives (`Button`, `Card`, `SectionHeading`)
- `components/layout/` - `Navbar` (with mobile menu) and `Footer`
- `components/sections/` - Page sections (`HeroSection`, `StatsSection`, `SportsSection`, `EnquirySection`)
- `components/animation/` - `ScrollProgress` and `ThemeToggle`
- `hooks/` - `useTheme`
- `data/` - Static content (navigation, contact details, stats, sports) kept separate from UI

## 🎨 Brand Identity Retained
- Crimson `#b90124`, teal `#60bab1` and gold `#c09d59` taken from tis.edu.in
- Copy, contact details, logo and photos come from tis.edu.in
- The original site uses licensed fonts (TT Chocolates, PF DIN). Open-source alternatives are used instead: Poppins, Barlow and Playfair Display.

## 📝 Notes
- The enquiry form validates input in the browser and shows a confirmation message. It does not send data to a server.
- Images are sourced from tis.edu.in for this assessment.