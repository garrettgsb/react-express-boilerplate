/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        subHeading: ['Roboto', 'sans-serif'],
        bodyFont: ['Open Sans', 'sans-serif'],
      },
      colors: {
        // Background Color
        background: '#f2f2f0',

        // Primary Text Color
        textPrimary: '#333333',

        // Secondary Text Color
        textSecondary: '#666666',

        // Accent (Link) Color
        accent: '#F27F3D',

        // Hover/Active Link Color
        accentHover: '#C3672A',

        // Button Color
        button: '#F27F3D',

        // Hover/Active Button Color
        buttonHover: '#C3672A',
      },
    },
  },
  plugins: [],
};