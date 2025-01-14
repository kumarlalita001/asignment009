/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      colors: {
        bgColor: '#2d3436',
        secondaryBg: '#636e72',
        accentBg: '#ffeaa7',
        hoverColor: '#fdcb6e',
        primaryFont: '#ffffff',
        secondaryFont: '#b2bec3',
        errorColor: '#d63031',
        successColor: '#00b894',
      },

      spacing: {
        '5': '1.25rem', // Custom small spacing
        '18': '4.5rem', // Custom medium spacing
        '72': '18rem', // Custom large spacing
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
