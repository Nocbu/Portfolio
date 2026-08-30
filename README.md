# Kishan Baghel — Developer Portfolio

A modern, high-performance developer portfolio built with Next.js App Router, Tailwind CSS, Motion, Frosted Glassmorphism, and a dynamic Rainy Window atmospheric background with Dark/Light mode support.

---

## 🚀 Features

- **Atmospheric Rainy Window**: High-resolution rainy window background with dynamic canvas rain streaks and trickling water droplets.
- **Dark / Light Theme System**:
  - **Dark Mode**: Nighttime city view (`back.jpg`) with dark frosted glass and glowing accents.
  - **Light Mode**: Daytime window view (`day1.png`) with white frosted glass and high-contrast dark typography.
  - **Smooth Crossfade Transition**: Cinematic 500ms–700ms transition between themes.
  - **Theme Persistence**: Preserved across reloads without theme flashing or hydration mismatch.
- **Procedural Ambient Rain Audio**: Built-in 0KB Web Audio API rain sound synthesizer with header toggle button.
- **Responsive & Mobile Ready**: Fully tested with resilient viewport observer fallbacks on mobile and desktop.
- **Accessible & SEO Optimized**: Open Graph, Twitter cards, semantic tags, and full keyboard/touch navigation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **UI & Styling**: React 19, Tailwind CSS v4
- **Animations**: Motion (`motion/react`), HTML5 Canvas, CSS Animations
- **Fonts**: JetBrains Mono via `next/font/google`
- **Language**: TypeScript

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The development server will bind to `0.0.0.0:3000`. You can access it:
- On your development machine: [http://localhost:3000](http://localhost:3000)
- On your phone / other LAN devices on the same Wi-Fi: `http://<YOUR_PC_IP>:3000` (e.g. `http://192.168.1.15:3000`)

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://netlify.com).
2. Set Build command to `npm run build` and publish directory to `.next`.
3. Deploy.

---

## 📁 Project Structure

```text
├── app/                  # Next.js App Router (layout, page, global styles)
├── components/
│   ├── sections/         # Hero, About, Projects, Experience, Contact
│   └── ui/               # Backdrop, Reveal, TypewriterHeading, ThemeToggle, etc.
├── data/                 # Projects, experience, and skills data
├── lib/                  # Site config, theme context, audio engine
└── public/
    └── uploads/          # Static images, background photos, resume
```
