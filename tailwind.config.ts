import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tp: {
          navy: "#0F1F2E",
          "navy-mid": "#1A3347",
          "navy-light": "#2C4A62",
          gold: "#C9A84C",
          "gold-light": "#E2C06F",
          cream: "#F7F4EE",
          "cream-dark": "#EDE9E0",
          stone: "#9E9484",
          charcoal: "#2A2A2A",
          success: "#3A7D5B",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "5xl": ["3rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1.05" }],
        "7xl": ["4.5rem", { lineHeight: "1.0" }],
      },
    },
  },
  plugins: [],
};
export default config;
