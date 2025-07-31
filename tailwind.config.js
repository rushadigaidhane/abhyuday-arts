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
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
