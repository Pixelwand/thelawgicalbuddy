/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Tilt Neon", 'cursive'],
      },
      colors: {
        airforce:"#00308F",
        buttonColor: "#008cff",
        learningBackground: "#5a6273",
        // background: linear-gradient(right, #0052d4, #4364f7, #6fb1fc);
      },
    },
  },
  plugins: [],
};
