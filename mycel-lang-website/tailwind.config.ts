// import type { Config } from "tailwindcss";
//
// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-inter)", "var(--font-geist-sans)"],
//         mono: ["var(--font-jetbrains-mono)", "var(--font-geist-mono)"],
//         times: ["Times New Roman", "Times", "serif"],
//         heading: ["Times New Roman", "Times", "serif"]
//
//       },
//       colors: {
//         substrate: "var(--substrate)",
//         mantle: "var(--mantle)",
//         crust: "var(--crust)",
//         humus: "var(--humus)",
//         loam: "var(--loam)",
//         bedrock: "var(--bedrock)",
//         mycelium: "var(--mycelium)",
//         amanita: "var(--amanita)",
//         hyphae: "var(--hyphae)",
//         lichen: "var(--lichen)",
//         spore: "var(--spore)",
//         chitin: "var(--chitin)",
//         indigo: "var(--indigo)",
//         mauve: "var(--mauve)",
//         success: "var(--success)",
//         warning: "var(--warning)",
//         error: "var(--error)",
//         info: "var(--info)",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
// tailwind.config.js

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // use .dark on <html>
    theme: {
        extend: {
            colors: {
                // UI foundation (Substrate tokens)
                substrate: "var(--substrate)",
                mantle: "var(--mantle)",
                crust: "var(--crust)",
                bedrock: "var(--bedrock)",
                humus: "var(--humus)",
                loam: "var(--loam)",

                // semantic
                success: "var(--success)",
                warning: "var(--warning)",
                error: "var(--error)",
                info: "var(--info)",

                // primary/secondary/etc (shadcn compat)
                background: "var(--background)",
                foreground: "var(--foreground)",
                card: "var(--card)",
                "card-foreground": "var(--card-foreground)",
                popover: "var(--popover)",
                "popover-foreground": "var(--popover-foreground)",
                primary: "var(--primary)",
                "primary-foreground": "var(--primary-foreground)",
                secondary: "var(--secondary)",
                "secondary-foreground": "var(--secondary-foreground)",
                muted: "var(--muted)",
                "muted-foreground": "var(--muted-foreground)",
                accent: "var(--accent)",
                "accent-foreground": "var(--accent-foreground)",
                destructive: "var(--destructive)",
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",

                // chart / syntax mapping
                "chart-1": "var(--chart-1)",
                "chart-2": "var(--chart-2)",
                "chart-3": "var(--chart-3)",
                "chart-4": "var(--chart-4)",
                "chart-5": "var(--chart-5)",

                // syntax colors (named per your guide)
                "syntax-mycelium": "var(--mycelium)",
                "syntax-hyphae": "var(--hyphae)",
                "syntax-lichen": "var(--lichen)",
                "syntax-indigo": "var(--indigo)",
                "syntax-mauve": "var(--mauve)",
                "syntax-amanita": "var(--amanita)",
                "syntax-chitin": "var(--chitin)",
                "syntax-spore": "var(--spore)",
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
                xl: "var(--radius-xl)",
            },
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
                mono: ["var(--font-mono)", ...fontFamily.mono],
                heading: ["Merriweather", "serif"],
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        // add other plugins you use
    ],
};
