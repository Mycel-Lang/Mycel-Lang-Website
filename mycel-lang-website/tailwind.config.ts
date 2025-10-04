import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-geist-sans)"],
        mono: ["var(--font-jetbrains-mono)", "var(--font-geist-mono)"],
        times: ["Times New Roman", "Times", "serif"],
        heading: ["Times New Roman", "Times", "serif"]

      },
      colors: {
        substrate: "var(--substrate)",
        mantle: "var(--mantle)",
        crust: "var(--crust)",
        humus: "var(--humus)",
        loam: "var(--loam)",
        bedrock: "var(--bedrock)",
        mycelium: "var(--mycelium)",
        amanita: "var(--amanita)",
        hyphae: "var(--hyphae)",
        lichen: "var(--lichen)",
        spore: "var(--spore)",
        chitin: "var(--chitin)",
        indigo: "var(--indigo)",
        mauve: "var(--mauve)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        info: "var(--info)",
      },
    },
  },
  plugins: [],
};
export default config;
