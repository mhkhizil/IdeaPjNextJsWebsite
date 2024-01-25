import type { Config } from "tailwindcss";

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
  plugins: [],
};
export default config;
