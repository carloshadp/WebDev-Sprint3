/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'menu-imagem': "url('/src/assets/Menu.svg')"
    },
  },
  plugins: [],
}

