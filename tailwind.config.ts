import { keyframes } from "framer-motion";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "402px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "float-1": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(5px, -5px)" },
          "50%": { transform: "translate(0, -10px)" },
          "75%": { transform: "translate(-5px, -5px)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-5px, -5px)" },
          "50%": { transform: "translate(0, -10px)" },
          "75%": { transform: "translate(5px, -5px)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(-8px, 0)" },
          "66%": { transform: "translate(8px, 0)" },
        },
      },
      animation: {
        "float-1": "float-1 3s ease-in-out infinite",
        "float-2": "float-2 4s ease-in-out infinite",
        "float-3": "float-3 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
