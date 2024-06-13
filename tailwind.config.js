/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '600': '600px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        accent: ['BebasNeue', 'sans-serif'],
      },
      colors: {
        'main-dark': '#111115',
      },
      transitionDuration: {
        '2500': '2500ms',
      },
      plugins: [],
    }
  }
}
