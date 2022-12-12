/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./options.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'e9e8e7': '#e9e8e7',
        '8b8685': '#8b8685',
        '656463': '#656463',
        '454443': '#454443',
        '353433': '#353433',
        '252423': '#252423',
        '090807': '#090807',
        'bbeeff': '#bbeeff',
        'd7fc70': '#d7fc70',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};