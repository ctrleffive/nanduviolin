/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    `./src/styles.ts`,
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        teko: ["Teko"],
      },
    },
  },
  plugins: [],
};
