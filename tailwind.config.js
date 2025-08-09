/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'soft-peach': '#EDC7B7',
        'light-cream': '#EEE2DC',
        'muted-lavender': '#BAB2B5',
        'deep-blue': '#123C69',
        'bold-burgundy': '#AC3B61',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1.5s ease-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
