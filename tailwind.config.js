/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        black0: "#000000",
        black1: "#111111",
        black3: "#333333",
        black1_07: "#11111170",
        white: "#ffffff",
        main_Red: "#E50914",
        graBlue: "#281867",
      },
      width : {
        m_container : "1200px",
      }
    },
  },
  plugins: [],
};
