/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#E4007E", // "#e4027d", // your customize primary color
        secondary: "#050774",
        "secondary-light": "#0A84FF", // your customize secondary color
        muted: "#81817E",
        textdefault: "#4D4D4D",
        success: "#16a34a", // green-600
        error: "#dc2626", // red-600
        warning: "#ca8a04", // yellow-600
        info: "#2563eb", // blue-600
        "primary-blue": "",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(50, 50, 93, 0.25), 0 0 3px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
