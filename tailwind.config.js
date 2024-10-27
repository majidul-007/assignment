import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#E7FE29',
        'secondary':'#B8CB20',
        'accent':'#7323be'
      },
      fontFamily:{
        'work-Sans':'"Work Sans", sans-serif',
        'inter-tight':'"Inter Tight", sans-serif',
        'inter':'"Inter", sans-serif'
      }
    },
  },
  plugins: [daisyui],
}

