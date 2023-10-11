/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        py: '#3776AB',
        third: '#F45050',
        primary: '#141529',
        secondary: '#F45050',
        fortext: '#F9D949',
        shadowBro: '#B2A4FF',
        boxColor: '#330100',
        docker: '#2496ED',
        go: '#00ADD8',
        bash: '#4EAA25',
        k8s: '#326CE5',
        telwin: '#06B6D4',
        linux: '#FCC624',
        cardBg: '#18202B',
        shadowCard: '#FF79C6',
        textCard: '#84DBEF',
        bgCv: '#F8F0E5',
        boxCv: '#102C57',
        titleCv: '#2463C3',
        textCV: '#EADBC8',
        js: '#F7DF1E'
        
      },
      fontFamily: {
        firaCode: "'Fira Code', monospace",
        bitFont: "'Silkscreen', cursive",
        japanFont: "'Noto Sans JP', sans-serif",
        rubikFont: "'Rubik Mono One', sans-serif"
      },
      screen: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}