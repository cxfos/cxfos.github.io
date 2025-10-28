/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode for .dark class
  theme: {
    extend: {
      colors: {
        // Custom colors for consistency
        primary: {
          light: '#f3f4f6', // gray-100
          dark: '#1f2937',  // gray-800
        },
        secondary: {
          light: '#ffffff',
          dark: '#111827',  // gray-900
        }
      },
      backgroundColor: {
        'glass-light': 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'glass': '10px',
      }
    },
  },
  plugins: [],
}