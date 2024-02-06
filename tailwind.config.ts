/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   colors:{
    primaryColor:"var(--primary)",
    secondaryColor:"var(--secondary)",
    textColor:"var(--text)",
    beigeColor:"var(--beige)",
   },
   fontSize:{
    navigation:"30px",
    heading:"170px",
    medium:"35px"
   }
    },
    fontFamily:{
      mont:'Montserrat'
    }
  },
  plugins: [
    plugin(({ addVariant, addUtilities }:any) => {
      addVariant("abled", "&:not([disabled])");
      addUtilities({
        '.flex-center': {
          "@apply flex justify-center items-center": {}
        },
      });
    }),

  ],
};
export default config;
