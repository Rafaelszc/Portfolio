/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#212325',
          100: '#1c1e21',
      },
      green: {
        350: '#9AB858',
      }
    },
    height: {
      'md-header': '60px',
      'md-section': '580px',
      'md-project': '550px'
    },

    keyframes: {
      typing: {
          "0%": {
            width: "0px",
          },
          "100%": {
            width: "110%"
          }
        },
        blink: {
          "0%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },

        arise: {
          "0%": {
            transform: "translateY(80vh)",
          },
          "80%": {
            transform: "translateY(-1vh)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },

        float: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-50px)",
          },
          "100%": {
            transform: "translateY(0)",
          }
        },
    },
    animation: {
        typing: "typing 2s steps(13) infinite alternate-reverse, blink 0.8s steps(13) infinite alternate-reverse",
        arise: "arise 1.2s ease forwards",
        float: "float 3s ease-in-out infinite",
      }
  },
  },
  plugins: [
  ],
}

