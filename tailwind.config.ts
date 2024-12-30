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
        "background":"#343434",
        "foreground":"#F9F9F9",
        "price":"#DD8560"
      },
      screens:{
        "xs":"440px"
      }
    },
  },
  plugins: [],
};
export default config;
