/** @type {import('tailwindcss').Config} */

export default {
    theme: {
      // ... your theme configuration
    }
  }

  const ui = require('@acme/ui/tailwind')
const mat = require('@acme/ui/material')
// const withMT = require("@material-tailwind/react/utils/withMT")

module.exports =  mat.withMT({
  presets: [require('@material-tailwind/react'), ui],
  // `ui.content` includes a path to the components that are using tailwind in @acme/ui
  content: ui.content.concat([
    './pages/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '.@material-tailwind/react/**/*..{js,ts,jsx,tsx}',
  ]),
  theme: {
    extend: {},
  },
  plugins: [],
})
