/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the VoxPRV logo
        royal: {
          50: "#eef1ff",
          100: "#e0e5ff",
          200: "#c6ceff",
          300: "#a3adff",
          400: "#7d87ff",
          500: "#4f6bff",
          600: "#3547f0",
          700: "#2a36cc",
          800: "#2530a4",
          900: "#232f82",
        },
        "indigo-glow": "#6366f1",
        "violet-glow": "#8b5cf6",
        charcoal: "#23252b",
        "warm-white": "#fcfcfd",
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "Georgia", "serif"],
      },
      animation: {
        "float-slow": "float 14s ease-in-out infinite",
        "float-med": "float 10s ease-in-out infinite reverse",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -32px, 0) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
