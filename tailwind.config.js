module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#6366F1", // Indigo
          dark: "#4F46E5",
          light: "#A5B4FC",
        },
        accent: "#0EA5E9", // Sky
        background: "#F9FAFB", // Light Gray
        foreground: "#111827", // Dark Gray/Almost Black
        muted: "#E5E7EB", // Border/light bg
        border: "#D1D5DB",
        card: "#FFFFFF",
        destructive: "#EF4444", // Red
      },
    },
  },
  plugins: [],
}
