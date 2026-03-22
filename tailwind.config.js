/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Poppins"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(89, 116, 69, 0.14)",
        card: "0 10px 30px rgba(101, 129, 71, 0.12)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(114, 151, 98, 0.22), transparent 35%), radial-gradient(circle at bottom right, rgba(89, 116, 69, 0.18), transparent 30%)",
      },
    },
  },
  plugins: [],
};
