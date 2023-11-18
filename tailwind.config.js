/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/public/assets/bg2.jpg')",
      },
      content: {
        'visibility': "url('/public/assets/visibility.svg')",
        'visibility_off': "url('/public/assets/visibility_off.svg')",
      },
    }
  },
  plugins: [],
}