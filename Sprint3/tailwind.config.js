/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'menu-imagem': "url('/src/assets/Menu.svg')",
      },
      width: {
        'weed24': '24px',
      },
      height: {
        'high24' : '24px',
      }
    },
  },
  plugins: [],
}

