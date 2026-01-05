# Quest for Objective Reality - Lovable.dev Integration Guide

An interactive flowchart application that guides users through the process of evaluating claims, beliefs, and information using critical thinking, the scientific method, and Bayesian reasoning.

## 🚀 Quick Start for Lovable.dev

### Step 1: Create a New Project
1. Go to [lovable.dev](https://lovable.dev)
2. Create a new React + Vite + Tailwind project

### Step 2: Install Required Dependencies

Copy and paste this into your Lovable.dev terminal or add to package.json:

```bash
npm install @dagrejs/dagre @xyflow/react framer-motion lucide-react wouter next-themes sonner class-variance-authority clsx tailwind-merge
```

**Full dependency list:**
```json
{
  "@dagrejs/dagre": "^1.1.8",
  "@xyflow/react": "^12.10.0",
  "framer-motion": "^12.23.22",
  "lucide-react": "^0.453.0",
  "next-themes": "^0.4.6",
  "wouter": "^3.3.5",
  "sonner": "^2.0.7",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1"
}
```

### Step 3: Copy Files

Copy the following folders/files from this package to your Lovable.dev project:

```
src/
├── components/
│   ├── BayesTheorem.tsx          # Bayes calculator component
│   ├── CustomFlowchartOverview.tsx # SVG flowchart overview
│   ├── FlowchartCard.tsx         # Main flowchart card display
│   ├── LanguageSwitcher.tsx      # Language selector (EN/DE/FR/ES)
│   ├── StarField.tsx             # Animated background
│   └── ui/                       # shadcn/ui components (copy all)
├── contexts/
│   └── LanguageContext.tsx       # Multi-language support
├── data/
│   └── flowchartData.ts          # All flowchart nodes and translations
├── pages/
│   ├── Home.tsx                  # Landing page
│   └── Quest.tsx                 # Main quest page
├── lib/
│   └── utils.ts                  # Utility functions
├── App.tsx                       # Main app with routing
├── index.css                     # Global styles and Tailwind config
└── main.tsx                      # Entry point
```

### Step 4: Update index.html

Add the Google Font in your `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Step 5: Configure Tailwind

Make sure your Tailwind config includes the custom theme. The styles are in `src/index.css`.

## 📁 File Structure

```
src/
├── components/
│   ├── BayesTheorem.tsx          # Interactive Bayes theorem calculator
│   ├── CustomFlowchartOverview.tsx # Custom SVG-based flowchart map
│   ├── FlowchartCard.tsx         # Card displaying current node
│   ├── FlowchartOverview.tsx     # Wrapper for flowchart overview
│   ├── LanguageSwitcher.tsx      # 4-language selector
│   ├── ReactFlowOverview.tsx     # React Flow based overview (alternative)
│   ├── StarField.tsx             # Animated star background
│   └── ui/                       # shadcn/ui component library
├── contexts/
│   └── LanguageContext.tsx       # i18n context with localStorage persistence
├── data/
│   └── flowchartData.ts          # 62 nodes, 63 connections, 4 languages
├── pages/
│   ├── Home.tsx                  # Landing page with Matrix-style intro
│   └── Quest.tsx                 # Main interactive quest experience
├── lib/
│   └── utils.ts                  # cn() utility for Tailwind classes
├── App.tsx                       # Router and theme provider setup
├── index.css                     # Global styles, CSS variables, animations
└── main.tsx                      # React entry point
```

## 🌍 Supported Languages

- 🇺🇸 English
- 🇩🇪 Deutsch (German)
- 🇫🇷 Français (French)
- 🇪🇸 Español (Spanish)

Language preference is automatically saved to localStorage.

## ✨ Features

- **62 Interactive Nodes** - Complete truth-seeking flowchart
- **Bayes Theorem Calculator** - With step-by-step guidance
- **4 Languages** - Full localization support
- **Flowchart Overview** - Zoomable map with "You Are Here" indicator
- **YouTube Resources** - Links to 3Blue1Brown and Veritasium videos
- **Animated Background** - Matrix-style star field
- **Responsive Design** - Works on mobile and desktop
- **Dark Theme** - Space-themed aesthetic

## 🎨 Customization

### Colors
Edit the CSS variables in `src/index.css`:
- Primary colors (green accent)
- Background gradients
- Card styling

### Flowchart Content
Edit `src/data/flowchartData.ts` to:
- Add/modify nodes
- Change translations
- Update tips and examples

### Styling
The project uses Tailwind CSS with custom utilities defined in `index.css`.

## 🔗 External Links

The app links to:
- [objective-reality.info](https://www.objective-reality.info) - Main website
- YouTube videos on Bayes Theorem (3Blue1Brown, Veritasium)

## 📝 Notes for Lovable.dev

1. **shadcn/ui Components**: The `ui/` folder contains pre-built components. Lovable.dev may have its own - you can use either.

2. **Routing**: Uses `wouter` for client-side routing. Lovable.dev might use React Router - adjust `App.tsx` accordingly.

3. **Theme Provider**: Uses `next-themes` for dark mode. Already configured for dark theme by default.

4. **Animations**: Uses `framer-motion` for smooth transitions.

## 🐛 Troubleshooting

**"Module not found" errors:**
- Make sure all dependencies are installed
- Check import paths match your project structure

**Styling issues:**
- Ensure `index.css` is imported in `main.tsx`
- Check Tailwind is properly configured

**Flowchart not rendering:**
- Verify `@dagrejs/dagre` is installed
- Check browser console for errors

## 📄 License

This project is provided for integration with objective-reality.info.

---

Made with ❤️ for truth-seekers everywhere
