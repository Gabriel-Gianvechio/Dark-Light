/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Habilita o modo escuro baseado em classe
  theme: {
    extend: {
      colors: {
        'eggshell-white': '#F5F5F5',
        'claude-beige': '#F8F5F2',
        'dark-background': '#121212',
      }
    },
  },
  plugins: [],
}