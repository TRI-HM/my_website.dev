import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease forwards',
        'fade-in-delay-100': 'fade-in 1s ease forwards 0.1s',
        'fade-in-delay-200': 'fade-in 1s ease forwards 0.2s',
        'fade-in-delay-300': 'fade-in 1s ease forwards 0.3s',
        'fade-in-delay-500': 'fade-in 1s ease forwards 0.5s',
      }
    },
  },
  plugins: [],
} satisfies Config;
