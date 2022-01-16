module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "425px" },
      // => @media (min-width: 320px) { ... }

      md: "425px",
      // => @media (min-width: 425px) { ... }

      lg: "576px",
      // => @media (min-width: 576px) { ... }

      xl: "768px",
      // => @media (min-width: 768px) { ... }

      "2xl": "1024px",
      // => @media (min-width: 1024px) { ... }

      "3xl": "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        patrickHand: ["Patrick Hand", "sans-serif"],
        vujahday: ["Vujahday Script", "sans-serif"],
      },
      width: {
        88: "22rem",
      },
      height: {
        "40vh": "40vh",
        "60vh": "60vh",
        "80vh": "80vh",
      },
    },
  },
  plugins: [],
};
