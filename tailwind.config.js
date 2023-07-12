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
          "13.65%":{
            transform: "rotate(-20deg)"
          },
          "18.2%":{
            transform: "rotate(-40deg)"
          },
          "22.75%":{
            transform: "rotate(-60deg)"
          },
          "27.3%":{
            transform: "rotate(-80deg)"
          },
          "31.85%":{
            transform: "rotate(-100deg)"
          },
          "36.4%":{
            transform: "rotate(-120deg)"
          },
          "40.95%":{
            transform: "rotate(-140deg)"
          },
          "45.5%":{
            transform: "rotate(-160deg)"
          },
          "50.05%":{
            transform: "rotate(-180deg)"
          },
          "54.6%":{
            transform: "rotate(-200deg)"
          },
          "59.15%":{
            transform: "rotate(-220deg)"
          },
          "63.7%":{
            transform: "rotate(-240deg)"
          },
          "68.25%":{
            transform: "rotate(-260deg)"
          },
          "72.8%":{
            transform: "rotate(-280deg)"
          },
          "77.35%":{
            transform: "rotate(-300deg)"
          },
          "81.9%":{
            transform: "rotate(-320deg)"
          },
          "86.45%":{
            transform: "rotate(-340deg)"
          },
          "91%":{
            transform: "rotate(-360deg)"
          },
          "100%":{
            transform: "rotate(-360deg)"
          }

        },
        path_animation:{
          "0%":{
            opacity: 1,
            transform: "translateX(0px)"
          },
          "2%":{
            opacity:1,
            transform: "translateX(50px)"
          },
          "9.1%":{
            transform: "translateX(210px) rotate(0deg)"
          },
          "13.65%":{
            transform: "translate(160px,-80px) rotate(20deg)"
          },
          "18.2%":{
            transform: "translate(110px,-187px) rotate(40deg)"
          },
          "22.75%":{
            transform: "translate(100px,-290px) rotate(60deg)"
          },
          "27.3%":{
            transform: "translate(110px, -393px) rotate(80deg)"
          },
          "31.85%":{
            transform: "translate(160px,-500px) rotate(100deg)"
          },
          "36.4%":{
            transform: "translate(210px, -580px) rotate(120deg)"
          },
          "40.95%":{
            transform: "translate(300px, -650px) rotate(140deg)"
          },
          "45.5%":{
            transform: "translate(380px,-680px) rotate(160deg)"
          },
          "50.05%":{
            transform: "translate(500px,-710px) rotate(180deg)"
          },
          "54.6%":{
            transform: "translate(620px,-680px) rotate(200deg)"
          },
          "59.15%":{
            transform: "translate(700px,-650px) rotate(220deg)"
          },
          "63.7%":{
            transform: "translate(790px,-580px) rotate(240deg)"
          },
          "68.25%":{
            transform: "translate(850px,-500px) rotate(260deg)"
          },
          "72.8%":{
            transform: "translate(900px,-393px) rotate(280deg)"
          },
          "77.35%":{
            transform: "translate(920px,-300px) rotate(300deg)"
          },
          "81.9%":{
            transform: "translate(900px,-200px) rotate(320deg)"
          },
          "86.45%":{
            transform: "translate(850px,-90px) rotate(340deg)"
          },
          "91%":{
            opacity: 1,
            transform: "translate(790px, -380px) translateY(380px) rotate(360deg) scale(1)"
          },
          "96%":{
            opacity: 1,
            transform: "translate(980px, -380px) translateY(380px) rotate(360deg) scale(1)"
          },
          "98%":{
            opacity: 0,
            transform:
              "translate(1050px, -380px) translateY(380px) rotate(360deg) scale(0)",
          },
          "100%":{
            opacity: 0,
            transform:
              "translate(1050px, -380px) translateY(380px) rotate(360deg) scale(0)",
          }
        },
        border_dance: {
          "0%": {
            backgroundPosition: "0px 0px, 300px 116px, 0px 150px, 216px 0px",
          },
          "100%": {
            backgroundPosition: "300px 0px, 0px 116px, 0px 0px, 216px 150px",
          },
        },
        highInterestRate: {
          "0%":{
            transform: "rotate(0deg) scale(0)"
          },
          "2%":{
            transform: "rotate(0deg) scale(0)"
          },
          "2.5%":{
            transform: "rotate(0deg) scale(1)"
          },
          "9.1%":{
            transform: "rotate(0deg)"
          },
          "13.65%":{
            transform: "rotate(-20deg)"
          },
          "18.2%":{
            transform: "rotate(-40deg)"
          },
          "22.75%":{
            transform: "rotate(-60deg)"
          },
          "27.3%":{
            transform: "rotate(-80deg)"
          },
          "31.85%":{
            display: "hidden",
            transform: "rotate(-100deg) scale(1)"
          },
          "33%":{
            transform: "rotate(-110deg) scale(0)"
          },
          "36.4%":{
            transform: " scale(0)"
          },
          "40.95%":{
            transform: " scale(0)"
          },
          "45.5%":{
            transform: " scale(0)"
          },
          "50.05%":{
            transform: " scale(0)"
          },
          "54.6%":{
            transform: " scale(0)"
          },
          "59.15%":{
            transform: " scale(0)"
          },
          "63.7%":{
            transform: " scale(0)"
          },
          "68.25%":{
            transform: " scale(0)"
          },
          "72.8%":{
            transform: " scale(0)"
          },
          "77.35%":{
            transform: " scale(0)"
          },
          "81.9%":{
            transform: " scale(0)"
          },
          "86.45%":{
            transform: " scale(0)"
          },
          "91%":{
            transform: " scale(0)"
          },
          "100%":{
            transform: " scale(0)"
          }
        },
        debt: {
          "0%":{
            transform: "rotate(0deg) scale(0)"
          },
          "1.5%":{
            transform: "rotate(0deg) scale(0)"
          },
          "2%":{
            transform: "rotate(0deg) scale(1)"
          },
          "9.1%":{
            transform: "rotate(0deg)"
          },
          "13.65%":{
            transform: "rotate(-20deg)"
          },
          "18.2%":{
            transform: "rotate(-40deg)"
          },
          "22.75%":{
            transform: "rotate(-60deg)"
          },
          "27.3%":{
            transform: "rotate(-80deg)"
          },
          "31.85%":{
            transform: "rotate(-100deg)"
          },
          "36.4%":{
            transform: "rotate(-120deg)"
          },
          "40.95%":{
            transform: "rotate(-140deg)"
          },
          "45.5%":{
            transform: "rotate(-160deg)"
          },
          "50.05%":{
            transform: "rotate(-180deg) scale(1)"
          },
          "53%":{
            transform: "rotate(-194deg) scale(1)"
          },
          "54.6%":{
            transform: "rotate(-200deg) scale(0)"
          },
          "59.15%":{
            transform: "rotate(-220deg) scale(0)"
          },
          "63.7%":{
            transform: "rotate(-240deg) scale(0)"
          },
          "68.25%":{
            transform: "rotate(-260deg) scale(0)"
          },
          "72.8%":{
            transform: "rotate(-280deg) scale(0)"
          },
          "77.35%":{
            transform: "rotate(-300deg) scale(0)"
          },
          "81.9%":{
            transform: "rotate(-320deg) scale(0)"
          },
          "86.45%":{
            transform: "rotate(-340deg) scale(0)"
          },
          "91%":{
            transform: "rotate(-360deg) scale(0)"
          },
          "100%":{
            transform: "rotate(-360deg) scale(0)"
          }
        },
        noSavings: {
          "0%":{
          transform: "rotate(0deg) scale(0)"
        },
        "1%":{
          transform: "rotate(0deg) scale(0)"
        },
        "1.5%":{
          transform: "rotate(0deg) scale(1)"
        },
          "9.1%":{
            transform: "rotate(0deg)"
          },
          "13.65%":{
            transform: "rotate(-20deg)"
          },
          "18.2%":{
            transform: "rotate(-40deg)"
          },
          "22.75%":{
            transform: "rotate(-60deg)"
          },
          "27.3%":{
            transform: "rotate(-80deg)"
          },
          "31.85%":{
            transform: "rotate(-100deg)"
          },
          "36.4%":{
            transform: "rotate(-120deg)"
          },
          "40.95%":{
            transform: "rotate(-140deg)"
          },
          "45.5%":{
            transform: "rotate(-160deg)"
          },
          "50.05%":{
            transform: "rotate(-180deg)"
          },
          "54.6%":{
            transform: "rotate(-200deg)"
          },
          "59.15%":{
            transform: "rotate(-220deg)"
          },
          "63.7%":{
            transform: "rotate(-240deg)"
          },
          "66%":{
            transform: "rotate(-252deg) scale(1)"
          },
          "68.25%":{
            transform: "rotate(-260deg) scale(0)"
          },
          "72.8%":{
            transform: "rotate(-280deg) scale(0)"
          },
          "77.35%":{
            transform: "rotate(-300deg) scale(0)"
          },
          "81.9%":{
            transform: "rotate(-320deg) scale(0)"
          },
          "86.45%":{
            transform: "rotate(-340deg) scale(0)"
          },
          "91%":{
            transform: "rotate(-360deg) scale(0)"
          },
          "100%":{
            transform: "rotate(-360deg) scale(0)"
          }
        },
      },
      animation: {
        wiggle: "wiggle 0.15s ease-in-out 1",
        spin_clockwise: "spin_clockwise 50s linear infinite",
        spin_anticlockwise: "spin_anticlockwise 50s linear infinite",
        border_dance: "border_dance 6s infinite linear;",
        path_animation: "path_animation 50s infinite linear",
        highInterestRate: "highInterestRate 50s infinite linear",
        debt: "debt 50s infinite linear",
        noSavings: "noSavings 50s infinite linear"
      },
    },
  },
  plugins: [],
}
