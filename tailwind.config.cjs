/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 90s linear infinite",
        "marquee-reverse": "marquee-reverse 90s linear infinite",
      },
      backgroundColor: {
        "dark-primary": "#0A100D",
        "accent-primary": "#3CF290",
        "base-primary": "#5EE4AC",
        "gray-primary": "#151A17",
      },
      textColor: {
        "custom-emerald-200": "#CEE5D9",
        "custom-emerald-300": "#96A59B",
        "custom-emerald-700": "#435D52",

        "dark-primary": "#0A100D",
        "base-primary": "#5EE4AC",
      },
      borderColor: {
        "accent-primary": "#3CF290",
      },
      keyframes: {
        marquee: {
          "0%": {
            left: "0",
          },

          "100%": {
            left: "-100%",
          },
        },
        "marquee-reverse": {
          "0%": {
            right: "0",
          },

          "100%": {
            right: "-100%",
          },
        },
      },
    },
  },
  plugins: [],
};
