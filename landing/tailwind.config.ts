import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bp: {
          bg: "#0b0b0c",
          elevated: "#141416",
          surface: "#1a1a1d",
          border: "#2c2c30",
          text: "#f4f1ea",
          muted: "#9b968c",
          soft: "#c8c2b6",
          accent: "#d4a017",
          danger: "#c45c3e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};
export default config;
