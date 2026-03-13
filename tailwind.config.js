/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme with accent colors extracted from GP branding
        'gp-gold': '#C9A961',      // Warm gold accent
        'gp-teal': '#4A9B8E',      // Professional teal
        'gp-cream': '#FBF8F3',     // Warm off-white
        'gp-light': '#F5F2ED',     // Slightly darker cream
        'gp-text': '#2C2C2C',      // Dark text for light backgrounds
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FBF8F3 0%, #F5F2ED 100%)',
        'glass': 'rgba(255, 255, 255, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 4px 16px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
