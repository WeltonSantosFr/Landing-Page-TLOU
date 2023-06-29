/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      iceland: ["iceland"],
      actor: ["actor"],
    },
    extend: {
      backgroundImage: {
        "home-image": "url('src/assets/The-Last-Of-Us-HBO-Wallpaper-13 1.png')",
        "survival-image": "url('src/assets/survivalimage.png')",
        "relationship-image": "url('src/assets/the-last-of-us1.png')",
        "adventure-image": "url('src/assets/FF3P7D3VJ5DZ5FGALN2YYQU3ZM1.png')",
      },
    },
  },
  plugins: [],
};
