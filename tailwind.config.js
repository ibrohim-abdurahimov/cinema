import colors from'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'l': ['M']
    },
    extend: {
      backgroundImage:{
        'avengars': "url('./src/assets/avengarss.webp')",
        'panda': "url('./src/assets/panda.png')",
        'jon': "url('./src/assets/john-wick.jpg')",
        'venom': "url('./src/assets/venom.jpg')"
      }
    },
    colors:{
      ...colors,
      primary: '#C61F1F',
      footer: '#111111'
    },
    container:{
      center:true,
      screens:{
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1469px',
      }
    }
  },
  darkMode:'class',
  plugins: [],
}

