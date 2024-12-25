/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        "custom-pulse": "custom-pulse 5s ease-in-out infinite",
      },
      keyframes: {
        "custom-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
