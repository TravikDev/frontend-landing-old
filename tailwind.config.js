/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'footer': '880px',
      },
      backgroundImage: {
        'logo': "url('/public/img/logo.png')",

        'cat1': "url('/public/img/categories/cat1.jpg')",
        'cat2': "url('/public/img/categories/cat2.jpg')",
        'cat3': "url('/public/img/categories/cat3.jpg')",
        'cat4': "url('/public/img/categories/cat4.jpg')",
        'cat5': "url('/public/img/categories/cat5.jpg')",
        'cat6': "url('/public/img/categories/cat6.jpg')",

      },
    },
  },
  plugins: [],
}
