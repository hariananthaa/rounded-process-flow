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
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        spin_clockwise: {
          "9.1%":{
            transform: "rotate(0deg)"
          },
          "18.2%":{
            transform: "rotate(-40deg)"
          },
          "27.3%":{
            transform: "rotate(-80deg)"
          },
          "36.4%":{
            transform: "rotate(-120deg)"
          },
          "45.5%":{
            transform: "rotate(-160deg)"
          },
          "54.6%":{
            transform: "rotate(-200deg)"
          },
          "63.7%":{
            transform: "rotate(-240deg)"
          },
          "72.8%":{
            transform: "rotate(-280deg)"
          },
          "81.9%":{
            transform: "rotate(-320deg)"
          },
          "91%":{
            transform: "rotate(-360deg)"
          },
          "100%":{
            transform: "rotate(-360deg)"
          }

        },
        path_animation: {
          "9.1%":{
            transform: "translate(0%,0%) rotate(0deg)"
          },
          "13.65%":{
            transform: "translate(160px,-80px) rotate(20deg)"
          },
          "18.2%":{
            transform: "translate(120px,-187px) rotate(40deg)"
          },
          "27.3%":{
            transform: "translate(120px, -374px) rotate(80deg)"
          },
          "36.4%":{
            transform: "translate(230px, -560px) rotate(120deg)"
          },
          "45.5%":{
            transform: "translate(413.5px,-670px) rotate(160deg)"
          },
          "54.6%":{
            transform: "translate(596px,-670px) rotate(200deg)"
          },
          "63.7%":{
            transform: "translate(780px,-560px) rotate(240deg)"
          },
          "72.8%":{
            transform: "translate(890px,-374px) rotate(280deg)"
          },
          "81.9%":{
            transform: "translate(890px,-187px) rotate(320deg)"
          },
          "91%":{
            transform: "translateX(780px) rotate(360deg)"
          },
          // "80%":{
          //   transform: "translate(780px, -560px) rotate(180deg) translateY(100px) translateX(0px)"
          // },
          // "81.9%":{
          //   transform: "translateX(780px) rotate(0deg) translateX(0px)"
          // },
          "100%":{
            transform:
              "translate(1050px, -380px) translateY(380px) rotate(0deg)",
          }
        },
        // path_animation: {
        //   "10%":{
        //     transform:
        //       "translate(300px, -380px) translateY(380px)",
        //   },
        //   "15%":{
        //     transform:
        //       "translate(300px, -30px) rotate(0deg) translateX(0px) translateY(30px)",
        //   },
        //   "20%":{
        //     transform:
        //       "translate(300px, -30px) rotate(-180deg) translateX(0px) translateY(30px)",
        //   },
        //   "50%":{
        //     transform:
        //       "translate(300px, -380px) rotate(-180deg) translateX(0px) translateY(380px)",
        //   },
        //   "80%":{
        //     transform:
        //       "translate(800px, -30px) rotate(-180deg) translateX(0px) translateY(30px)",
        //   },
        //   "85%":{
        //     transform:
        //       "translate(800px, -30px) rotate(-360deg) translateX(0px) translateY(30px)",
        //   },
        //   "90%":{
        //     transform:
        //       "translate(800px, -380px) translateY(380px)",
        //   },
        //   "100%": {
        //     transform:
        //       "translate(1100px, -380px) translateY(380px)",
        //   },
        // },
        // path_animation: {
        //   "0%":{ opacity: 0, transform: 'scale(0.8)' },
        //   "2%":{ opacity: 1, transform: 'scale(1) translate(84px, -380px) translateY(380px)' },
        //   "12%": {
        //     transform:
        //       "translate(220px, -380px) rotate(0deg) translateX(0px) translateY(380px)",
        //   },
        //   "87%": {
        //     transform:
        //       "translate(800px, -380px) rotate(360deg) translateX(0px) translateY(380px)",
        //   },
        //   "98%":{ opacity: 1, transform: 'scale(1) translate(980px, -380px) translateY(380px)' },
        //   "100%": {
        //     opacity: 0,
        //     transform:
        //       "translate(1050px, -380px) translateY(380px) scale(0.8)",
        //   },
        // },
        
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
        spin_clockwise: "spin_clockwise 20s linear infinite",
        spin_anticlockwise: "spin_anticlockwise 50s linear infinite",
        border_dance: "border_dance 6s infinite linear;",
        path_animation: "path_animation 20s infinite linear",
      },
    },
  },
  plugins: [],
}
