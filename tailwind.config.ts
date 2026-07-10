import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        dal: "var(--color-accent)",
        line: "var(--color-line)",
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
