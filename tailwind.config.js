/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        accent: ['BebasNeue', 'sans-serif'],
      },
      colors: {
        'main-dark': '#111115',
      },
      dropShadow: {
        'black': [
          '0 2px 4px rgba(0, 0, 0, 1)',
          '0 10px 40px rgba(0, 0, 0, 0.4)'],
      },
      transitionDuration: {
        '2500': '2500ms',
      },
      plugins: [],
    }
  }
}
