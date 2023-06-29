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
        "home-image":
          "url('static/images/The-Last-Of-Us-HBO-Wallpaper-13 1.png')",
        "survival-image": "url('static/images/survivalimage.png')",
        "relationship-image": "url('static/images/the-last-of-us1.png')",
        "adventure-image":
          "url('static/images/FF3P7D3VJ5DZ5FGALN2YYQU3ZM1.png')",
      },
    },
  },
  plugins: [],
};
