export default {
  theme: {
    content: [
      "../ui/src/**/*.{ts,tsx}", 
      "../../apps/web/**/*.{ts,tsx}", 
    ],
    extend: {
         fontFamily: {
          pretendard: ["Pretendard", "sans-serif"],
         },
        screens: {
          xs: "480px",
          "2xl": "1536px",
          "3xl": "1920px",
        },
        colors: {
          black: {
            DEFAULT: "#000000", 
            80: "rgba(0, 0, 0, 0.8)", 
            90: "rgba(0, 0, 0, 0.9)", 
          },
          gray: {
            DEFAULT: "#F5F5F5",
            100: "#E5E5E5",
            200: "#D4D4D4",
            300: "#C4C4C4",

          },
          blue: {
            DEFAULT: "#0000FF",
            100: "#0000E5",
            200: "#0000D4",
            300: "#0000C4",
          },
          red: {
            DEFAULT: "#FF0000",
            100: "#E50000",
            200: "#D40000",
            300: "#C40000",
          },
        },
    },
  },
  plugins: [],
};