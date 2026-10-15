import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        playball: ["var(--font-playball)", "cursive"],
      },
      colors: {
        brand: {
          black: "#000000",
          dark: "#232330",
          navy: "#002952",
          darkBlue: "#033361",
          blue: "#3BA0EA",
          lightBlue: "#097DF5",
          teal: "#0C9D93",
          green: "#08BEB7",
          orange: "#F7AA47",
          lightOrange: "#FFAA36",
        },
      },
      maxWidth: {
        '1800': '1800px',
      },
      keyframes: {
        slideDown: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        'cssload-rotate-one': {
          '0%': { transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(0)' },
          '100%': { transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(360deg)' },
        },
        'cssload-rotate-two': {
          '0%': { transform: 'rotateX(50deg) rotateY(10deg) rotateZ(0)' },
          '100%': { transform: 'rotateX(50deg) rotateY(10deg) rotateZ(360deg)' },
        },
        'cssload-rotate-three': {
          '0%': { transform: 'rotateX(35deg) rotateY(55deg) rotateZ(0)' },
          '100%': { transform: 'rotateX(35deg) rotateY(55deg) rotateZ(360deg)' },
        },
        wgl_circle: {
          '0%, 80%, to': { transform: 'scale(0)', opacity: '0' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.35s ease-out',
        'cssload-one': 'cssload-rotate-one 1.15s linear infinite',
        'cssload-two': 'cssload-rotate-two 1.15s linear infinite',
        'cssload-three': 'cssload-rotate-three 1.15s linear infinite',
        wgl_circle: 'wgl_circle 1.5s infinite',
      }
    },
  },
  plugins: [
    typography
  ],
};

export default config;
