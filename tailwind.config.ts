import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "1xl": "1440px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        pattern: `url('/svgs/pattern.svg')`,
      },
      colors: {
        accent: "#00B2A1",
        azure: "#EEFBFC",
        dew: "#EFFFFD",
        "white-smoke": "#F1EAEA",
        "wood-smoke": "#121212",
        shark: "#2A2A2A",
        "shark-2": "#202121",
        "shark-3": "#292D32",
        "dim-gray": "#727375",
        "dim-gray-2": "#515050",
        "dark-gray": "#A5A5A5",
        alabaster: "#FAFAFA",
        teal: "#046B61",
        mako: "#404449",
      },
      fontSize: {
        s13: ["0.81rem", "0.99rem"],
        s20: ["1.25rem", "1.88rem"],
        s26: ["1.625rem", "1.98rem"],
        s34: ["2.13rem", "1.69rem"],
        s46: ["2.88rem", "3.51rem"],
        s54: ["3.38rem", "3.38rem"],
      },
      spacing: {
        "18": "1.125rem",
      },
      dropShadow: {
        card: "0px -1px 20px #0000000D",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
