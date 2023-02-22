const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-raleway)"],
        formal: ["var(--font-formal)"],
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      colors: {
        poudre: "#FDD8FF",
        mauve: "#E9D9FF",
        highlight: "#FF4E78",
        titles: "#5856C7",
        body: "#32317A",
        pink: "#FDD8FF",
        textlight: "#B8B8B8",
      },
      width: {
        "CTA-L": "10rem",
        "CTA-M": "8rem",
      },
      maxWidth: {
        body: "900px",
      },
      height: {
        "CTA-L": "3.5rem",
        "CTA-M": "2.8rem",
      },
      gridTemplateColumns: {
        wrap_2: "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
    keyframes: ({ theme }) => ({
      expand: {
        "0%": {
          ["transform"]: "scaleX(0)",
        },
        "100%": {
          ["transform"]: "scaleX(1)",
        },
      },
    }),
  },
};
