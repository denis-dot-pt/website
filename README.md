# Denis.pt - Software Development Company Website

A modern, multilingual landing website for Denis.pt, a software development company based in Madeira, Portugal.

## 🚀 Features

- **Multilingual Support**: English, Portuguese, and German
- **Modern Design**: Dark theme with beautiful animations
- **Responsive**: Fully responsive across all devices
- **Performance**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Meta tags and semantic HTML
- **Animated**: Smooth animations with Framer Motion

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **i18n**: next-intl

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🌍 Languages

The website supports three languages:

- 🇬🇧 English (`/en`)
- 🇵🇹 Portuguese (`/pt`)
- 🇩🇪 German (`/de`)

Language files are located in the `messages/` directory.

## 📁 Project Structure

```
├── messages/           # Translation files
│   ├── en.json
│   ├── pt.json
│   └── de.json
├── src/
│   ├── app/
│   │   ├── [locale]/  # Locale-based routing
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── globals.css
│   ├── components/    # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── i18n.ts        # i18n configuration
│   └── middleware.ts  # Next.js middleware for locale routing
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Colors

The primary color scheme can be modified in `tailwind.config.ts`:

- `primary`: Green gradient (#22c55e)
- `accent`: Purple gradient (#d946ef)
- `dark`: Dark background tones

### Fonts

The website uses:
- **Cabinet Grotesk** - Display headings
- **Satoshi** - Body text
- **JetBrains Mono** - Code/monospace

## 📧 Contact

- **Company**: Denis.pt, Sociedade Unipessoal, Lda
- **Address**: Estrada Monumental, Nº 277, Bloco 5, 1º E, 9000-250 Funchal, Madeira
- **CAE**: 62010 (Software Programming)

## 📄 License

© 2024 Denis.pt. All rights reserved.

