/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        tint: {
          primary: "#4192EF",     //For Primary buttons and so on
          red: "#EB4956",     //For dangers
        },
        black: {
          DEFAULT: "#000000",     //Background
          100: "#121212",         //For background to distinguish form default
          200: "#6C6C6C"          //For paragraph and captions
        },
        white: {
          DEFAULT: "#FFFFFF",      //Main texts
          100: "#E0F1FF",        //For links

        }
      },
      fontFamily: {
        rblack: ["Roboto-Black", "sans-serif"],
        rbold: ["Roboto-Bold", "sans-serif"],
        ritalic: ["Roboto-Italic", "sans-serif"],
        rlight: ["Roboto-Light", "sans-serif"],    
        rmedium: ["Roboto-Medium", "sans-serif"],
        rregular: ["Roboto-Regular", "sans-serif"],
        rthin: ["Roboto-Thin", "sans-serif"],

      }
    },
  },
  plugins: [],
}

