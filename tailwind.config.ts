import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

// Tailwind plugin repos
// https://github.com/reslear/tailwind-scrollbar-hide
// https://github.com/tailwindlabs/tailwindcss-line-clamp/

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "#D6D6D8",
        texthighlight: "#D6D6D8",
        cardbg: "#262424",
        cardbordercolor: "#555863",
      },
      animation: {
        typewriter: "typewriter 1.5s steps(8) forwards",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
      },
    },
  },
  plugins: [scrollbarHide, require("@tailwindcss/line-clamp")],
} satisfies Config;

/* HIGHLIGHT TEXT COLOR #AC5126 */
/* TEXT COLOR #D6D6D8 */
/* BACKGROUND COLOR #262424 */
/* BORDER COLOR #555863 */
