/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0064',
        secondary: '#F5F7FA',
       
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

