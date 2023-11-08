const ui = require('@acme/ui/tailwind')
// const withMT = require("@material-tailwind/react/utils/withMT")

module.exports =  {
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
}
