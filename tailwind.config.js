/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000",
        primary: {
          100: "#a273ff",
          200: "#935bff",
          300: "#8344ff",
          400: "#742cff",
          500: "#6415FF",
          600: "#5a13e6",
          700: "#5011cc",
          800: "#460fb3",
          900: "#3c0d99",
        },

        secondary: {
          100: "#7c8ba1",
          200: "#667892",
          300: "#506582",
          400: "#3a5173",
          500: "#243E63",
          600: "#203859",
          700: "#1d324f",
          800: "#192b45",
          900: "#16253b",
        },
      },
    },
  },
  plugins: [],
};
