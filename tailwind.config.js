/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        crimson: "#d9262a",
        black: "#000",
        darkslategray: "#4a4a4a",
        dimgray: "#636363",
        gray: {
          "100": "#7e7e7e",
          "200": "#777",
          "300": "rgba(0, 0, 0, 0.45)",
        },
        darkgray: "#a1a1a1",
        silver: {
          "100": "#c5c5c5",
          "200": "#bbb",
        },
        firebrick: "#a1181b",
        whitesmoke: "#f2f2f2",
        gainsboro: "#d9d9d9",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "8xs": "5px",
        "44xl-5": "63.5px",
        "8xl": "27px",
        "6xl": "25px",
        xl: "20px",
      },
    },
    fontSize: {
      "3xs": "10px",
      mini: "15px",
      "9xl": "28px",
      "21xl": "40px",
      xl: "20px",
      "6xl": "25px",
      "11xl": "30px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
