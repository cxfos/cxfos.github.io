# Claude AI Agent Project Memory - cxfos.github.io

## 🎯 Project Overview
**Project Type:** Personal portfolio website for Felipe dos Santos, React Developer
**URL:** https://felipedossantos.com
**Repository:** cxfos.github.io
**License:** MIT (Felipe dos Santos, 2025)
**Primary Languages:** English and Portuguese (i18n enabled)

## 🏗️ Architecture Summary
- **Framework:** React 19.1.1 with Vite 7.1.7
- **Architecture:** Single Page Application (SPA) with functional components only
- **Styling:** Tailwind CSS 4.1.16 (CDN) + Custom CSS with theme switching
- **i18n:** react-i18next for English/Portuguese support
- **Icons:** React Icons (Feather icon set)
- **Deployment:** GitHub Pages via GitHub Actions
- **State Management:** Props drilling (no Redux/Context)

## 📁 Project Structure
```
src/
├── assets/icons/        # SVG flag icons
├── components/          # React components (.jsx files only)
├── locales/            # Translation files (en.json, pt.json)
├── styles/             # CSS files (theme & responsive)
├── App.jsx             # Root component
├── i18n.js             # i18n configuration
└── main.jsx            # Entry point
```

## 📋 MANDATORY AI AGENT CONTRIBUTION RULES

### 1. Component Development Rules
- **ONLY use functional components** with React hooks - NO class components
- **Use .jsx extension** for all React components
- **Component naming:** PascalCase (e.g., `Header.jsx`, `ThemeSwitcher.jsx`)
- **Location:** All components go in `src/components/`
- **Structure template:**
```javascript
import React from 'react';
import { useTranslation } from 'react-i18next';

const ComponentName = ({ prop1, prop2 }) => {
  const { t } = useTranslation();

  return (
    <section id="component-name">
      {/* Component content */}
    </section>
  );
};

export default ComponentName;
```

### 2. Styling Rules
- **Primary method:** Tailwind CSS utility classes
- **Theme styles:** `src/styles/dark-theme.css` or `light-theme.css`
- **Responsive styles:** `src/styles/responsive.css`
- **Theme classes:** `body.dark` and `body.light`
- **Approach:** Mobile-first responsive design
- **File naming:** kebab-case for CSS files

### 3. Internationalization Rules
- **ALL text MUST use** translation keys: `t('translation.key')`
- **NEVER hardcode** user-facing text
- **Update BOTH** `src/locales/en.json` AND `src/locales/pt.json`
- **Key format:** Dot notation (e.g., `"header.navigation.home"`)
- **Maintain parity** between English and Portuguese content

### 4. State Management Rules
- **Pattern:** Props drilling from App.jsx
- **NO Redux or Context** - use local state with useState
- **Persistence:** localStorage for theme and language preferences
- **Initialization:** useEffect with empty dependency array

### 5. Asset and Icon Rules
- **Icons:** Use React Icons library (Feather icons preferred)
- **Common icons:** FiMenu, FiX, FiGlobe, FiSun, FiMoon
- **Static assets:** Store in `src/assets/` directory
- **SVG icons:** Place in `src/assets/icons/`
- **Naming:** lowercase with hyphens (e.g., `brazil.svg`)

### 6. Git Workflow Rules
- **Main branch:** `main` (NOT master)
- **Deployment branch:** `gh-pages` (auto-managed)
- **PR workflow:** Create PRs against `main`
- **Commit style:** Descriptive or conventional commits
- **Testing:** Run `npm run dev` and `npm run build` before committing
- **Linting:** Run `npm run lint` and fix all errors

### 7. Build and Deployment Rules
- **Node.js version:** 22.20.0 (as per GitHub Actions)
- **Package manager:** npm ONLY (not yarn or pnpm)
- **Build directory:** `dist/`
- **Base path:** Keep as `/` in vite.config.js
- **Domain:** Maintain CNAME file with `felipedossantos.com`
- **CI/CD:** Don't modify `.github/workflows/deploy.yml` unless fixing issues

### 8. Code Quality Rules
- **Linting:** Must pass ESLint (`npm run lint`)
- **No unused variables** except uppercase constants
- **Follow React Hooks rules** (enforced by ESLint)
- **React Refresh compatibility** for Hot Module Replacement
- **No TypeScript** - project uses .jsx files
- **No tests** - testing framework not configured

### 9. Documentation Rules
- **Update AGENTS.md** for new asset conventions
- **Update CLAUDE.md** for AI agent rule changes
- **NO README.md** creation unless explicitly requested
- **NO unsolicited documentation** files
- **Preserve LICENSE** file with proper attribution

### 10. Dependency Management Rules
- **Core versions:** Don't change React, Vite, or i18next without justification
- **Lock file:** Always commit `package-lock.json` changes
- **Updates:** Only update for bug fixes or required features
- **New packages:** Justify any new dependency additions

## ⚠️ CRITICAL DON'TS
1. **DON'T use class components** - functional components only
2. **DON'T hardcode text** - always use i18n
3. **DON'T create test files** - no testing framework configured
4. **DON'T use TypeScript files** (.ts/.tsx) - project uses .jsx
5. **DON'T modify CI/CD workflow** unless fixing deployment issues
6. **DON'T add Redux/Context** - maintain props drilling pattern
7. **DON'T create README.md** unless explicitly requested
8. **DON'T use yarn or pnpm** - npm only
9. **DON'T ignore ESLint errors** - fix all issues
10. **DON'T push directly to main** - use PR workflow

## ✅ CRITICAL DO'S
1. **DO follow existing patterns** exactly as established
2. **DO test locally** with both `npm run dev` and `npm run build`
3. **DO maintain EN/PT translations** for all new text
4. **DO use Tailwind CSS** as primary styling method
5. **DO test both themes** (light and dark)
6. **DO follow mobile-first** responsive approach
7. **DO use React Hooks** properly and consistently
8. **DO maintain clean** component structure
9. **DO respect** the existing architecture
10. **DO verify** changes work on both themes and languages

## 🔍 Pre-Task Checklist
Before starting any task:
- [ ] Review existing component patterns
- [ ] Check current naming conventions
- [ ] Plan translation keys for new text
- [ ] Consider theme compatibility
- [ ] Consider responsive design needs
- [ ] Review this CLAUDE.md file

## 📝 Standard Workflow
1. Create feature branch from `main`
2. Implement changes following all rules above
3. Add/update translations in both locale files
4. Test with `npm run dev` on both themes
5. Test language switching functionality
6. Run `npm run lint` and fix all issues
7. Run `npm run build` to verify production build
8. Commit with descriptive message
9. Create PR to `main` branch

## 🚀 Quick Commands
```bash
# Development
npm run dev          # Start development server
npm run build        # Create production build
npm run preview      # Preview production build
npm run lint         # Check for linting errors

# Git
git checkout main    # Switch to main branch
git pull origin main # Update main branch
git checkout -b feature-name # Create new feature branch
```

## 📊 Current Tech Stack Details
```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "vite": "^7.1.7",
  "i18next": "^25.6.0",
  "react-i18next": "^16.2.0",
  "react-icons": "^5.5.0",
  "react-scroll": "^1.9.3",
  "tailwindcss": "^4.1.16",
  "eslint": "^9.36.0"
}
```

## 🎨 Theme System
- **Light theme:** Default, uses `body.light` class
- **Dark theme:** Uses `body.dark` class
- **Storage key:** `theme` in localStorage
- **Toggle component:** `ThemeSwitcher.jsx`
- **Icons:** FiSun (light), FiMoon (dark)

## 🌐 Language System
- **Languages:** English (en), Portuguese (pt)
- **Default:** English
- **Storage key:** `language` in localStorage
- **Toggle component:** `LanguageSwitcher.jsx`
- **Icon:** FiGlobe
- **Flags:** Canada (en), Brazil (pt) in `src/assets/icons/`

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Mobile-first approach (styles build up from mobile)

## 🔧 Known Configuration Files
- `vite.config.js` - Vite bundler config
- `eslint.config.js` - ESLint rules (flat config)
- `package.json` - Dependencies and scripts
- `.gitignore` - Git ignore patterns
- `CNAME` - GitHub Pages custom domain
- `.github/workflows/deploy.yml` - CI/CD pipeline

## 📌 Important Notes
- This is Felipe dos Santos' personal portfolio
- Production site: https://felipedossantos.com
- No testing framework is configured
- No TypeScript despite having type packages
- Project actively uses AI agents for development
- Glassmorphism styling recently adopted

## 🤖 AI Agent Specific Guidance
When working on this project:
1. Always read this file first
2. Follow rules strictly - no exceptions
3. Test everything locally before committing
4. Maintain the established patterns
5. Don't introduce new paradigms without explicit approval
6. Keep the site bilingual and theme-aware
7. Respect the minimalist, clean design approach
8. Focus on performance and accessibility
9. Maintain backward compatibility
10. Update this file if rules change significantly

---
**Last Updated:** January 2025
**Maintained for:** Claude AI Assistant Sessions
**Purpose:** Ensure consistency across all AI agent contributions to the cxfos.github.io project