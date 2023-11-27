/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screen: {
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'sm': {'max': '420px'},
    },
    extend: {
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        subHeading: ['Roboto', 'sans-serif'],
        bodyFont: ['Open Sans', 'sans-serif'],
      },
      // colors: {
      //   // Background Color
      //   background: '#f2f2f0',

      //   // Primary Text Color
      //   textPrimary: '#333333',

      //   // Secondary Text Color
      //   textSecondary: '#666666',

      //   // Accent (Link) Color
      //   accent: '#F27F3D',

      //   // Hover/Active Link Color
      //   accentHover: '#C3672A',

      //   // Button Color
      //   button: '#F27F3D',

      //   // Hover/Active Button Color
      //   buttonHover: '#C3672A',
      // },
    },
  },
  plugins:[require("daisyui")],
  daisyui: {
    themes: [
    "default",
    "retro",
    "cyberpunk",
    "autumn",
    "aqua",
    "black",
    "night",
    "coffee",
      {
        default: {
          "primary": "#F27F3D", // primary button
          "secondary": "#F2B73D", // secondary button       
          "accent": "#5C9D9D", // icons, borders, deorative
          "neutral": "#f2f2f0", // text, headers
          "neutral-content": "#9C9C8B",
          "base-100": "#242b3b", //bg color
          "info": "#0073c7", 
          "success": "#00cc91",
          "warning": "#DAF23D",
          "error": "#ff5d89",
        },
      },
    ],
  },
};