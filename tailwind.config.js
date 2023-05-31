/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trooth: {
          "primary-100": "rgb(var(--trooth-primary-100) / <alpha-value>)",
          "primary-200": "rgb(var(--trooth-primary-200) / <alpha-value>)",
          "primary-300": "rgb(var(--trooth-primary-300) / <alpha-value>)",
          "primary-400": "rgb(var(--trooth-primary-400) / <alpha-value>)",
          "primary-500": "rgb(var(--trooth-primary-500) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "logo-color":
          "linear-gradient(90deg, rgb(var(--trooth-primary-400)) 0%, rgb(var(--trooth-primary-300)) 40.62%, rgb(var(--trooth-primary-200)) 79.69%);",
        hero: "linear-gradient(67.1deg, rgb(var(--trooth-primary-100)) 0%, rgb(var(--trooth-primary-100) / .2) 100%);",
        "hero-dark": "linear-gradient(180deg, #555555 0%, #333333 100%)",
      },
    },
  },
  plugins: [],
};
