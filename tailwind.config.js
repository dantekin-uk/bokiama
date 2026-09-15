import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Navy - Logo & Inquire button
        secondary: "#f59e0b", // Gold - 'Discover the Heart' highlight text
        accent: "#d97706", // Orange - 'Explore Destinations' CTA button
        neutral: "#F1F4F8",
        navy: "#0f172a",
        gold: "#f59e0b",
        orange: "#d97706",
        navtext: "#334155",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Cinzel", "serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        serif: ["Merriweather", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
  ],
}
