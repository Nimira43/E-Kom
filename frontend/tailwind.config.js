/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-text': '#444',
        'dark': '#111',
        'light': '#f5fffa',
        'blue-dark': '#2c6aef',
        'blue-medium': '#759ff9',
        'blue-light': '#c7ecfa',
        'grey-extra-light': '#eee',
        'grey-light': '#ccc',
        'grey-medium': '#777',
        'grey-dark': '#333',
      },
    },
  },
  plugins: [],
}