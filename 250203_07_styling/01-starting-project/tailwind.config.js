import { plugin } from 'mongoose'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extent: {
      fontFamily: {
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugin: [],
};