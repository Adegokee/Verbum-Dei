/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('./src/assest/logo-removebg.png)",
          'footer-texture': "url('/img/footer-texture.png')",
        }
      }
    }
  },
  plugins: [],
}