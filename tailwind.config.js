const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        themeColor: '#F19D08'
      },
      fontFamily:{
        playwriteArgentina: ['Playwrite AR', 'sans-serif']
      },

    },
  },
  plugins: [],
});