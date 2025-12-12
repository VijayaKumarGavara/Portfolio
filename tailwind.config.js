/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        brand: {
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
        },

        light: {
          bg: "#F9FAFB",
          card: "#FFFFFF",
          border: "#E5E7EB",
          text: "#111827",
          text2: "#6B7280",
        },

        dark: {
          bg: "#0D0F14",
          card: "#1A1C23",
          border: "#2A2D35",
          text: "#E5E7EB",
          text2: "#9CA3AF",
        },

        accent: "#0EA5E9",
      },
      backgroundImage: {
        'hero-bg': "url('src/assets/bg.png')",
      }
    },
  },
  plugins: [],
};
