import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula"],
  },
};

export default config;
