/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Tilt Neon', 'cursive'],
      },
      colors: {
        liberty: '#545AA7',
        intel: '#0071c5',
        darkblue: '#00008B',
        boeing: '#0039a6',
        orangered: '#FF4500',
        coral: '#FF7F50',
        lavender: '#E6E6FA',
        crayola: '#1F75FE',
        teagreen: '#D0F0C0',
        madrid: '#FEBE10',
        gold: '#FEBE10',
        astros: '#002D62',
        chelesa: '#034694',
        persian: '#1C39BB',
        airforce: '#00308F',
        buttonColor: '#008cff',
        learningBackground: '#5a6273',
        // background: linear-gradient(right, #0052d4, #4364f7, #6fb1fc);
      },
    },
  },
  plugins: [],
};
