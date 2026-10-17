# Abdallah El Nady Portfolio

React + Vite portfolio featuring:
- English/Arabic language toggle and dark/light theme
- Time-based greeting shown before the name
- Animated typing between Front-End Developer and Software Tester
- Personal portrait and Pixel Art mini-game character
- Desktop navbar with six section links and a matching hamburger menu
- Animated wave-shaped navbar background
- Hamburger-only floating control while scrolling; the full navbar scrolls away
- Contact form with optional EmailJS setup and a visible warning when email is not configured

## Run locally
1. Install Node.js LTS.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and open the URL shown in the terminal.

## Build for deployment
- Build command: `npm run build`
- Output directory: `dist`

## Optional email setup
Copy `.env.example` to `.env.local` and configure `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`, or set `VITE_CONTACT_EMAIL` as a mailto fallback.

Before publishing, replace placeholder social URLs in `src/main.jsx` with your real profile URLs.
