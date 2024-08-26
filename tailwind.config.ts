import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "var(--background-light)",
          dark: "var(--background-dark)",
        },
        primary: {
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
          foreground: {
            light: "var(--primary-foreground-light)",
            dark: "var(--primary-foreground-dark)",
          },
        },
        accent: {
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
          foreground: {
            light: "var(--accent-foreground-light)",
            dark: "var(--accent-foreground-dark)",
          },
        },

        muted: {
          light: "var(--muted-light)",
          dark: "var(--muted-dark)",
          foreground: {
            light: "var(--muted-foreground-light)",
            dark: "var(--muted-foreground-dark)",
          },
        },
        secondary: {
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        success: {
          light: "var(--success-light)",
          dark: "var(--success-dark)",
        },
        warning: {
          light: "var(--warning-light)",
          dark: "var(--warning-dark)",
        },
        error: {
          light: "var(--error-light)",
          dark: "var(--error-dark)",
        },
        danger: {
          light: "var(--danger-light)",
          dark: "var(--danger-dark)",
        },
        border: {
          light: "var(--border-light)",
          dark: "var(--border-dark)",
        },
        text: {
          light: "var(--text-light)",
          dark: "var(--text-dark)",
        },
        link: {
          light: "var(--link-light)",
          dark: "var(--link-dark)",
        },
        highlight: "var(--highlight-color)",
      },
      borderColor: {
        dark: "var(--border-dark)",
        light: "var(--border-light)",
      },
    },
  },
  plugins: [typography],
};
export default config;
