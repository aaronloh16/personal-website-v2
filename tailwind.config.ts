import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "rgb(var(--color-black) / <alpha-value>)",
      grey: "rgb(var(--color-grey) / <alpha-value>)",
      orange: "rgb(var(--color-orange) / <alpha-value>)",
      lightGrey: "rgb(var(--color-lightGrey) / <alpha-value>)",
      darkTeal: "rgb(var(--color-darkTeal) / <alpha-value>)",
      lightTeal: "rgb(var(--color-lightTeal) / <alpha-value>)",
      white: "rgb(var(--color-white) / <alpha-value>)",
    },
    fontFamily: {
      serif: ["var(--font-crimson-pro)"],
      sans: ["var(--font-inter)"],
    },
    extend: {},
  },
  plugins: [],
};

export default config;
