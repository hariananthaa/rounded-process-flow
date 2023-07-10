/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translate(-15px)" },
          "50%": { transform: "translate(15px)" },
        },
        spin_anticlockwise: {
          "0%": {
            transform: "rotate(360deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        spin_clockwise: {
          "12%": {
            transform: "rotate(0deg)",
          },
          "80%": {
            transform: "rotate(360deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        path_animation: {
          "12%": {
            transform:
              "translate(500px, -400px) rotate(0deg) translateX(0px) translateY(400px)",
          },
          "80%": {
            transform:
              "translate(500px, -400px) rotate(-360deg) translateX(0px) translateY(400px)",
          },
          "100%": {
            transform:
              "translate(1050px, -400px) translateX(0px) translateY(400px)",
          },
        },
        border_dance: {
          "0%": {
            backgroundPosition: "0px 0px, 300px 116px, 0px 150px, 216px 0px",
          },
          "100%": {
            backgroundPosition: "300px 0px, 0px 116px, 0px 0px, 216px 150px",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.15s ease-in-out 1",
        spin_clockwise: "spin_clockwise 83s linear infinite",
        spin_anticlockwise: "spin_anticlockwise 50s linear infinite",
        border_dance: "border_dance 6s infinite linear;",
        path_animation: "path_animation 83s infinite linear",
      },
    },
  },
  plugins: [],
}
