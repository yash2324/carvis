/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Open Sans"', "sans-serif"],
      header: ["'Merriweather'"],
      roboto: ["Roboto"],
      manrope: ["Manrope"],
      redHat: ["Red Hat Display"],
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        
      },
    },
  },
  plugins: [],
};
