/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: 
      {
        'secondary': '#D434FE',
        'primary': '#150E28',
        'tertiary': '#903AFF'
      },
    },
  },
  plugins: [],
}

