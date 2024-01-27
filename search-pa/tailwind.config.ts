import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'elice-purple': '#524fa1',
        'elice-white':'#F0F1F3', //background & filtering background
        'text-black':'#222', //title color
        'text-gray':'#5e5f61', //descirption color
        'text-icon-gray':'#7d7e80 ',
        'box-border': 'rgb(201, 202, 204)',
        'table-title-bg':'#F9FAFC',
        'filtering-title':'#71746F',
        'filtering-title-border': '#E1E2E4',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
