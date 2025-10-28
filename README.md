# cxfos.github.io

This project is a Vite-powered single-page application for Felipe dos Santos' portfolio. Tailwind CSS is compiled locally via PostCSS so the theme palette and dark mode settings defined in `tailwind.config.js` are consistently applied.

## Development

1. Install dependencies once:
   ```bash
   npm install
   ```
2. Start the development server with hot module replacement (Tailwind scans `src/**/*.{js,jsx,ts,tsx}` for class usage during this
   step):
   ```bash
   npm run dev
   ```
   Tailwind CSS classes declared in `index.html` and any files under `src/` are processed automatically.
3. Create an optimized production build:
   ```bash
   npm run build
   ```

The generated CSS is built from the Tailwind directives in `src/index.css`, ensuring all utilities referenced in the JSX render correctly without loading the CDN runtime.
