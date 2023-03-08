/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Tilt Neon", 'cursive'],
      },
      colors: {
        liberty:"#545AA7",
        intel: "#0071c5",
        darkblue: "#00008B",
        boeing: "#0039a6",
        orangered: "#FF4500",
        coral:"#FF7F50",
        madrid: "#FEBE10",
        gold:"#FFD700",
        persian:"#1C39BB",
        airforce:"#00308F",
        buttonColor: "#008cff",
        learningBackground: "#5a6273",
        // background: linear-gradient(right, #0052d4, #4364f7, #6fb1fc);
      },
    },
  },
  plugins: [],
};
